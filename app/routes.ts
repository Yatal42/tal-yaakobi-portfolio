import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("teaching", "routes/teaching.tsx"),
  route("courses", "routes/courses.tsx"),
  route("courses/:courseId", "routes/courses.$courseId.tsx"),
  route("development", "routes/development.tsx"),
  route("login", "routes/login.tsx"),
  route("logout", "routes/logout.tsx"),
  route("auth/google", "routes/auth.google.tsx"),
  route("auth/google/callback", "routes/auth.google.callback.tsx"),
  route("api/reviews", "routes/api.reviews.ts"),
] satisfies RouteConfig;
