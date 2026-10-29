import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteLoaderData,
} from "react-router";
import type { LinksFunction, LoaderFunctionArgs } from "react-router";
import RetroNavbar from "./components/RetroNavbar";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";
import LoginModal from "./components/LoginModal";
import { localeFromPathname } from "./lib/locale";
import { ViewerProvider } from "./lib/viewer";
import { getUser } from "./lib/session.server";
import { enrolledCourses, isAdmin } from "./lib/access.server";

import "./app.css";
import "./styles/theme.css";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);
  return {
    user: user ? { name: user.name, email: user.email } : null,
    enrolled: enrolledCourses(user?.email),
    admin: isAdmin(user?.email),
  };
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800&family=JetBrains+Mono:wght@400;600&family=Press+Start+2P&display=swap",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iIzI5NWE3ZCIvPgo8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiMwNTA4MmUiLz4KPHJlY3QgeD0iMTAiIHk9IjI0IiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0iIzI5NWE3ZCIvPgo8L3N2Zz4K",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const locale = localeFromPathname(pathname);
  const data = useRouteLoaderData<typeof loader>("root");

  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ViewerProvider user={data?.user ?? null} enrolled={data?.enrolled ?? []} admin={data?.admin ?? false}>
          <div className="site">
            <RetroNavbar />
            <main className="site-main">{children}</main>
            <Contact />
            <SiteFooter />
            <LoginModal />
          </div>
        </ViewerProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
