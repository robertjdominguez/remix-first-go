import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
} from "@remix-run/react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles/index.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Dominguez Dev",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

// export function scripts() {
//   return [
//     {
//       crossOrigin: "anonymous",
//       src: "https://kit.fontawesome.com/8b2181122f.js",
//     },
//   ];
// }

// // Tried passing this into the key and everything works as it should
// function stringGen() {
//   return `hello`;
// }

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Oh no!</h1>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const outlet = useOutlet();
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <script
          src='https://kit.fontawesome.com/8b2181122f.js'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body>
        <AnimatePresence exitBeforeEnter>
          <motion.main key={useLocation().pathname}>
            <Outlet />
            {/* {outlet} */}
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
