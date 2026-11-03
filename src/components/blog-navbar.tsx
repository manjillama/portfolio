import React from 'react';
import { Link } from 'gatsby';

export default function BlogNavbar() {
  return (
    <header className="notebook-nav">
      <nav className="notebook-container" aria-label="Main navigation">
        <p className="notebook-brand">Manjil Tamang <span>/ writing</span></p>
        <div><Link to="/">Home</Link><Link to="/blogs/">All articles <span aria-hidden="true">↗</span></Link></div>
      </nav>
    </header>
  );
}
