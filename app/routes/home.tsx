import type { MetaFunction } from "react-router";
import RetroHomePage from "../components/RetroHomePage";
import { getMessages, localeFromPathname } from "../lib/locale";

export const meta: MetaFunction = ({ location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  return [
    { title: t.meta.homeTitle },
    { name: "description", content: t.meta.homeDescription },
  ];
};

export default function Home() {
  return (
    <RetroHomePage />
  );
}
