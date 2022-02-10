import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { formatDate } from '../utils';

export default function FeaturedBlog() {
  const data = useStaticQuery(graphql`
    query GetFeaturedBlogs {
      blogs: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
        skip: 0
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date
              featuredImage {
                id
                childImageSharp {
                  fluid(maxWidth: 400) {
                    srcWebp
                  }
                }
              }
              slug
              title
            }
            timeToRead
          }
        }
      }
    }
  `);

  const blogs = data.blogs.edges;

  return (
    <div className="featured-blogs">
      <div className="row twin-cols">
        {blogs.map(({ node }, i) => {
          const { excerpt, frontmatter, timeToRead } = node;
          const { date, featuredImage, slug, title } = frontmatter;

          return (
            <div className="col" key={i}>
              <Link to={`/blogs/${slug}`}>
                <div className="item-img">
                  <div className="img-wrapper">
                    <img src={featuredImage.childImageSharp.fluid.srcWebp} className="img-cover" />
                  </div>
                </div>
                <p className="item-title">{title}</p>
                <p className="summary hint-text">{excerpt}</p>
                <div className="hint-text sub">
                  {formatDate(date)} • {timeToRead} min read
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
