import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { isReviewsDbConfigured } from "~/lib/reviews/db.server";
import {
  createPendingReview,
  getClientIp,
  getIpHash,
  isRateLimited,
  listApprovedReviews,
  listPendingReviews,
  updateReviewStatus,
} from "~/lib/reviews/service.server";
import { parseReviewInput } from "~/lib/reviews/validation";

function isAdminRequest(request: Request) {
  const token = process.env.REVIEWS_ADMIN_TOKEN;
  if (!token) return false;
  return request.headers.get("x-admin-token") === token;
}

async function readPayload(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = await request.json();
    return (body ?? {}) as Record<string, unknown>;
  }
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

export async function loader({ request }: LoaderFunctionArgs) {
  if (!isReviewsDbConfigured()) {
    return Response.json({ reviews: [] });
  }

  try {
    const url = new URL(request.url);
    const wantsPending = url.searchParams.get("status") === "pending";
    if (wantsPending) {
      if (!isAdminRequest(request)) {
        return Response.json({ error: "Unauthorized." }, { status: 401 });
      }
      const reviews = await listPendingReviews();
      return Response.json({ reviews });
    }
    const reviews = await listApprovedReviews();
    return Response.json({ reviews });
  } catch {
    return Response.json({ error: "Unable to load reviews right now." }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (!isReviewsDbConfigured()) {
    return Response.json(
      { error: "Reviews storage is not configured yet." },
      { status: 503 }
    );
  }

  if (request.method === "PATCH") {
    if (!isAdminRequest(request)) {
      return Response.json({ error: "Unauthorized." }, { status: 401 });
    }
    const payload = await readPayload(request);
    const id = String(payload.id ?? "").trim();
    const status = String(payload.status ?? "").trim();
    if (!id || !["approved", "rejected"].includes(status)) {
      return Response.json({ error: "Invalid moderation request." }, { status: 400 });
    }
    const updated = await updateReviewStatus(id, status as "approved" | "rejected");
    if (!updated) {
      return Response.json({ error: "Review not found." }, { status: 404 });
    }
    return Response.json({ ok: true });
  }

  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed." }, { status: 405 });
  }

  const payload = await readPayload(request);
  const parsed = parseReviewInput(payload);
  if (!parsed.value) {
    return Response.json({ error: parsed.error ?? "Invalid review." }, { status: 400 });
  }

  const ipHash = getIpHash(getClientIp(request));
  if (isRateLimited(ipHash)) {
    return Response.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  try {
    await createPendingReview(parsed.value, ipHash);
    return Response.json({
      ok: true,
      message: "Thanks! Your review was submitted and is waiting for approval.",
    });
  } catch {
    return Response.json({ error: "Could not submit your review." }, { status: 500 });
  }
}
