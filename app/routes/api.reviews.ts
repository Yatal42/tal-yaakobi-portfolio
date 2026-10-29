import type { ActionFunctionArgs } from "react-router";
import { getClientIp, getIpHash } from "~/lib/net.server";
import { isRateLimited } from "~/lib/rateLimit.server";
import { sendReviewNotification } from "~/lib/reviews/email.server";
import { addPendingReview, isReviewStoreConfigured } from "~/lib/reviews/store.server";
import { parseReviewInput } from "~/lib/reviews/validation";

const RATE_SCOPE = "reviews";
const rateWindowMs = 10 * 60 * 1000;
const rateMaxSubmissions = 3;

async function readPayload(request: Request): Promise<Record<string, unknown>> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = await request.json();
    return (body ?? {}) as Record<string, unknown>;
  }
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed." }, { status: 405 });
  }

  if (!isReviewStoreConfigured()) {
    return Response.json(
      { error: "Review submissions are not configured yet." },
      { status: 503 }
    );
  }

  const payload = await readPayload(request);
  const parsed = parseReviewInput(payload);
  if (!parsed.value) {
    return Response.json({ error: parsed.error ?? "Invalid review." }, { status: 400 });
  }

  const ipHash = getIpHash(getClientIp(request));
  if (isRateLimited(RATE_SCOPE, ipHash, rateWindowMs, rateMaxSubmissions)) {
    return Response.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  try {
    await addPendingReview(parsed.value);
  } catch (error) {
    console.error("[reviews] Could not store review:", (error as Error).message);
    return Response.json({ error: "Could not submit your review right now." }, { status: 500 });
  }

  const siteUrl = process.env.PUBLIC_SITE_URL ?? new URL(request.url).origin;
  await sendReviewNotification(parsed.value, new URL("/admin/reviews", siteUrl).toString());

  return Response.json({
    ok: true,
    message: "Thanks! Your review was sent and will be added to the site soon.",
  });
}
