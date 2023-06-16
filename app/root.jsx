import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navigation from "./components/Navigation/Navigation";
import { isLogged } from "./services/auth.server";

import styles from "./styles/main.css";
import { links as navigationLinks } from "./components/Navigation/Navigation";
import { links as NewListLinks } from "./components/NewList/NewList";
import { links as RemoveListLinks } from "./components/RemoveList/RemoveList";

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

export async function loader({ request }) {
  return await isLogged(request);
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    ...navigationLinks(),
    ...NewListLinks(),
    ...RemoveListLinks()
  ];
}