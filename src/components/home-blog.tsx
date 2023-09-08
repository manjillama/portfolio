import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import FeaturedBlog from './featured-blogs';

export default function HomeBlog() {
  return (
    <section className="container px-[15px] mx-auto mb-32">
      <h5 className="font-bold mb-6 text-center text-2xl">Featured posts 📝</h5>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <FeaturedBlog />
        <div className="mt-2">
          <Link to="/blogs" className="text-primary-regular hover:underline">
            <small>
              EXPLORE ALL <i className="fas fa-chevron-right"></i>
            </small>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
