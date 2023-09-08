import React from 'react';
import ProjectItem from './project-item';
import { projects } from '../../constants';

export default function Projects() {
  return (
    <section id="experience" className="container px-[15px] mx-auto my-32">
      <h5 className="text-center font-bold mb-6 text-2xl">Personal projects 👨🏽‍💻</h5>
      <div className="flex flex-wrap mx-[-15px]">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
