import {
  Meta,
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
    href: "https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tal Yaakobi - Full Stack Developer</title>
        <meta name="description" content="Creative developer focused on accessibility solutions and innovative experiences" />
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
