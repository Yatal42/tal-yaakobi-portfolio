import type { MetaFunction } from "react-router";
import DevelopmentPage from "../components/DevelopmentPage";
import { getMessages, localeFromPathname } from "../lib/locale";

export const meta: MetaFunction = ({ location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  return [
    { title: t.meta.developmentTitle },
    { name: "description", content: t.meta.developmentDescription },
  ];
};

export default function DevelopmentRoute() {
  return <DevelopmentPage />;
}
