import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("teaching", "routes/teaching.tsx"),
  route("courses", "routes/courses.tsx"),
  route("development", "routes/development.tsx"),
  route("api/reviews", "routes/api.reviews.ts"),
] satisfies RouteConfig;
