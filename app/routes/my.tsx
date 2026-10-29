import { redirect, type LoaderFunctionArgs, type MetaFunction } from "react-router";
import PersonalArea from "../components/PersonalArea";
import { enrolledCourses } from "../lib/access.server";
import { getMessages, localeFromPathname, localizePath } from "../lib/locale";
import { requireUser } from "../lib/session.server";

export const meta: MetaFunction = ({ location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  return [{ title: `${t.personal.title} | ${t.footer.name}` }, { name: "robots", content: "noindex" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { pathname } = new URL(request.url);
  const user = await requireUser(request, pathname);
  if (enrolledCourses(user.email).length === 0) {
    throw redirect(localizePath("/#courses", localeFromPathname(pathname)));
  }
  return null;
}

export default function MyRoute() {
  return <PersonalArea />;
}
