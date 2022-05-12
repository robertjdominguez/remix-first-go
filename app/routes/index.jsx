import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      className='container hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className='hero-deets'>
        <h1>I’m Rob, welcome to my site.</h1>
        <p>
          I’m an <span>educator</span> and <span>developer</span> that likes to
          solve problems. Currently, I'm finishing up work at The Altamont
          School as the Director of Education Technology.
          <br />
          <br />
          Soon, I'll be entering a new role with an exciting company. Check out
          my blog and see what's new.
        </p>
        <div className='hero-btns'>
          <Link className='primary' to='/posts'>
            🤙 What I'm up to...
          </Link>
          {/* <Link className='secondary' to='/posts'>
            🚀 Recent Projects...
          </Link> */}
        </div>
      </div>
      <div className='hero-img'>
        <img src='/face.png' />
      </div>
    </motion.div>
  );
}
