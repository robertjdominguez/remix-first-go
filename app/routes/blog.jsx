import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetcher, endpoint, GET_ALL_POSTS } from "../../queries";
import { motion } from "framer-motion";

export const loader = async () => {
  const data = await fetcher(endpoint, GET_ALL_POSTS);
  const results = await data.json();
  return results;
};

export default function Blog() {
  const { data } = useLoaderData();
  return (
    <motion.div
      key='blog'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ x: -500, opacity: 0 }}
    >
      <h1>Blog</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
