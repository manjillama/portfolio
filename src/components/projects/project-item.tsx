import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Project } from '../../constants';

export default function ProjectItem({
  project: { title, description, techStack, year, url, githubLink }
}: {
  project: Project;
}) {
  return (
    <div className="basis-12/12 sm:basis-6/12 md:basis-4/12 lg:basis-3/12 px-[15px] my-[15px] w-full">
      <ScrollAnimation animateOnce animateIn="fadeInUp project-item" style={{ height: '100%' }}>
        <a
          target="_blank"
          href={url || githubLink}
          rel="noopener noreferrer"
          className="p-[1.5rem] overflow-hidden rounded-md shadow-custom hover-effect flex flex-col h-full w-full"
        >
          <div className="flex flex-wrap">
            <div className="text-primary-regular grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[36px] h-[36px]"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="text-[1.1rem] text-gray-500">
              {githubLink && (
                <a href={githubLink} className="mr-[8px] hover:text-primary-regular inline-block" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[20px] h-[20px]"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
              {url && (
                <a href={url} className="hover:text-primary-regular inline-block" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[22px] h-[22px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <article className="my-4 grow">
            <span className="text-xs text-secondary-regular font-bold">{year}</span>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </article>

          <div>
            {techStack.map((stack) => (
              <span
                key={stack}
                className="text-[0.7rem] inline-block bg-sky-100 text-primary-dark px-[8px] py-[2px] mr-[4px] rounded-full	"
              >
                {stack}
              </span>
            ))}
          </div>
        </a>
      </ScrollAnimation>
    </div>
  );
}
