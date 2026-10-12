import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import CourseClassroom from "~/components/CourseClassroom";
import { filesFor, lessonsFor, userOwnsCourse } from "~/data/courseAccess";
import { courses } from "~/data/courses";
import { requireUser } from "~/lib/session.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data ? `${data.title} | Tal Yaakobi` : "Course | Tal Yaakobi" },
];

export async function loader({ request, params }: LoaderFunctionArgs) {
  const courseId = params.courseId ?? "";
  const course = courses.find((item) => item.id === courseId);
  const user = await requireUser(request, `/courses/${courseId}`);
  if (!course) {
    throw new Response("This course does not exist.", { status: 404 });
  }
  if (!userOwnsCourse(user.email, course.id)) {
    return { access: false as const, title: course.title, studentName: user.name };
  }
  return {
    access: true as const,
    title: course.title,
    studentName: user.name,
    lessons: lessonsFor(course.id),
    files: filesFor(course.id),
  };
}

export default function OwnedCourseRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data.access) {
    return (
      <div className="retro-container">
        <section className="retro-section login-section">
          <h1 className="pixel-heading classroom-title">{data.title}</h1>
          <p className="retro-text login-lead">
            {data.studentName}, this Google account has not bought this course.
          </p>
          <Link className="services-inline-link" to="/courses">
            Back to the catalog
          </Link>
        </section>
      </div>
    );
  }
  return <CourseClassroom {...data} />;
}
