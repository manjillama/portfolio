import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { formatDate } from '../utils';

export default function FeaturedBlog() {
  const data = useStaticQuery(graphql`
    query GetFeaturedBlogs {
      blogs: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
        limit: 3
      ) {
        nodes {
          frontmatter {
            date
            featured
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  srcWebp
                }
              }
            }
          }
          html
          id
          timeToRead
          excerpt(pruneLength: 250)
        }
      }
    }
  `);

  const blogs = data.blogs.nodes;

  return (
    <div className="flex flex-wrap">
      {blogs.map((blog: any) => {
        const { excerpt, frontmatter, id, timeToRead } = blog;
        const { date, featuredImage, slug, title } = frontmatter;

        return (
          <div className="basis-1/3 px-[15px] overflow-hidden hover:scale-101	transition duration-300" key={id}>
            <Link to={`/blogs/${slug}`} className="hover-effect">
              <div className="pt-[50%] relative">
                <div className="absolute inset-0">
                  <img
                    src={featuredImage.childImageSharp.fluid.srcWebp}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
              <p className="whitespace-nowrap	text-ellipsis	overflow-hidden text-lg font-bold mt-3">{title}</p>
              <p className="text-gray-600 text-[0.95rem] my-3">{excerpt}</p>
              <div className="text-sm text-gray-700 font-bold">
                {formatDate(date)} • {timeToRead} min read
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
