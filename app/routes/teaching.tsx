import type { MetaFunction } from "react-router";
import TeachingPage from "../components/TeachingPage";

export const meta: MetaFunction = () => [
  { title: "Teaching | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Private CS tutoring for university students, and M.A. research on how computer science is taught and how it could be taught better.",
  },
];

export default function TeachingRoute() {
  return <TeachingPage />;
}
