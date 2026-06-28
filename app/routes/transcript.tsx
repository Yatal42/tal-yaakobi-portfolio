import type { MetaFunction } from "react-router";
import TranscriptApp from "../components/transcript/TranscriptApp";

export const meta: MetaFunction = () => [
  { title: "Transcript - Tal Yaakobi" },
  {
    name: "description",
    content:
      "Accessible transcript extractor for deaf students - YouTube, Lemida/Moodle and uploaded subtitle files, rendered as a readable grid.",
  },
];

export default function TranscriptRoute() {
  return <TranscriptApp />;
}
