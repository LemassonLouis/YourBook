import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navigation from "./components/Navigation/Navigation";

import styles from "./styles/main.css";
import { links as navigationLinks } from "./components/Navigation/Navigation";

export const meta = () => ({
  charset: "utf-8",
  title: "YourBook",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    ...navigationLinks(),

  ];
}