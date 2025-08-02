import {
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";

import "./app.css";
import "./styles/global.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iIzI5NWE3ZCIvPgo8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiMwNTA4MmUiLz4KPHJlY3QgeD0iMTAiIHk9IjI0IiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0iIzI5NWE3ZCIvPgo8L3N2Zz4K"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tal Yaakobi - Full Stack Developer</title>
        <meta name="description" content="Creative developer focused on accessibility solutions and innovative experiences" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
