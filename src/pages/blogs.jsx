import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Blogs() {
  return (
    <Layout>
      <SEO
        title="Read My Lastest Blogs | Manjil Tamang"
        description="Find and read all of my latest blogs. Programming, tip and tricks along with other interesting stuffs."
      />
      <div className="container-l">
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="text-center" style={{ width: '100%' }}>
            <h1>👋 COMING SOON!!!</h1>
            <br />
            <Link to="/" className="link">
              RETURN HOME
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
