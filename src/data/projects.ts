export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'company' | 'personal';
  company?: string;
  features: string[];
  challenges: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'gsscameroun',
    title: 'gssCameroun.com',
    description: 'Large-scale voting platform with real-time rankings and mobile payment integration (MTN Mobile Money and Orange Money).',
    longDescription: 'A comprehensive voting platform that handled high traffic and real-time vote processing. Built the complete frontend interface including voting flow, live ranking pages, and integrated mobile payment systems. Faced and resolved critical performance issues during peak usage.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MTN Mobile Money', 'Orange Money'],
    category: 'company',
    company: 'Bandesoft Ltd',
    features: [
      'Real-time voting system',
      'Live ranking pages',
      'Mobile payment integration (MTN & Orange Money)',
      'Vote confirmation and loading popups',
      'High-traffic handling',
      'Payment webhook processing'
    ],
    challenges: [
      'High traffic causing payment webhook failures',
      'Paid votes not being recorded in real-time',
      'System stabilization under extreme pressure',
      'Webhook handling redesign',
      'Vote consistency during peak usage'
    ],
    image: '/projects/gss.png',
    liveUrl: 'https://gsscameroun.com',
    featured: true,
    year: '2023'
  },
  {
    id: 'gloswitch',
    title: 'GloSwitch',
    description: 'Mobile application with blockchain integration and smart contract development. Led needs analysis and designed the complete mobile experience.',
    longDescription: 'As the main mobile developer, I led the entire mobile development process from needs analysis to deployment. Designed the apps in Figma, built them with Flutter, and integrated various APIs including blockchain functionality.',
    technologies: ['Flutter', 'Figma', 'Solidity', 'Blockchain APIs', 'GetX'],
    category: 'company',
    company: 'Bandesoft Ltd',
    features: [
      'Cross-platform mobile app (Android & iOS)',
      'Blockchain API integration',
      'Smart contract interaction',
      'Stablecoin token implementation',
      'Custom UI/UX design in Figma',
      'Authentication system'
    ],
    challenges: [
      'Complex blockchain integration',
      'Smart contract development and testing',
      'Cross-platform compatibility',
      'Recruiting and testing blockchain developers',
      'API integration complexity'
    ],
    image: '/projects/gloswitch.png',
    liveUrl: 'https://apps.apple.com/cy/app/gloswitchapp/id6745695288',
    featured: true,
    year: '2023'
  },
  {
    id: 'food-delivery-system',
    title: 'Food Delivery System',
    description: 'Full-stack food delivery platform with React.js web app and Flutter mobile application. Enhanced architecture and resolved critical issues.',
    longDescription: 'Worked on both web and mobile components of a food delivery system. Enhanced the React.js web app architecture, debugged and improved the Flutter app, and participated in CI/CD pipeline setup.',
    technologies: ['React.js', 'Flutter', 'Riverpod', 'PHP', 'CI/CD'],
    category: 'company',
    company: 'Bandesoft Ltd',
    features: [
      'React.js web application',
      'Flutter mobile app',
      'Order management system',
      'Real-time tracking',
      'Payment integration',
      'CI/CD pipeline'
    ],
    challenges: [
      'Learning Riverpod state management',
      'Debugging existing Flutter codebase',
      'PHP backend request handling optimization',
      'CI/CD pipeline setup',
      'Cross-platform consistency'
    ],
    image: '/projects/app_logo.png',
    liveUrl: 'https://fd-squad.com/',
    featured: false,
    year: '2022'
  },
  {
    id: 'dlane-carparts',
    title: 'D-Lane Car Parts',
    description: 'Web + mobile application built with React/Flutter for ordering vehicle tires and accessories in Cameroon. E-commerce platform for automotive parts.',
    longDescription: 'Developed a comprehensive e-commerce web application for D-Lane, enabling customers to browse and order vehicle tires and automotive accessories. Built with modern web technologies combining React and Vue for optimal user experience.',
    technologies: ['React', 'Vue.js', 'JavaScript', 'E-commerce', 'Flutter',],
    category: 'company',
    company: 'Bandesoft Ltd',
    features: [
      'Product catalog for tires and accessories',
      'Online ordering system',
      'Vehicle compatibility matching',
      'Responsive design for mobile and desktop',
      'Product search and filtering',
      'Customer account management'
    ],
    challenges: [
      'Integrating React and Vue components',
      'Product catalog management',
      'Vehicle compatibility logic',
      'Payment integration for Cameroon market',
      'Mobile optimization for local users'
    ],
    image: '/projects/logo-dlane.jpg',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.bandesoft.dlane',
    featured: false,
    year: '2022'
  },
  {
    id: 'uniebtp',
    title: 'Unie BTP',
    description: 'Web application built with Next.js and Firebase for a Côte d\'Ivoire building association. Professional platform for construction industry networking.',
    longDescription: 'Unie BTP is a comprehensive web platform developed for a building association in Côte d\'Ivoire. The application facilitates networking among construction professionals, project management, and industry collaboration with real-time features and modern web technologies.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    category: 'personal',
    features: [
      'Professional networking platform',
      'Project showcase and management',
      'Member directory and profiles',
      'Real-time messaging and notifications',
      'Event management system',
      'Responsive design for mobile and desktop',
      'Firebase authentication and database'
    ],
    challenges: [
      'Multi-language support for local market',
      'Real-time data synchronization',
      'Professional networking features',
      'Mobile optimization for African market',
      'Firebase integration and optimization'
    ],
    image: '/projects/unie-btp.png',
    liveUrl: 'https://unie-btp.vercel.app/',
    githubUrl: 'https://github.com/jeremie-kounoudji/unie-btp',
    featured: true,
    year: '2024'
  },
  {
    id: 'microfinance-app',
    title: 'Microfinance Management System',
    description: 'Complete microfinance solution with Flutter mobile app for agents/clients and Next.js admin dashboard. Features loan management and financial reporting.',
    longDescription: 'A comprehensive microfinance management system consisting of a Flutter mobile application for agents and clients, and a Next.js admin dashboard. Includes secure authentication, real-time database operations, and role-based access control.',
    technologies: ['Flutter', 'Next.js', 'Supabase', 'GetX', 'TypeScript'],
    category: 'personal',
    features: [
      'Flutter mobile app for agents & clients',
      'Next.js admin dashboard',
      'Loan request management',
      'Money collection tracking',
      'Transaction history',
      'Account management',
      'Financial reporting',
      'Role-based access control'
    ],
    challenges: [
      'Complex user role management',
      'Real-time data synchronization',
      'Financial calculations accuracy',
      'Security implementation',
      'Cross-platform data consistency'
    ],
    image: '',
    featured: true,
    year: '2024'
  },
  {
    id: 'owakanda-restaurant',
    title: "O'wakanda Restaurant Website",
    description: 'Restaurant website built with Next.js and deployed on Firebase Hosting. Features product display and WhatsApp order integration.',
    longDescription: 'A modern restaurant website showcasing products and enabling customers to place orders directly through WhatsApp integration. Built with Next.js for optimal performance and deployed on Firebase Hosting.',
    technologies: ['Next.js', 'Firebase Hosting', 'WhatsApp API', 'React'],
    category: 'personal',
    features: [
      'Product catalog display',
      'WhatsApp order integration',
      'Responsive design',
      'Fast loading performance',
      'Mobile-optimized interface',
      'Firebase hosting deployment'
    ],
    challenges: [
      'WhatsApp API integration',
      'Mobile optimization',
      'Performance optimization',
      'Firebase deployment configuration'
    ],
    image: '',
    liveUrl: 'https://wakanda-4e7fc.web.app/',
    featured: false,
    year: '2023'
  },
  {
    id: 'asurex-website',
    title: 'Asurex Insurance Broker Website',
    description: 'Professional website for Asurex insurance broker built with HTML and CSS. Clean, responsive design showcasing insurance services.',
    longDescription: 'A professional website for Asurex insurance broker, built with clean HTML and CSS. Features a responsive design that effectively showcases insurance services and company information.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'personal',
    features: [
      'Professional design',
      'Service showcase',
      'Responsive layout',
      'Contact forms',
      'Company information display',
      'Clean code structure'
    ],
    challenges: [
      'Cross-browser compatibility',
      'Responsive design implementation',
      'Performance optimization',
      'SEO optimization'
    ],
    image: '/projects/asurex.jpg',
    liveUrl: 'https://asurex.org',
    featured: false,
    year: '2022'
  },
  {
    id: 'nomadlux',
    title: 'NomadLux',
    description: 'Full-featured vacation rental platform built with React, Vite.js, Zustand for state management, Tailwind CSS, and Supabase backend.',
    longDescription: 'NomadLux is a comprehensive vacation rental platform offering luxury accommodations. Features property listings, booking system, user authentication, and real-time data management. Built with modern technologies for optimal performance and user experience.',
    technologies: ['React', 'Vite.js', 'Zustand', 'Tailwind CSS', 'Supabase'],
    category: 'personal',
    features: [
      'Property listing system',
      'User authentication',
      'Booking management',
      'Search and filtering',
      'Real-time updates',
      'Responsive design',
      'State management with Zustand'
    ],
    challenges: [
      'Complex booking logic',
      'Real-time data synchronization',
      'State management optimization',
      'Search functionality implementation',
      'Payment integration planning'
    ],
    image: '/projects/nomad-lux.jpg',
    liveUrl: 'https://www.linkedin.com/posts/jeremie-kounoudji_aehomadlux-nomadlux-nomadlux-activity-7339093089879314432-WnTq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKiOcAB07F8rTtlaQV66RuG5Y_Jr1noG4E',
    githubUrl: 'https://github.com/jeremie-kounoudji/nomadlux',
    featured: true,
    year: '2024'
  }
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: 'company' | 'personal'): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getCompanyProjects = (): Project[] => {
  return projects.filter(project => project.company === 'Bandesoft Ltd');
};

export const getPersonalProjects = (): Project[] => {
  return projects.filter(project => project.category === 'personal');
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};