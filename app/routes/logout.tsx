import { redirect, type ActionFunctionArgs } from "react-router";
import { logout } from "../lib/session.server";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const returnTo = String(form.get("returnTo") ?? "/");
  return logout(request, returnTo);
}

export function loader() {
  return redirect("/");
}
