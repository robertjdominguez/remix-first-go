import { marked } from "marked";
import { fetcher, endpoint, GET_POST, renderer } from "../../../queries";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import slugStyles from "../../styles/slug.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: slugStyles,
    },
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
  const post = data.post;

  return {
    post,
    body: marked(post.body),
  };
};

function createDate(postDate) {
  let d = new Date(postDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(d);
}

export default function PostSlug() {
  const { post, body } = useLoaderData();

  return (
    <motion.div
      className='post-container'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -100, opacity: 0 }}
    >
      <h1>{post.title}</h1>
      <h4>{createDate(post.publishedAt)}</h4>
      <div
        className='blog-image'
        style={{ backgroundImage: `url(${post.image.url})` }}
      />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </motion.div>
  );
}
