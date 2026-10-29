import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

const pages = [
  index("routes/home.tsx"),
  route("teaching", "routes/teaching.tsx"),
  route("courses", "routes/courses.tsx"),
  route("courses/:courseId", "routes/courses.$courseId.tsx"),
  route("development", "routes/development.tsx"),
] satisfies RouteConfig;

export default [
  ...pages,
  ...prefix("en", [
    index("routes/home.tsx", { id: "en-home" }),
    route("teaching", "routes/teaching.tsx", { id: "en-teaching" }),
    route("courses", "routes/courses.tsx", { id: "en-courses" }),
    route("courses/:courseId", "routes/courses.$courseId.tsx", { id: "en-course" }),
    route("development", "routes/development.tsx", { id: "en-development" }),
  ]),
  route("auth/google", "routes/auth.google.tsx"),
  route("auth/google/callback", "routes/auth.google.callback.tsx"),
  route("logout", "routes/logout.tsx"),
  route("api/reviews", "routes/api.reviews.ts"),
] satisfies RouteConfig;
