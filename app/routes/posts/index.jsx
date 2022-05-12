import { useLoaderData, Outlet } from "@remix-run/react";
import { fetcher, endpoint, GET_ALL_POSTS } from "../../../queries";
import { motion } from "framer-motion";
import BlogCard from "../../components/blogCard";

export const loader = async () => {
  const data = await fetcher(endpoint, GET_ALL_POSTS);
  const results = await data.json();
  return results;
};

export default function BlogHome() {
  const { data } = useLoaderData();
  return (
    <motion.div
      initial={{ y: `-100`, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: `100`, opacity: 0 }}
    >
      <h1>
        Cool things I <span style={{ color: `var(--light-blue)` }}>write</span>{" "}
        about
      </h1>
      <h3 className='sub-text'>
        I spent nearly a decade in the classroom and working with some amazing
        educators. As such, there's a pretty large backlog of pedagogical and
        education-specific content. However, you'll also find my writings on
        problems and their solutions related to my work building services to
        help students and teachers. And, as my role as an engineer grows, I'll
        be writing more about my own experiences and what I've learned along the
        way.
      </h3>
      <motion.div className='gallery'>
        {data.posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            slug={post.slug}
            publishedAt={post.publishedAt}
            hook={post.hook}
            imageUrl={post.image.url}
          />
        ))}
        <Outlet />
      </motion.div>
    </motion.div>
  );
}
