import React from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import FeaturedBlog from './featured-blogs';

export default function HomeBlog() {
  return (
    <div className="container px-[15px] mx-auto">
      <section>
        <h5 className="uppercase font-bold mb-4 text-center">Featured posts 📝</h5>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <div className="mx-[-15px]">
            <FeaturedBlog />
          </div>
          <div className="mt-6">
            <Link to="/blogs" className="text-sky-700 hover:underline">
              <small style={{ fontWeight: 600 }}>
                EXPLORE ALL <i className="fas fa-chevron-right"></i>
              </small>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
