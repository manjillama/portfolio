import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedBlogs from '../components/featured-blogs';
import BlogNavbar from '../components/blog-navbar';
import BlogList from '../components/blog-list';
import Footer from '../components/footer';

export default function Blogs() {
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
          <BlogList />
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
