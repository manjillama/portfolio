import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ProjectItem({
  item: { category, title, body, techStack, seekingFund, source },
}) {
  return (
    <div className="col">
      <ScrollAnimation animateIn="fadeInUp" style={{ height: '100%' }}>
        <a
          target="_blank"
          href={source}
          rel="noopener noreferrer"
          className="project-item"
        >
          <article>
            <small className="hint-text">{category}</small>
            <h3>{title}</h3>
            <p>
              {body}
              <span>Tech stack - {techStack}</span>
            </p>
          </article>
          {seekingFund && (
            <>
              <div class="p-msg"></div>
              <span class="msg">Seeking Funds</span>
            </>
          )}
          <div className="bg"></div>
        </a>
      </ScrollAnimation>
    </div>
  );
}
