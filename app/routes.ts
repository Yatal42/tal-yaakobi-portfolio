import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("transcript", "routes/transcript.tsx"),
  route("api/youtube-transcript", "routes/api.youtube-transcript.ts"),
  route("transcript-api/youtube-transcript", "routes/transcript-api.youtube-transcript.ts"),
  route("api/reviews", "routes/api.reviews.ts"),
] satisfies RouteConfig;
