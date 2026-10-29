import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import AdminReviews from "../components/AdminReviews";
import { isAdmin } from "../lib/access.server";
import { getMessages, localeFromPathname } from "../lib/locale";
import {
  deleteReview,
  isReviewStoreConfigured,
  listAllReviews,
  setReviewStatus,
} from "../lib/reviews/store.server";
import { requireUser } from "../lib/session.server";
import type { StoredReview } from "../types/review";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const meta: MetaFunction = ({ location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  return [{ title: `${t.admin.title} | ${t.footer.name}` }, { name: "robots", content: "noindex" }];
};

async function requireAdmin(request: Request) {
  const user = await requireUser(request, new URL(request.url).pathname);
  if (!isAdmin(user.email)) throw new Response("Not found", { status: 404 });
  return user;
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdmin(request);
  if (!isReviewStoreConfigured()) return { configured: false, reviews: [] as StoredReview[] };
  return { configured: true, reviews: await listAllReviews() };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdmin(request);

  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    throw new Response("Forbidden", { status: 403 });
  }

  const form = await request.formData();
  const id = String(form.get("id") ?? "");
  const intent = String(form.get("intent") ?? "");
  if (!uuidPattern.test(id)) throw new Response("Bad request", { status: 400 });

  if (intent === "approve") await setReviewStatus(id, "approved");
  else if (intent === "reject") await setReviewStatus(id, "rejected");
  else if (intent === "pending") await setReviewStatus(id, "pending");
  else if (intent === "delete") await deleteReview(id);
  else throw new Response("Bad request", { status: 400 });

  return { ok: true };
}

export default function AdminReviewsRoute() {
  const data = useLoaderData<typeof loader>();
  return <AdminReviews configured={data.configured} reviews={data.reviews} />;
}
