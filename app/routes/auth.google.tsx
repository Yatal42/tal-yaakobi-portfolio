import type { LoaderFunctionArgs } from "react-router";
import { startGoogleLogin } from "../lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return startGoogleLogin(request);
}
