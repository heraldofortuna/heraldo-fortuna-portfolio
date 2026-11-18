import type { Locale } from './types';

export type TranslationKeys = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    work: string;
    contact: string;
    home: string;
  };
  hero: {
    greeting: string;
    roleLine1: string;
    roleLine2: string;
    location: string;
    resume: string;
    profileAlt: string;
    arrowAlt: string;
  };
  about: {
    title: string;
    summary: string;
    jobs: Array<{
      company: string;
      period: string;
      paragraphs: string[];
    }>;
  };
  work: {
    title: string;
    intro: string;
    repo: string;
    demo: string;
    seeMore: string;
    noDescription: string;
  };
  contact: {
    title: string;
    intro: string;
    imageAlt: string;
  };
  social: {
    linkedinAlt: string;
    githubAlt: string;
  };
  menu: {
    homeAlt: string;
    aboutAlt: string;
    workAlt: string;
    contactAlt: string;
  };
  mobileMenu: {
    openAlt: string;
    closeAlt: string;
  };
  languageSwitch: {
    label: string;
    english: string;
    spanish: string;
  };
};

const en: TranslationKeys = {
  meta: {
    title: 'Heraldo Fortuna - Frontend Developer',
    description:
      'Professional portfolio of Heraldo Fortuna, frontend developer specialized in React, TypeScript, and modern web technologies. Explore my projects, work experience, and frontend skills.',
  },
  nav: {
    about: 'About',
    work: 'Work',
    contact: 'Contact',
    home: 'Home',
  },
  hero: {
    greeting: "Hello, I'm Heraldo,",
    roleLine1: 'Frontend',
    roleLine2: 'Developer',
    location: 'based in Lima, Peru.',
    resume: 'Resume',
    profileAlt: 'My profile picture.',
    arrowAlt: 'Bottom arrow to move to the about section.',
  },
  about: {
    title: 'about.',
    summary:
      'Senior Frontend Developer with 5+ years of experience specializing in modern architectures (Vue3, React, React Native, TypeScript) and VTEX ecosystems. Led the development of scalable PWAs at Culqi (Vite, Astro, Nanostores) and implemented CMS-Headless integrations (Contentful + VTEX IO) for Beautycounter USA. Expert in performance optimization, state patterns (Redux, GraphQL), and full-stack development (Kotlin, Node.js). PCEP certified and focused on robust solutions with TypeScript and Clean Code.',
    jobs: [
      {
        company: 'Culqi',
        period: 'jan 2024 - jun 2025',
        paragraphs: [
          "I led the PWA application team where we developed 'My Sales', 'Payroll Account', 'Support' and 'Counters' from scratch.",
          'I worked with technologies such as Vue3, React Native, Vite, Astro, PWA config, Axios, TypeScript and Nanostores.',
        ],
      },
      {
        company: 'Valtech',
        period: 'set 2022 - set 2023',
        paragraphs: [
          'I worked on the integration of Contentful software with VTEX on the Beautycounter USA project.',
          'Additionally, I participated in two more projects for the company: Arredo and MasOnline, using technologies such as React, React Native, Node.js, jQuery, GraphQL, HTML, CSS, and AWS.',
        ],
      },
      {
        company: 'Sugo°',
        period: 'feb 2022 - jul 2022',
        paragraphs: [
          'I managed the VTEX supplier manager functionalities in CMS, catalog, and master data, increasing efficiency by 50%.',
          'Led the maintenance team, using technologies such as React, Node.js, GraphQL, and AWS.',
        ],
      },
      {
        company: 'Wird',
        period: 'may 2021 - oct 2021',
        paragraphs: [
          'I was part of the product team, creating new applications and improving existing ones.',
          'I worked using React, TypeScript, Redux and Kotlin to develop robust applications.',
        ],
      },
    ],
  },
  work: {
    title: 'work.',
    intro:
      "Here are some of the projects I've worked on. Each one showcases my skills in frontend development, from creating responsive layouts to implementing complex features. You can find detailed descriptions and links to the code repositories. I'm proud of these projects and the learning opportunities they provided.",
    repo: 'Repo',
    demo: 'Demo',
    seeMore: 'See more',
    noDescription: 'No description provided',
  },
  contact: {
    title: 'contact.',
    intro:
      "If you'd like to work with me or have any questions, don't hesitate to get in touch. I am available for frontend development projects, collaborations, and consultations. You can send me an email, connect with me on LinkedIn, or follow me on GitHub to see my latest work and contributions.",
    imageAlt: 'Contact section.',
  },
  social: {
    linkedinAlt: 'Heraldo Fortuna LinkedIn profile.',
    githubAlt: 'Heraldo Fortuna GitHub profile.',
  },
  menu: {
    homeAlt: 'Home',
    aboutAlt: 'About section menu option.',
    workAlt: 'Work section menu option.',
    contactAlt: 'Contact section menu option.',
  },
  mobileMenu: {
    openAlt: 'Open mobile menu',
    closeAlt: 'Close mobile menu',
  },
  languageSwitch: {
    label: 'Language',
    english: 'EN',
    spanish: 'ES',
  },
};

