import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedBlogs from '../components/featured-blogs';
import BlogNavbar from '../components/blog-navbar';
import BlogCard from '../components/blog-card';
import Footer from '../components/footer';

export default function Blogs({ data }) {
  const blogs = data.blogs.edges;
  return (
    <Layout>
      <SEO
        title="Read My Lastest Blogs | Manjil Tamang"
        description="Find and read all of my latest blogs. Programming, tip and tricks along with other interesting stuffs."
      />
      <BlogNavbar />
      <section>
        <div className="container-l">
          <h5 className="hint-text">Featured</h5>
          <FeaturedBlogs limit={2} />
        </div>
        <hr style={{ margin: '2rem 0' }} />
        <div className="container-md">
          <div className="blogs">
            {blogs.map(({ node }, i) => (
              <BlogCard key={i} blog={node} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query GetBlogs {
    blogs: allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit: 20, skip: 0) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            featuredImage {
              id
              childImageSharp {
                fluid(maxWidth: 300) {
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
`;
