import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import CoursesPage from "../components/CoursesPage";
import { courseIdsFor } from "../data/courseAccess";
import { getUser } from "../lib/session.server";

export const meta: MetaFunction = () => [
  { title: "Courses | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Coming soon: full editions of Probability for Undergraduate Computer Science, Automata and Formal Languages, and Computability and Complexity.",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);
  return {
    user: user ? { name: user.name } : null,
    ownedIds: user ? courseIdsFor(user.email) : [],
  };
}

export default function CoursesRoute() {
  return <CoursesPage />;
}
