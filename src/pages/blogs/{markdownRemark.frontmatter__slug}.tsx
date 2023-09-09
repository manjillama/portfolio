import React from 'react';
import SEO from '../../components/seo';
import { Link, graphql } from 'gatsby';
import BlogNavbar from '../../components/blog-navbar';
import Footer from '../../components/footer';
import { StaticImage } from 'gatsby-plugin-image';
import { formatDate, readingTimeInMin } from '../../utils';
import Layout from '../../components/layout';
import { Blog } from '../../types';

type Props = {
  location: Location;
  data: {
    markdownRemark: Blog;
  };
};

function BlogDetail({ location, data }: Props) {
  const { frontmatter, html, timeToRead } = data.markdownRemark;
  const { title, featuredImage, date } = frontmatter;
  const { href } = location;

  return (
    <Layout>
      <BlogNavbar />
      <div className="blog-detail container mx-auto py-14 px-[15px]">
        <h1 className="text-4xl mb-2">{title}</h1>
        <div className="mb-2">
          <ul>
            <li className="inline-block mr-4 text-2xl text-gray-500 hover:text-primary-regular">
              <a href={`https://www.twitter.com/intent/tweet?url=${href}&text=${title}`} target="_blank">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li className="inline-block mr-4 text-2xl text-gray-500 hover:text-primary-regular">
              <a
                href={`https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${href}&display=page`}
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="inline-block mr-4 text-2xl text-gray-500 hover:text-primary-regular">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${href}`} target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="hint-text sub">
          {formatDate(date)} • {timeToRead} min read
        </div>
        <div>
          <img src={featuredImage.childrenImageSharp[0].fluid.originalImg} className="mx-auto mb-8" />
          <div className="blog-body text-lg" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date
        title
        featuredImage {
          childrenImageSharp {
            fluid {
              src
              originalImg
            }
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: Props) => {
  return <SEO />;
};

export default BlogDetail;
