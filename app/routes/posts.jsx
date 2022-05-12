import { Link, Outlet, useLocation } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div
      className='blog-layout'
      style={{ maxWidth: `1200px`, marginTop: `10vh` }}
      key='blog'
    >
      <div className='side-nav'>
        <div className='blog-img'>
          <img src='/face.png' />
        </div>
        <h3>Rob Dominguez</h3>
        <small>
          If you want to learn more about me, check out these posts. I've also
          got all my social links available right here.
          <FontAwesomeIcon icon={["fab", "github"]} color='white' />
        </small>
        <br />
        <div className='links'>
          <a href='https://github.com/robertjdominguez' target='_blank'>
            <FontAwesomeIcon icon='fa-brands fa-github' />
          </a>
          <a href='https://github.com/robertjdominguez' target='_blank'>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href='https://github.com/robertjdominguez' target='_blank'>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
        <br />
        {useLocation().pathname !== `/posts` && (
          <Link to='/posts' className='secondary' style={{ padding: `10 40` }}>
            &larr; Blog
          </Link>
        )}
      </div>
      <div className='blog-content'>
        <Outlet />
      </div>
    </motion.div>
  );
}
