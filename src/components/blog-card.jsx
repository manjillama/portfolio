import React from 'react';
import { Link } from 'gatsby';
import { formatDate } from '../utils';

export default function BlogCard({ blog }) {
  const { excerpt, frontmatter, timeToRead } = blog;

  const { date, featuredImage, slug, title } = frontmatter;

  return (
    <Link to={`/blogs/${slug}`} className="card">
      <div className="card-left">
        <h2>{title}</h2>
        <p className="summary hint-text">{excerpt}</p>
        <div className="hint-text sub">
          {formatDate(date)} • {timeToRead} min read
        </div>
      </div>
      <div className="card-right">
        <div>
          <img src={featuredImage.childImageSharp.fluid.srcWebp} className="img-cover" />
        </div>
      </div>
    </Link>
  );
}
