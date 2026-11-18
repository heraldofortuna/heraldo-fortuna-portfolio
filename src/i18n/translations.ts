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
    resumeHref: string;
    resumeFilename: string;
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
    resumeHref: '/cv-heraldo-fortuna-en.pdf',
    resumeFilename: 'Heraldo_Fortuna_CV_EN.pdf',
    profileAlt: 'My profile picture.',
    arrowAlt: 'Bottom arrow to move to the about section.',
  },
  about: {
    title: 'about.',
    summary:
      'Senior frontend developer with 5+ years of experience in modern architectures (Vue3, React, React Native, TypeScript) and VTEX ecosystems. I led the development of scalable PWAs at Culqi (Vite, Astro, Nanostores) and implemented headless CMS integrations (Contentful + VTEX IO) for Beautycounter USA. Expert in performance optimization (Lazy Loading, SSR, and Code Splitting), state patterns (Redux, Zustand, GraphQL), and full-stack development (Kotlin, Node.js). PCEP certified and focused on robust solutions with TypeScript and Clean Code. Experience designing and implementing SPAs and MicroFrontends, including Module Federation.',
    jobs: [
      {
        company: 'itti — Asunción, Paraguay · Senior Software Engineer',
        period: 'oct 2025 – present',
        paragraphs: [
          'Led code reviews and provided technical mentorship to the engineering team.',
          'Built frontend applications with React and TypeScript, integrating APIs and defining quality and architecture standards.',
          'Collaborated with backend, product, and UX/UI to ship features, using Zustand for state, accessibility (a11y), and performance with Lazy Loading, SSR, and Code Splitting.',
        ],
      },
      {
        company: 'Culqi — Lima, Peru · Senior Frontend Developer',
        period: 'jan 2024 – jun 2025',
        paragraphs: [
          "Led the PWA applications team, where we built 'My Sales', 'Payroll Account', 'Support', and 'Counters' from scratch, with code reviews, technical mentorship, and interface definition alongside UX/UI.",
          'Worked with Vue3, React Native, Vite, Astro, PWA config, Axios, TypeScript, and Nanostores, and NgRx for Angular module state. Optimized performance with Lazy Loading, SSR, and Code Splitting, and applied accessibility (a11y) criteria.',
          'Architected these products as SPAs and MicroFrontends with Module Federation, consuming microservices and APIs.',
        ],
      },
      {
        company: 'Valtech — Buenos Aires, Argentina · SSR Frontend Developer',
        period: 'sep 2022 – sep 2023',
        paragraphs: [
          'Integrated Contentful with VTEX for Beautycounter USA.',
          'Arredo and MasOnline projects: React, React Native, Node.js, jQuery, GraphQL, HTML, CSS, AWS.',
          'Hooks, NgRx, advanced CSS, and TailwindCSS with UX/UI.',
        ],
      },
      {
        company: 'Sugo° — Lima, Peru · Junior Frontend Developer',
        period: 'feb 2022 – jul 2022',
        paragraphs: [
          'VTEX supplier manager in CMS, catalog, and master data (+50% efficiency).',
          'Led maintenance with React, Node.js, GraphQL, AWS; Git/GitHub/Azure DevOps, CI/CD.',
        ],
      },
      {
        company: 'Wird — Santiago, Chile · Full-Stack Developer',
        period: 'may 2021 – oct 2021',
        paragraphs: [
          'Product and UX/UI; React, TypeScript, Redux, Zustand, Kotlin; TDD; GitHub Copilot.',
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
    resumeHref: '/cv-heraldo-fortuna-es.pdf',
    resumeFilename: 'Heraldo_Fortuna_CV_ES.pdf',
    profileAlt: 'Mi foto de perfil.',
    arrowAlt: 'Flecha hacia abajo para ir a la sección sobre mí.',
  },
  about: {
    title: 'sobre mí.',
    summary:
      'Desarrollador frontend senior con más de 5 años de experiencia en arquitecturas modernas (Vue3, React, React Native, TypeScript) y ecosistemas VTEX. Lideré el desarrollo de PWAs escalables en Culqi (Vite, Astro, Nanostores) e implementé integraciones CMS-Headless (Contentful + VTEX IO) para Beautycounter USA. Experto en optimización de rendimiento (Lazy Loading, SSR y Code Splitting), patrones de estado (Redux, Zustand, GraphQL) y desarrollo fullstack (Kotlin, Node.js). Certificado PCEP y enfocado en soluciones robustas con TypeScript y Clean Code. Experiencia en arquitectura e implementación de SPA y MicroFrontends, con manejo de Module Federation.',
    jobs: [
      {
        company: 'itti — Asunción, Paraguay · Ingeniero de software senior',
        period: 'oct 2025 – actualidad',
        paragraphs: [
          'Lideré code reviews y brindé mentoría técnica al equipo de ingeniería.',
          'Desarrollé aplicaciones frontend con React y TypeScript, integrando APIs y definiendo estándares de calidad y arquitectura.',
          'Trabajé con backend, producto y UX/UI para entregar funcionalidades, con estado en Zustand, accesibilidad (a11y) y rendimiento mediante Lazy Loading, SSR y Code Splitting.',
        ],
      },
      {
        company: 'Culqi — Lima, Perú · Desarrollador frontend senior',
        period: 'ene 2024 – jun 2025',
        paragraphs: [
          "Lideré el equipo de aplicaciones PWA, donde desarrollamos 'My Sales', 'Payroll Account', 'Support' y 'Counters' desde cero, con code reviews, mentoría técnica y definición de la interfaz junto a UX/UI.",
          'Trabajé con Vue3, React Native, Vite, Astro, PWA config, Axios, TypeScript y Nanostores, y con NgRx para el estado de los módulos Angular. Optimicé rendimiento con Lazy Loading, SSR y Code Splitting, y apliqué criterios de accesibilidad (a11y).',
          'Arquitecturé estos productos como SPA y MicroFrontends, con Module Federation y consumo de microservicios y APIs.',
        ],
      },
      {
        company: 'Valtech — Buenos Aires, Argentina · Desarrollador frontend SSR',
        period: 'set 2022 – set 2023',
        paragraphs: [
          'Integración Contentful con VTEX en Beautycounter USA.',
          'Proyectos Arredo y MasOnline: React, React Native, Node.js, jQuery, GraphQL, HTML, CSS, AWS.',
          'Hooks, NgRx, CSS avanzado y TailwindCSS con UX/UI.',
        ],
      },
      {
        company: 'Sugo° — Lima, Perú · Desarrollador frontend jr',
        period: 'feb 2022 – jul 2022',
        paragraphs: [
          'VTEX supplier manager en CMS, catálogo y master data (+50% eficiencia).',
          'Lideré mantenimiento con React, Node.js, GraphQL, AWS; Git/GitHub/Azure DevOps, CI/CD.',
        ],
      },
      {
        company: 'Wird — Santiago de Chile · Desarrollador fullstack',
        period: 'may 2021 – oct 2021',
        paragraphs: [
          'Producto y UX/UI; React, TypeScript, Redux, Zustand, Kotlin; TDD; GitHub Copilot.',
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