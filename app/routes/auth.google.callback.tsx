import type { LoaderFunctionArgs } from "react-router";
import { finishGoogleLogin } from "~/lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return finishGoogleLogin(request);
}
