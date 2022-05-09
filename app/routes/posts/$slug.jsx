import { marked } from "marked";
import { fetcher, endpoint, GET_POST, renderer } from "../../../queries";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/night-owl.min.css",
    },
  ];
}

// Set the renderer to marked.
marked.setOptions({ renderer });

export const loader = async ({ params }) => {
  // api endpoint
  const fetchData = await fetcher(endpoint, GET_POST, { slug: params.slug });
  const { data } = await fetchData.json();

  return {
    post: data.post,
    body: marked(data.post.body),
  };
};

export default function PostSlug() {
  const { post, body } = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </motion.div>
  );
}
