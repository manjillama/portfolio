import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { formatDate } from '../utils';

export default function FeaturedBlog() {
  const data = useStaticQuery(graphql`
    query GetFeaturedBlogs {
      blogs: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 6
        filter: { frontmatter: { published: { eq: true } } }
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
    <div className="flex flex-wrap mx-[-15px]">
      {blogs.map((blog: any) => {
        const { excerpt, frontmatter, id, timeToRead } = blog;
        const { date, featuredImage, slug, title } = frontmatter;
        return (
          <div className="sm:basis-1/3 basis-12/12 px-[15px] mb-10 overflow-hidden" key={id}>
            <Link to={`/blogs/${slug}`} className="hover:scale-101 transition duration-300 flex flex-col h-full">
              <div className="pt-[50%] relative basis-auto">
                <div className="absolute inset-0">
                  <img
                    alt={title}
                    src={featuredImage.childImageSharp.fluid.srcWebp}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col grow basis-auto">
                <div className="my-4">
                  <p className="whitespace-nowrap	text-ellipsis	overflow-hidden font-bold mb-2">{title}</p>
                  <p className="text-gray-600 text-sm grow">{excerpt}</p>
                </div>
                <div className="text-xs text-gray-500">
                  {formatDate(date)} • {timeToRead} min read
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
