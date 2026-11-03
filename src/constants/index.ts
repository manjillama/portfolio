export const siteConfig = {
  name: 'Manjil Tamang',
  intro:
    'I’m a software engineer who enjoys working on open-source projects and building apps I use myself. On regular days, I’m usually working on backend systems, keeping them fast and reliable as they scale.',
  position: 'Software Engineer',
  email: 'hello@manjiltamang.com'
};

export const navLinks: { title: string; caption: string; url: string }[] = [
  { title: 'Home', caption: 'Welcome', url: '/' },
  // { title: 'Experience', caption: 'Work', url: '#experience' },
  { title: 'Blog', caption: 'Tech', url: '/blogs' },
  { title: 'Projects', caption: 'Open source', url: '#projects' },
  { title: 'Contact', caption: 'Connect', url: '#contact' }
];

export const socials: { name: string; faIconClass: string; url: string }[] = [
  {
    name: 'GitHub',
    faIconClass: 'fab fa-github',
    url: 'https://github.com/manjillama'
  },
  {
    name: 'CodePen',
    faIconClass: 'fab fa-codepen',
    url: 'https://codepen.io/manjiltamang'
  },
  {
    name: 'Email',
    faIconClass: 'fas fa-envelope',
    url: `mailto:${siteConfig.email}`
  }
];

export const experience = [];

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
  githubLink?: string;
  year: number;
};

