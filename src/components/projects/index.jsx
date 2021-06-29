import React from 'react';
import ProjectItem from './project-item';

const PROJECTS = [
  {
    category: 'Tour and Travel',
    title: 'Himalayan Hike',
    body: 'Himalayan hike is a Nepal based tour and travel agency.',
    techStack:
      'JavaScript, React/Redux, GraphQL, MySQL,Sequelize.js, Node/Express.js, SASS',
    source: 'https://himalayanhike.com/',
  },
  {
    category: 'Start Ups - Platform',
    title: 'Maidan',
    body: 'Online fashion store. Provided with very well engineered, sophisticated interface for both customer and sellers, Maidan seeks to provide a easy online shopping experience for customers nation wide.',
    techStack:
      'JavaScript, React/Redux, MySQL, Sequelize.js, Node/Express.js, SASS, Elasticsearch',
    source: 'https://bit.ly/3a7zePd',
  },
  {
    category: 'Blogging',
    title: 'Blogging site',
    body: 'Personal / professional blogging site.',
    techStack: 'Tech stack - Ghost CMS',
    source: 'https://marinatamang.com/',
  },
  {
    category: 'Job Portal',
    title: 'HRHUB',
    body: 'A Human resource company which offers effective recruiting solutions through different platforms.',
    techStack: 'Java, Spring Boot, MySQL, Hibernate',
    source: 'https://www.hrhub.com.np/',
  },
  {
    category: 'Tour and Travel',
    title: 'Lalman trek and expedition',
    body: 'Lalman trek and expedition is a Nepal based Trekking and Tour operator.',
    techStack:
      'Backend credit to Suman Kr. Heuju. Tech stack - Java, Spring Boot, MySQL, Hibernate',
    source: 'https://lalman.com/',
  },
  {
    category: 'Start Ups - Food Network',
    title: 'Nutriseason',
    body: 'Another pet project of mine for fun. Nutriseaon is an online food delivery network for chain restaurants.',
    techStack:
      'Tech stack - React, Redux, Node.js, Express.js, Sequelize, MySQL',
    source: 'http://food.vortexnepal.com/',
  },
  {
    category: 'Start Ups - Platform',
    title: 'Threadly',
    body: 'Started as a pet project of mine, Threadly really started to come to life after I indulged myself more with the power of social media. Its core idea is to enable users to find and connect with people within close proximity sharing similar stories and visions.',
    techStack:
      'React, Redux, Node.js, Express.js, Elasticsearch, Sequelize, PostgreSQL',
    source: 'https://bit.ly/2zAtaBo',
  },
  {
    category: 'AI',
    title: 'Simple face recognition web app',
    body: 'Although I have barely used python in my entire career, I fell in love with its simplicity and robustness instantly. I did this project as a fun side project to familiarize myself with how AI works',
    techStack: 'Python 2, Django, OpenCV',
    source: 'https://www.youtube.com/watch?v=p70srlZvyvQ&t=5s',
  },
  {
    category: 'LIVE CHAT',
    title: 'Chat Application',
    body: 'A simple real-time chat application which enables users from all around the world to chat together.',
    techStack: 'Node.js, React.js, Express.js, Socket.IO',
    source: 'http://bit.ly/2WarPqi',
  },
];

export default function Projects() {
  return (
    <section className="projects container-l">
      <h5 className="hint-text text-center">PERSONAL PROJECTS 👨🏽‍💻</h5>
      <div className="projects-wrapper row">
        {PROJECTS.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
