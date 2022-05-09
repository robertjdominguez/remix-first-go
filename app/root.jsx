import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const meta = () => ({
  charset: "utf-8",
  title: "Dominguez Dev",
  viewport: "width=device-width,initial-scale=1",
});

// Tried passing this into the key and everything works as it should
function stringGen() {
  return `hello`;
}

export default function App() {
  const outlet = useOutlet();
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AnimatePresence exitBeforeEnter>
          <motion.main key={useLocation().pathname}>{outlet}</motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
