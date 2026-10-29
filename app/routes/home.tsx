import { useLoaderData, type MetaFunction } from "react-router";
import RetroHomePage from "../components/RetroHomePage";
import { reviews } from "../data/reviews";
import { listApprovedReviews } from "../lib/reviews/store.server";
import { getMessages, localeFromPathname } from "../lib/locale";

export const meta: MetaFunction = ({ location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  return [
    { title: t.meta.homeTitle },
    { name: "description", content: t.meta.homeDescription },
  ];
};

export async function loader() {
  return { reviews: [...(await listApprovedReviews()), ...reviews] };
}

export default function Home() {
  const data = useLoaderData<typeof loader>();
  return <RetroHomePage reviews={data.reviews} />;
}
