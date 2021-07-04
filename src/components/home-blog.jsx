import React from 'react';
import { Link } from 'gatsby';
import FeaturedBlog from './featured-blogs';

export default function HomeBlog() {
  return (
    <div className="container-l">
      <section>
        <h5 className="hint-text text-center">Featured posts 📝</h5>
        <FeaturedBlog />
        <div>
          <Link to="/blogs" className="link">
            <small style={{ fontWeight: 600 }}>
              EXPLORE ALL <i className="fas fa-chevron-right"></i>
            </small>
          </Link>
        </div>
      </section>
    </div>
  );
}
