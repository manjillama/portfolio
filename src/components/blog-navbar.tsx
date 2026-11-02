import React from 'react';
import { Link } from 'gatsby';

export default function BlogNavbar() {
  return (
    <header className="notebook-nav">
      <nav className="notebook-container" aria-label="Main navigation">
        <Link to="/" className="notebook-brand" aria-label="Manjil Tamang home"><img src="/images/logo.png" alt="" /><span>Manjil Tamang <span>/ writing</span></span></Link>
        <div><Link to="/">Home</Link><Link to="/blogs/">All articles <span aria-hidden="true">↗</span></Link></div>
      </nav>
    </header>
  );
}
