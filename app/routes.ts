import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("transcript", "routes/transcript.tsx"),
  route("api/youtube-transcript", "routes/api.youtube-transcript.ts"),
] satisfies RouteConfig;
