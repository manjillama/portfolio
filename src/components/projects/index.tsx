import React from 'react';
import ProjectItem from './project-item';
import ScrollAnimation from 'react-animate-on-scroll';
import { projects } from '../../constants';

export default function Projects() {
  return (
    <section id="projects" className="container px-[15px] mx-auto mb-8">
      <div className="h-24" />
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <h5 className="text-center font-bold mb-6 text-2xl">Open source projects 👨🏽‍💻</h5>
        <div className="flex flex-wrap mx-[-15px]">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
