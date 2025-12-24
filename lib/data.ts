// Types
export interface NavItem {
  name: string;
  path: string;
}

export interface Social {
  platform: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar?: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  resume_url: string;
  socials: Social[];
}

export interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface SkillMetric {
  name: string;
  percent: number;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FunFact {
  label: string;
  value: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  result: string;
  note?: string;
}

export interface Certification {
  title: string;
  institution: string;
  year: string;
}

export const DATA = {
  profile: {
    name: "Apple Mahmood",
    title: "Senior Frontend Engineer & Architect",
    tagline: "Building the Future of Web with AI & Modern Tech",
    bio: "I am a Senior Frontend Engineer & Architect with 10+ years of experience. Currently leading a talented team at RL Technologies, I specialize in building high-performance SPAs with React, Next.js, and scaling frontend architecture. My focus is on leveraging AI and modern tools to deliver exceptional, reliable web solutions.",
  },
  contact: {
    email: "appl4e@gmail.com",
    phone: "+8801678116782",
    address: "House#11/1, Road#8, Nobodoy Housing Society, Mohammadpur, Dhaka",
    resume_url: "https://www.applemahmood.com/Apple-Mahmood-Resume.pdf",
    socials: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/apple-mahmood-95480332/",
      },
      { platform: "GitHub", url: "https://github.com/appl4e" },
      {
        platform: "Stack Overflow",
        url: "https://wordpress.stackexchange.com/users/87564/apple",
      },
      { platform: "WordPress", url: "https://profiles.wordpress.org/appl4e" },
      { platform: "Twitter", url: "https://twitter.com/thecoderweb" },
    ],
  },
  top_skills: [
    "React",
    "Angular",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "WordPress",
    "Laravel",
    "AI Integration",
    "Tailwind CSS",
  ],
  soft_skills: [
    "Team Player",
    "Organized",
    "Fast Learner",
    "Motivated",
    "Time-savvy",
  ],
  services: [
    {
      title: "Frontend Development",
      icon: "Code",
      description:
        "Building immersive, high-performance web applications using modern frameworks like React, Angular, and Vue.js. I specialize in integrating robust RESTful and GraphQL APIs to craft seamless user experiences, responsive interfaces, and scalable component architectures.",
    },
    {
      title: "WordPress Development",
      icon: "Layout",
      description:
        "Extending beyond flexible blogs to robust CMS solutions. I build custom themes, plugins, and dynamic sites using Elementor and modern page builders, ensuring your site is secure, fast, and easy to manage.",
    },
    {
      title: "PHP & Backend Solutions",
      icon: "Server",
      description:
        "Developing secure, interactive backends using modern PHP and Laravel. I create efficient RESTful & GraphQL APIs to power your frontend, ensuring seamless data flow and logical business operations with minimal maintenance.",
    },
    {
      title: "E-commerce Development",
      icon: "ShoppingCart",
      description:
        "Creating dynamic online stores that convert. From WooCommerce heavy-lifting to custom e-commerce experiences, I ensure secure transactions, smooth inventory management, and a 'wow' factor for your customers.",
    },
    {
      title: "AI-Augmented Development",
      icon: "Bot",
      description:
        "Leveraging the power of AI (LLMs, Agents) to accelerate development workflows, code generation, and intelligent feature integration, ensuring you get cutting-edge solutions faster.",
    },
  ],
  testimonials: [
    {
      name: "Debora Jeldika",
      role: "Client",
      text: "I've used him over and over again. He has resolved my issues. He is very good.",
    },
    {
      name: "Mister Energy",
      role: "Fund Manager",
      text: "Skilled, professional, easy to communicate with and had a great understanding of what was desired. Excellent work!",
    },
    {
      name: "L.D",
      role: "Professional Singer",
      text: "Great service and good work. Coderweb has fixed some unusual errors that we have not been able to figure out. If I ever have any more issues he will be the first I come to for help. Thank you!",
    },
  ],
  experience: [
    {
      role: "Frontend Engineer",
      company: "RL Technologies LTD.",
      year: "2022 - Present",
      description:
        "Leading frontend development for flagship projects (DocMedilink, Align Wellness) with React and Angular. Optimized architecture for a 25% improvement in efficiency and achieved 95% API alignment with business requirements. Mentored 3 junior developers, boosting team productivity by 20%, and maintained a 90% on-time sprint delivery rate. (URLs: https://bit.ly/alignwell, https://bit.ly/docmedilink)",
    },
    {
      role: "Senior Web Developer",
      company: "RL Technologies LTD.",
      year: "2015 - 2022",
      description:
        "Managed development for Quartolab & Living Fit Nation, ensuring pixel-perfect responsive apps that improved UX consistency by 25%. For TotemBI and RideCentric, achieved a 30% performance boost through optimization. Specialized in converting wireframes to clean, scalable code. (URL: https://bit.ly/quartolab)",
    },
    {
      role: "Instructor, Advanced WordPress Developer",
      company: "SoftTech-IT Institute",
      year: "2014 - 2015",
      description:
        "Taught foundational web development (HTML, CSS, PHP, WordPress). Guided students through the full lifecycle: from PSD-to-HTML conversion and W3C validation to live server deployment and bug fixing.",
    },
    {
      role: "Jr. IP Engineer, NOC",
      company: "1Asia Alliance Communication LTD.",
      year: "2013 - 2014",
      description:
        "Troubleshot IP and Transmission related problems using NMS, OTDR. Monitored Nationwide Network and coordinated with upstream IPLC Links.",
    },
    {
      role: "Trainee Engineer, O&M (Electrical)",
      company: "Wärtsilä Bangladesh Ltd",
      year: "2012 - 2013",
      description:
        "Operated & maintained power plant production. Operated plant within acceptable loading limits & under plant dispatch directives.",
    },
  ],
  fun_facts: [
    { label: "SHOTS CAPTURED", value: "24000", icon: "Camera" },
    { label: "PROJECTS COMPLETED", value: "150", icon: "CheckCircle" },
    { label: "SATISFIED CUSTOMERS", value: "199", icon: "Users" },
    { label: "CYCLED", value: "15600 KM", icon: "Bike" },
  ],
  tech_stack: {
    languages: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "HTML5",
      "CSS3",
      "SCSS",
      "SQL",
    ],
    frameworks: [
      "Next.js",
      "React",
      "Angular",
      "Vue.js",
      "Laravel",
      "jQuery",
      "Astro",
    ],
    cms_specialties: [
      "WordPress",
      "WordPress Theme Development",
      "WordPress Plugin Development",
      "WooCommerce",
    ],
    ui_libraries: [
      "Tailwind CSS",
      "ReUI",
      "Shadcn/UI",
      "Mantine UI",
      "Ant Design",
      "Bootstrap 5",
      "React Bootstrap",
      "Ng Bootstrap",
      "Base UI",
    ],
    state_management_forms: [
      "TanStack Query",
      "React Hook Form",
      "Yup",
      "Zod",
      "Jotai",
      "React Router DOM",
    ],
    visuals_charts: [
      "Framer Motion",
      "AOS",
      "Apex Charts",
      "Swiper",
      "Owl Carousel",
      "Revolution Slider",
    ],
    backend_data: ["Prisma", "MySQL", "REST API", "GraphQL", "Firebase"],
    tools: ["Git", "Vite", "Agora SDK", "NPM/Yarn"],
  },
  projects: [
    {
      title: "Dosevana",
      description:
        "Dosevana simplifies wellness for gyms, med spas, and studios by offering a secure, doctor-supervised platform for treatments. It includes client and product management, customizable quizzes, intake forms, payment processing, and e-commerce capabilities, all built with React, TypeScript, and Mantine.",
      tags: ["React", "TypeScript", "Mantine", "RestApi"],
      image: "/portfolio-imgs/Dosevana.jpg",
      link: "https://app.dosevana.com",
    },
    {
      title: "DocMedilink",
      description:
        "Healthcare collaboration platform connecting doctors and patients. Features video calling, SMS gateway chat, and doctor scheduling. Built with React, TypeScript, and Mantine.",
      tags: ["React", "TypeScript", "Mantine", "RestApi"],
      image: "/portfolio-imgs/doc-dashboard.jpg",
      link: "https://app.docmedilink.com",
    },
    {
      title: "Redlime Solutions",
      description:
        "Corporate website for a software development company. Built with a focus on clean professional design.",
      tags: ["HTML", "SCSS", "Bootstrap 5"],
      image: "/portfolio-imgs/rltechbd.jpg",
      link: "https://rltech.applemahmood.com",
    },
    {
      title: "Align Wellness",
      description:
        "Corporate healthcare event management platform functioning as a portal for Companies, Employees, Vendors, and Brokers. Features complex event organization tools.",
      tags: ["Angular", "Ng Bootstrap", "GraphQL", "Socket.io"],
      image: "/portfolio-imgs/align-admin-Dashboard.jpg",
    },
    {
      title: "Quartolab",
      description:
        "Knowledge crowdsourcing and employee engagement platform. Features include file management, task management, forums, and analytics.",
      tags: ["Frontend", "Web Application", "Collaboration"],
      image: "/portfolio-imgs/quarto-explore-cat.jpg",
      link: "https://admin.quartolab.com",
    },
    {
      title: "Living Fit Corporate Wellness",
      description:
        "COVID-19 testing management system for US School Districts. Handled frontend development for testing and reporting interfaces.",
      tags: ["Angular", "Frontend", "Healthcare"],
      image: "/portfolio-imgs/lfn-cov-login.jpg",
    },
    {
      title: "Adolphus Tower",
      description:
        "Showcase website for a downtown Dallas building. Features an interactive SVG building model and Google Maps integration for POIs.",
      tags: ["Frontend", "SVG", "Interactive", "Google Maps"],
      image: "/portfolio-imgs/Adolphus-home.jpg",
      link: "https://adolphustower.com",
    },
    {
      title: "Vineyard at Florence",
      description:
        "Website template for a luxury vineyard resort. Implemented with SCSS and Bootstrap 5.",
      tags: ["HTML", "SCSS", "Bootstrap 5", "jQuery"],
      image: "/portfolio-imgs/vineyard-at-florence.jpg",
      link: "https://www.thevineyardatflorence.com",
    },

    {
      title: "Priyopustok",
      description: "Online bookshop with unique e-commerce functionalities.",
      tags: ["WordPress", "WooCommerce", "Woodmart"],
      image: "/portfolio-imgs/priyopustok.jpg",
    },
    {
      title: "Desha",
      description: "Online store dedicated to women entrepreneurs.",
      tags: ["WordPress", "WooCommerce", "Woodmart"],
      image: "/portfolio-imgs/desha.jpg",
    },
    {
      title: "Nobodesh",
      description:
        "Online news portal built with high-performance theme customization.",
      tags: ["WordPress", "Avada"],
      image: "/portfolio-imgs/nobodesh.jpg",
      link: "https://nobodesh.com/",
    },
  ],
  education: [
    {
      degree: "BSC in Electrical and Electronic Engineering",
      institution: "United International University, Dhaka",
      year: "2011",
      result: "CGPA 3.57",
      note: "Major in Communication. Thesis on Performance Enhancement of Solar PV system.",
    },
    {
      degree: "H.S.C",
      institution: "Dhaka City College",
      year: "2006",
      result: "GPA 4.50",
    },
    {
      degree: "S.S.C",
      institution: "Dhanmondi Govt Boys' High School",
      year: "2004",
      result: "GPA 4.69",
    },
  ],
  certifications: [
    {
      title: "PHP, MySQL and Laravel",
      institution: "SoftTech-IT Institute",
      year: "2016",
    },
    {
      title: "WordPress Theme Development",
      institution: "SoftTech-IT Institute",
      year: "2016",
    },
    {
      title: "CCNA",
      institution: "United International University, Dhaka",
      year: "2012",
    },
  ],
};
