import { Link } from "@remix-run/react";

function createDate(postDate) {
  let d = new Date(postDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(d);
}

export default function BlogCard({ title, slug, publishedAt, hook, imageUrl }) {
  return (
    <div className='card'>
      <div
        className='card-img'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='details'>
        <h3>{title}</h3>
        <small>{createDate(publishedAt)}</small>
        <p>{hook}</p>
        <Link className='primary' to={slug}>
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}
