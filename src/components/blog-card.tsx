import React from 'react';
import { Link } from 'gatsby';
import { formatDate } from '../utils';
import { Blog } from '../types';

type Props = {
  blog: Blog;
};

function BlogCard({ blog }: Props) {
  const { excerpt, frontmatter, timeToRead } = blog;
  const { date, featuredImage, slug, title } = frontmatter;

  return (
    <Link to={`/blogs/${slug}`} className="flex my-4 py-4 hover:scale-101 transition duration-300">
      <div className="flex-[3_1] pr-1">
        <p className="font-bold mb-1">{title}</p>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 grow">{excerpt}</p>
        <div className="text-xs text-gray-500">
          {formatDate(date)} • {timeToRead} min read
        </div>
      </div>
      <div className="md:flex-[0_0_186px] flex-[0_0_130px] relative">
        <img
          src={featuredImage.childImageSharp.fluid.srcWebp}
          className="absolute inset-0 h-full object-cover w-full rounded-md"
        />
      </div>
    </Link>
  );
}

export default BlogCard;
