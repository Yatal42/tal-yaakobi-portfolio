import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import CourseClassroom from "../components/CourseClassroom";
import { courseIds, type CourseId } from "../data/courses";
import { hasCourseAccess } from "../lib/access.server";
import { getMessages, localeFromPathname } from "../lib/locale";
import { requireUser } from "../lib/session.server";

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const t = getMessages(localeFromPathname(location.pathname));
  const title = data ? t.courses.titles[data.courseId] : t.classroom.eyebrow;
  return [{ title: `${title} | ${t.footer.name}` }, { name: "robots", content: "noindex" }];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const courseId = params.courseId ?? "";
  if (!(courseIds as readonly string[]).includes(courseId)) {
    throw new Response("Not found", { status: 404 });
  }
  const user = await requireUser(request, new URL(request.url).pathname);
  const id = courseId as CourseId;
  return { courseId: id, access: hasCourseAccess(user.email, id), email: user.email };
}

export default function CourseRoute() {
  const data = useLoaderData<typeof loader>();
  return <CourseClassroom courseId={data.courseId} access={data.access} email={data.email} />;
}
