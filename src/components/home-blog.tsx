import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import FeaturedBlog from './featured-blogs';

export default function HomeBlog() {
  return (
    <section className="homepage-writing container px-[15px] mx-auto mb-32">

      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <div className="homepage-section-title"><div><span className="section-kicker">03 / THE BLOG</span><h2>Notes from my editor<span>.</span></h2></div><Link to="/blogs" className="section-all-link">All posts ↗</Link></div>
        <FeaturedBlog variant="list" />
      </ScrollAnimation>
    </section>
  );
}