export const projects: Project[] = [
  {
    title: 'Commentsy',
    description:
      'Commentsy is an open source, embeddable comment system for websites and blogs. Add threaded discussions in minutes, customize the theme, and manage comments from one dashboard.',
    techStack: ['Next.js 13', 'NextAuth 4', 'TailwindCSS', 'TypeScript', 'MongoDB'],
    url: 'https://commentsy.com',
    githubLink: 'https://github.com/manjillama/commentsy',
    year: 2023
  },
  {
    title: 'Centsibly',
    description:
      'Track income and expenses, understand your monthly spending, and create separate budgets for trips and projects in the currency you need.',
    techStack: ['Next.js 13', 'NextAuth 4', 'TailwindCSS', 'TypeScript', 'MongoDB'],
    url: 'https://centsibly.vercel.app',
    githubLink: 'https://github.com/manjillama/centsibly',
    year: 2024
  },
  {
    title: 'Spotify widgets',
    description:
      'A personal Spotify dashboard with embeddable widgets for now playing, recently played tracks, top tracks, and top artists. Features light and dark themes, simple OAuth setup, and JSON APIs for custom integrations.',
    techStack: ['Spotify API', 'Next.js', 'React Hydration'],
    url: 'https://spotify-tiles.vercel.app',
    githubLink: 'https://github.com/manjillama/spotify-widgets',
    year: 2023
  },
  // {
  //   title: 'Ease Nepal',
  //   description:
  //     'An open-source platform dedicated to making the daily life of Nepalese people a bit easier, starting with mapping locations of all the public restrooms.',
  //   techStack: ['React', 'Redux', 'TypeScript', 'SASS', 'Node.js', 'Mongoose'],
  //   url: '',
  //   githubLink: 'https://github.com/manjillama/npl-public',
  //   year: 2023
  // },
  // {
  //   title: 'CTRL Ease',
  //   description:
  //     'CtrlEase provides an intelligent software platform that simplifies and automates hardware control, saving time and effort for researchers and engineers.',
  //   techStack: ['OpenAI API', 'GatsbyJS', 'React', 'Tailwind', 'GraphQL'],
  //   url: 'https://ctrlease-api.netlify.app/',
  //   githubLink: 'https://github.com/manjillama/ctrlease',
  //   year: 2023
  // },
  {
    title: 'manjiltamang.com (v3)',
    description: "My portfolio site built with Gatsby. Yes! The one you're looking at right now.",
    techStack: ['GatsbyJS', 'Tailwind', 'Styled-Components', 'GraphQL'],
    url: 'https://manjiltamang.com',
    githubLink: 'https://github.com/manjillama/portfolio',
    year: 2023
  },
  // {
  //   title: 'Automotive Benchmarking App',
  //   description: 'An automotive benchmarking web application, useful to small scale vendors in automotive businesses.',
  //   techStack: ['Strapi', 'SvelteKit', 'MySQL'],
  //   url: '',
  //   githubLink: 'https://github.com/manjillama/automotive-benchmarking',
  //   year: 2023
  // },
  // {
  //   title: 'E-Store',
  //   description: 'Clothing, accessories and merchandising e-store built with Strapi and Next.js',
  //   techStack: ['Strapi', 'Next.js', 'MySQL'],
  //   url: 'https://www.store.yatrimotorcycles.com',
  //   githubLink: 'https://github.com/manjillama/store',
  //   year: 2022
  // },
  // {
  //   title: 'Food Loops',
  //   description:
  //     'An easy open-source Backend-as-a-Service (BaaS) that provides developers API needed for small restaurant/food businesses to go online.',
  //   techStack: ['React', 'Redux', 'Node.js', 'Mongoose', 'REST API'],
  //   url: '',
  //   githubLink: 'https://github.com/manjillama/food-loops',
  //   year: 2021
  // },
  {
    title: 'Mongoose Utils',
    description: 'Easy lightweight utility library to make data querying in mongoose a lot easier.',
    techStack: ['TypeScript', 'Node.js', 'MongoDB', 'Mongoose'],
    url: '',
    githubLink: 'https://github.com/manjillama/mongoose-util',
    year: 2021
  },
  {
    title: 'Himalayan Hike',
    description: 'Himalayan hike is a Nepal based tour and travel agency operating in Nepal, India and Bhutan.',
    techStack: ['Stripe', 'React SSR', 'Node.js', 'GraphQL', 'Sequelize'],
    url: 'https://himalayanhike.com/',
    githubLink: '',
    year: 2020
  },
  {
    title: 'Blogging Site',
    description: 'Personal or professional blogging website.',
    techStack: ['Ghost CMS'],
    url: 'https://blog.himalayanhike.com/',
    githubLink: 'https://github.com/himalayan-hike/himalayan-hike-blogger',
    year: 2020
  },
  {
    title: 'Threadly',
    description: 'A simple medium.com like online social story sharing platform. Like instagram but for stories!',
    techStack: ['React', 'Node.js', 'Express.js', 'Elasticsearch', 'Sequelize'],
    url: '',
    githubLink: 'https://github.com/manjillama/medium-clone',
    year: 2020
  },
  {
    title: 'React Modal',
    description: 'Lightweight, easy to use, and highly customizable react modal library.',
    techStack: ['React'],
    url: '',
    githubLink: 'https://github.com/manjillama/plain-react-modal',
    year: 2020
  },
  {
    title: 'Audio Book Mobile App',
    description: 'A simple mobile audio book app to listen to your favorite audio book.',
    techStack: ['React Native', 'Redux', 'Expo', 'NativeBase'],
    url: 'https://youtu.be/eALArnbyPIQ',
    githubLink: 'https://github.com/manjillama/audio-book-app',
    year: 2020
  },
  // {
  //   title: 'HR Hub',
  //   description: 'A Human resource company which offers effective recruiting solutions through different platforms.',
  //   techStack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Bootstrap'],
  //   url: 'https://www.hrhub.com.np/',
  //   githubLink: '',
  //   year: 2019
  // },
  {
    title: 'Retail CRM',
    description:
      'Online sales, customers and orders manager as well as creating receipt for small business specially retail stores.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Bootstrap'],
    url: '',
    githubLink: 'https://github.com/manjillama/clothing-manager',
    year: 2019
  },
  // {
  //   title: 'Lalman trek and expedition',
  //   description: 'Lalman trek and expedition is a Nepal based Trekking and Tour operator.',
  //   techStack: 'Backend credit to Suman Kr. Heuju. Tech stack - Java, Spring Boot, MySQL, Hibernate',
  //   source: 'https://lalman.com/'
  // },
  // {
  //   category: "Start Ups - Food Network",
  //   title: "Nutriseason",
  //   description: "Another pet project of mine for fun. Nutriseaon is an online food delivery network for chain restaurants.",
  //   techStack:
  //     "Tech stack - React, Redux, Node.js, Express.js, Sequelize, MySQL",
  //   source: "http://food.vortexnepal.com/",
  // },
  {
    title: 'Face Recognition App',
    description:
      'A web app for face detection and facial recognition to retrieve recognized persons information from the system. I did this as a college project to familiarize myself on with machine learning.',
    techStack: ['Machine Learning', 'Python 2', 'Django', 'OpenCV'],
    url: 'https://www.youtube.com/watch?v=p70srlZvyvQ',
    githubLink: 'https://github.com/manjillama/facial-recognition-python-django',
    year: 2017
  }
  // {
  //   title: 'Chat Application',
  //   description: 'A simple real-time chat application which enables users from all around the world to chat together.',
  //   techStack: ['Node.js', 'React', 'Socket.IO'],
  //   url: '',
  //   githubLink: 'https://github.com/manjillama/react-chat-app',
  //   year: 2018
  // }
];
