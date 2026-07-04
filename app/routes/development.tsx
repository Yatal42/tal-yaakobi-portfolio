import type { MetaFunction } from "react-router";
import DevelopmentPage from "../components/DevelopmentPage";

export const meta: MetaFunction = () => [
  { title: "Development | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Software engineering projects, technical experiments, and the stack Tal Yaakobi builds with.",
  },
];

export default function DevelopmentRoute() {
  return <DevelopmentPage />;
}
