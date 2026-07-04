import type { MetaFunction } from "react-router";
import TeachingPage from "../components/TeachingPage";

export const meta: MetaFunction = () => [
  { title: "Teaching & Research | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Private CS tutoring, full independent editions of university-level courses, and M.A. research on how computer science should be taught in academia.",
  },
];

export default function TeachingRoute() {
  return <TeachingPage />;
}
