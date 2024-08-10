import React from 'react';
import { graphql } from 'gatsby';
import FeaturedBlogs from '../../components/featured-blogs';
import BlogNavbar from '../../components/blog-navbar';
import Layout from '../../components/layout';
import BlogCard from '../../components/blog-card';
import Footer from '../../components/footer';
import Seo from '../../components/seo';
import { Blog } from '../../types';

type Props = {
  data: {
    blogs: {
      nodes: Blog[];
    };
  };
};

function Blogs({ data }: Props) {
  const blogs = data.blogs.nodes;
  return (
    <Layout>
      <BlogNavbar />
      <div className="container mx-auto py-14 px-[15px]">
        <h5 className="font-bold mb-4 text-2xl">Featured</h5>
        <FeaturedBlogs />

        <hr style={{ margin: '2rem 0' }} />
        <div className="max-w-[910px] py-2 mx-auto">
          <div className="blogs">
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query GetBlogs {
    blogs: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 20
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date
          featuredImage {
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
          title
          slug
        }
        excerpt
        timeToRead
      }
    }
  }
`;

export default Blogs;

export const Head = () => {
  return <Seo title="Read my latest blogs" />;
};
