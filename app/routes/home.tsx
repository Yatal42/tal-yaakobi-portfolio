import { useLoaderData, type MetaFunction } from "react-router";
import RetroHomePage from "../components/RetroHomePage";
import { reviews } from "../data/reviews";
import { listApprovedReviews } from "../lib/reviews/store.server";
import { localeFromPathname } from "../lib/locale";
import { homeMeta } from "../lib/seo";

export const meta: MetaFunction = ({ location }) => homeMeta(localeFromPathname(location.pathname));

export async function loader() {
  return { reviews: [...(await listApprovedReviews()), ...reviews] };
}

export default function Home() {
  const data = useLoaderData<typeof loader>();
  return <RetroHomePage reviews={data.reviews} />;
}
