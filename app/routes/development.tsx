import { redirect, type LoaderFunctionArgs } from "react-router";
import { localeFromPathname, localizePath } from "../lib/locale";

export function loader({ request }: LoaderFunctionArgs) {
  const locale = localeFromPathname(new URL(request.url).pathname);
  return redirect(localizePath("/", locale), 301);
}

export default function DevelopmentRoute() {
  return null;
}
