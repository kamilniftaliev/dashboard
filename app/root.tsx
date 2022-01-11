import { useContext } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import StoreContext from "./contexts/store";
import Header from "./containers/Header";

export const meta: MetaFunction = () => {
  return { title: "Experimental Remix App" };
};

export default function App() {
  return (
    <StoreContext.Provider value={{}}>
      <html className="" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link href="/output.css" rel="stylesheet" />
          <Meta />
          <Links />
        </head>
        <body className="bg-slate-100 dark:bg-slate-900 font-sans">
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    </StoreContext.Provider>
  );
}
