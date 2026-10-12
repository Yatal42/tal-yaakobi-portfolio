import type { MetaFunction } from "react-router";
import CoursesPage from "../components/CoursesPage";

export const meta: MetaFunction = () => [
  { title: "Courses | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Coming soon: full editions of Probability for Undergraduate Computer Science, Automata and Formal Languages, and Computability and Complexity.",
  },
];

export default function CoursesRoute() {
  return <CoursesPage />;
}
