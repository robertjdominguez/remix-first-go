import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

import stylesHref from "../styles/index.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesHref,
    },
  ];
}

export default function Index() {
  return (
    <motion.div
      className='container'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
    >
      <h1>Welcome to Remix</h1>
      <Link to='/blog'>Blog</Link>
    </motion.div>
  );
}
