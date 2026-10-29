import { useLocation } from "react-router";
import { en, type Messages } from "../locales/en";
import { he } from "../locales/he";

export type Locale = "he" | "en";
export type { Messages };

const messages: Record<Locale, Messages> = { he, en };

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "he";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizePath(pathname: string, locale: Locale): string {
  const [pathAndQuery, hash = ""] = pathname.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  const bare = stripLocale(path || "/");
  const localized = locale === "en" ? (bare === "/" ? "/en" : `/en${bare}`) : bare;
  const withQuery = query ? `${localized}?${query}` : localized;
  return hash ? `${withQuery}#${hash}` : withQuery;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function translateReviewApi(message: string, locale: Locale): string {
  return getMessages(locale).reviewApi[message] ?? message;
}

export function useI18n() {
  const location = useLocation();
  const locale = localeFromPathname(location.pathname);
  return {
    locale,
    dir: locale === "he" ? ("rtl" as const) : ("ltr" as const),
    t: getMessages(locale),
    location,
  };
}
