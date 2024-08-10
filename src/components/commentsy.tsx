import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import * as styles from './commentsy.module.css';

export default function Commentsy() {
  return (
    <div className="overflow-hidden">
      <section id="commentsy" className="container px-[15px] mx-auto mb-8">
        <div className="h-24" />
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <h5 className="text-center font-bold mb-6 text-2xl">Featured project ✨</h5>
          <div className="flex flex-wrap rounded-lg mb-4">
            <div className="lg:w-1/2 mb-4 lg:pr-20 flex flex-col justify-center">
              <h5>Add comments to your website in just a few minutes.</h5>
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-bold mr-[8px]">Commentsy </h4>
                <a
                  href="https://github.com/manjillama/commentsy"
                  className="mr-[8px] hover:text-primary-regular inline-block"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[15px] h-[15px]"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://commentsy.vercel.app/"
                  className="hover:text-primary-regular inline-block"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[15px] h-[15px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <div>
                {['Blog', 'Post', 'Photo', 'Ecommerce', 'Services'].map((project) => (
                  <span
                    key={project}
                    className="text-xs inline-block bg-sky-100 text-blue-900 px-[8px] py-[2px] mr-[4px] rounded-full"
                  >
                    {project}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-6 mb-12">
                &quot;Commentsy&quot; is an open-source service for developers, bloggers, and content creators looking
                to enhance their online presence and create a more interactive and engaging platform for their visitors.
                It simplifies the process of code integration and commenting, saving time and effort.
              </p>
            </div>
            <div className="lg:w-1/2 relative px-16 py-20">
              <img
                className={`${styles.left} rounded-xl border border-neutral-200  shadow-md`}
                src="/images/commentsy-1.jpg"
                alt="commentsy banner 1"
              />
              <img
                className={`${styles.right} rounded-xl absolute inset-0 rotate-12 scale-75 shadow-2xl`}
                src="/images/commentsy-2.jpg"
                alt="commentsy banner 2"
              />
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