const es: TranslationKeys = {
  meta: {
    title: 'Heraldo Fortuna - Desarrollador Frontend',
    description:
      'Portafolio profesional de Heraldo Fortuna, desarrollador frontend especializado en React, TypeScript y tecnologías web modernas. Explora mis proyectos, experiencia laboral y habilidades en desarrollo frontend.',
  },
  nav: {
    about: 'Sobre mí',
    work: 'Proyectos',
    contact: 'Contacto',
    home: 'Inicio',
  },
  hero: {
    greeting: 'Hola, soy Heraldo,',
    roleLine1: 'Desarrollador',
    roleLine2: 'Frontend',
    location: 'con base en Lima, Perú.',
    resume: 'Currículum',
    profileAlt: 'Mi foto de perfil.',
    arrowAlt: 'Flecha hacia abajo para ir a la sección sobre mí.',
  },
  about: {
    title: 'sobre mí.',
    summary:
      'Desarrollador Frontend Senior con más de 5 años de experiencia, especializado en arquitecturas modernas (Vue3, React, React Native, TypeScript) y ecosistemas VTEX. Lideré el desarrollo de PWAs escalables en Culqi (Vite, Astro, Nanostores) e implementé integraciones CMS-Headless (Contentful + VTEX IO) para Beautycounter USA. Experto en optimización de rendimiento, patrones de estado (Redux, GraphQL) y desarrollo full-stack (Kotlin, Node.js). Certificado PCEP y enfocado en soluciones robustas con TypeScript y Clean Code.',
    jobs: [
      {
        company: 'Culqi',
        period: 'ene 2024 - jun 2025',
        paragraphs: [
          "Lideré el equipo de aplicaciones PWA donde desarrollamos desde cero 'Mis Ventas', 'Cuenta de Haberes', 'Soporte' y 'Contadores'.",
          'Trabajé con tecnologías como Vue3, React Native, Vite, Astro, configuración PWA, Axios, TypeScript y Nanostores.',
        ],
      },
      {
        company: 'Valtech',
        period: 'set 2022 - set 2023',
        paragraphs: [
          'Trabajé en la integración del software Contentful con VTEX en el proyecto Beautycounter USA.',
          'Además, participé en dos proyectos más para la empresa: Arredo y MasOnline, usando tecnologías como React, React Native, Node.js, jQuery, GraphQL, HTML, CSS y AWS.',
        ],
      },
      {
        company: 'Sugo°',
        period: 'feb 2022 - jul 2022',
        paragraphs: [
          'Gestioné las funcionalidades del gestor de proveedores VTEX en CMS, catálogo y master data, aumentando la eficiencia en un 50%.',
          'Lideré el equipo de mantenimiento, usando tecnologías como React, Node.js, GraphQL y AWS.',
        ],
      },
      {
        company: 'Wird',
        period: 'may 2021 - oct 2021',
        paragraphs: [
          'Formé parte del equipo de producto, creando nuevas aplicaciones y mejorando las existentes.',
          'Trabajé con React, TypeScript, Redux y Kotlin para desarrollar aplicaciones robustas.',
        ],
      },
    ],
  },
  work: {
    title: 'proyectos.',
    intro:
      'Estos son algunos de los proyectos en los que he trabajado. Cada uno muestra mis habilidades en desarrollo frontend, desde diseños responsivos hasta funcionalidades complejas. Encontrarás descripciones detalladas y enlaces a los repositorios de código. Estoy orgulloso de estos proyectos y de lo que aprendí con ellos.',
    repo: 'Repositorio',
    demo: 'Demo',
    seeMore: 'Ver más',
    noDescription: 'Sin descripción',
  },
  contact: {
    title: 'contacto.',
    intro:
      'Si quieres trabajar conmigo o tienes alguna pregunta, no dudes en escribirme. Estoy disponible para proyectos de desarrollo frontend, colaboraciones y consultorías. Puedes enviarme un correo, conectar en LinkedIn o seguirme en GitHub para ver mi trabajo más reciente.',
    imageAlt: 'Sección de contacto.',
  },
  social: {
    linkedinAlt: 'Perfil de LinkedIn de Heraldo Fortuna.',
    githubAlt: 'Perfil de GitHub de Heraldo Fortuna.',
  },
  menu: {
    homeAlt: 'Inicio',
    aboutAlt: 'Opción de menú de la sección sobre mí.',
    workAlt: 'Opción de menú de la sección proyectos.',
    contactAlt: 'Opción de menú de la sección contacto.',
  },
  mobileMenu: {
    openAlt: 'Abrir menú móvil',
    closeAlt: 'Cerrar menú móvil',
  },
  languageSwitch: {
    label: 'Idioma',
    english: 'EN',
    spanish: 'ES',
  },
};

export const translations: Record<Locale, TranslationKeys> = { en, es };