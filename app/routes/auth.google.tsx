import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { googleAuthConfigured, startGoogleLogin } from "~/lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  if (!googleAuthConfigured()) throw redirect("/login?error=google");
  return startGoogleLogin(request);
}
