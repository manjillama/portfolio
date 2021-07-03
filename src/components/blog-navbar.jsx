import React from 'react';
import { Link } from 'gatsby';

export default function BlogNavbar() {
  return (
    <nav className="blog-nav" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px', padding: '1.8rem 0' }}>
      <div className="container-l" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '1rem' }}>
          <Link to="/" style={{ display: 'block', height: '15px' }}>
            <img src="/images/logo.png" alt="logo" height="15" />
          </Link>
        </div>
        <div>
          <Link to="/blogs">
            <i className="fas fa-chevron-left"></i> BLOGS
          </Link>
        </div>
      </div>
    </nav>
  );
}
