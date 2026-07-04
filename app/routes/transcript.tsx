import type { MetaFunction } from "react-router";
import TranscriptApp from "../components/transcript/TranscriptApp";

export const meta: MetaFunction = () => [
  { title: "Transcriptor | Tal Yaakobi" },
  {
    name: "description",
    content:
      "Accessible transcript extraction from YouTube, Lemida/Moodle, and uploaded VTT/SRT files in a readable card layout.",
  },
];

export default function TranscriptRoute() {
  return <TranscriptApp />;
}
