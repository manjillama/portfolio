import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';
import { formatDate, readingTimeInMin, removeHTMLEntities } from '../../utils';
import Footer from '../footer';
import { useLocation } from '@reach/router';
import BlogNavbar from '../blog-navbar';
import { HasWindow } from '../../hooks';
import SEO from '../seo';

export default function BlogDetail({ data }) {
  const { html, frontmatter } = data.blog;
  const { title, featuredImage, date } = frontmatter;
  const { href } = useLocation();
  const isWindow = HasWindow();

  useEffect(() => {
    // https://highlightjs.org/
    window.hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <SEO
        title={title}
        image={`${process.env.GATSBY_HOST}${featuredImage.childImageSharp.fluid.src}`}
        description={removeHTMLEntities(html).split('.')[0]}
      />
      <BlogNavbar>
        <Link to="/blogs" style={{ fontWeight: 600 }}>
          <small>
            <i className="fas fa-chevron-left"></i> BLOGS
          </small>
        </Link>
      </BlogNavbar>
      <section>
        <div className="container-md blog-detail">
          <h1 className="title">{title}</h1>
          {isWindow && (
            <div className="socials">
              <ul className="list-neutralize list-inline">
                <li>
                  <a href={`https://www.twitter.com/intent/tweet?url=${href}&text=${title}`} target="_blank">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${href}&display=page`}
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${href}`} target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="hint-text sub">
            {formatDate(date)} • {readingTimeInMin(html)} min read
          </div>
          <div>
            <Img fluid={featuredImage.childImageSharp.fluid} style={{ marginBottom: '2rem' }} />
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query BlogDetail($slug: String) {
    blog: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
