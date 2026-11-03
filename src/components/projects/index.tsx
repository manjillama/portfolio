import Icon from '../ui/icon';
import React, { useState } from 'react';
import ProjectItem from './project-item';
import { projects } from '../../constants';

export default function Projects() {
  const [search, setSearch] = useState('');
  const visibleProjects = projects.filter(project =>
    [project.title, project.description, ...project.techStack].join(' ').toLowerCase().includes(search.toLowerCase().trim())
  );
  return (
    <section id="projects" className="homepage-projects container px-[15px] mx-auto">
      <div className="homepage-section-title">
        <div><span className="section-kicker">02 / OPEN SOURCE</span><h2>More from the workbench<span>.</span></h2></div>
        <span className="project-total">{projects.length} projects & counting</span>
      </div>
      <div className="project-toolbar">
        <p>Web apps, experiments, and a few useful little tools.</p>
        <label className="project-search"><span aria-hidden="true">⌕</span><span className="sr-only">Find a project by name or technology</span><input type="search" placeholder="Find a project or technology…" value={search} onChange={event => setSearch(event.target.value)} /></label>
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
      <div className="flex flex-wrap mx-[-15px]">
        {visibleProjects.map(project => <ProjectItem key={project.title} project={project} />)}
      </div>
      {visibleProjects.length === 0 && <div className="project-empty"><p>No projects match “{search}”.</p><button onClick={() => setSearch('')}>Show all projects <Icon /></button></div>}
    </section>
  );
}
