/**
 * ============================================================================
 * UI STRINGS (EN / ES) — Edit this file to adjust interface labels, headings,
 * buttons, form states, and page-level SEO titles/descriptions per language.
 * ============================================================================
 */

import type { Locale } from './utils';

export interface UiCopy {
  skipToContent: string;
  nav: {
    home: string;
    work: string;
    about: string;
    services: string;
    contact: string;
    cvShort: string;
    cvDownloadFull: string;
    primaryLabel: string;
    mobileLabel: string;
    toggleMenu: string;
    languageSwitcherLabel: string;
    themeToggleLabel: string;
  };
  footer: {
    navigation: string;
    connect: string;
    builtWith: string;
    zeroBloat: string;
  };
  home: {
    primaryCta: string;
    secondaryCta: string;
    downloadCv: string;
    metricsAriaLabel: string;
    selectedWorkLabel: string;
    selectedWorkTitle: string;
    selectedWorkSubtitle: string;
    allCaseStudies: string;
    capabilitiesLabel: string;
    capabilitiesTitle: string;
    exploreServices: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  work: {
    seoTitle: string;
    seoDescription: string;
    eyebrowTag: string;
    eyebrowSub: string;
    title: string;
    subtitle: string;
    caseStudiesLabel: string;
    caseStudiesTitle: string;
    contextLabel: string;
    architectureLabel: string;
    impactLabel: string;
    careerLabel: string;
    careerTitle: string;
    earlyCareerTitle: string;
    earlyCareerSummary: string;
    webLabel: string;
    webTitle: string;
    bottomPrompt: string;
    bottomSub: string;
    downloadResume: string;
    contactMe: string;
  };
  about: {
    seoTitle: string;
    seoDescription: string;
    eyebrowTag: string;
    eyebrowSub: string;
    title: string;
    locationLabel: string;
    collaborationLabel: string;
    coreStackLabel: string;
    languagesLabel: string;
    downloadResume: string;
    principle1Title: string;
    principle1Body: string;
    principle2Title: string;
    principle2Body: string;
    skillsLabel: string;
    skillsTitle: string;
    credentialsLabel: string;
    credentialsTitle: string;
  };
  services: {
    seoTitle: string;
    seoDescription: string;
    eyebrowTag: string;
    eyebrowSub: string;
    title: string;
    subtitle: string;
    deliverablesLabel: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    emailDirectly: string;
  };
  contact: {
    seoTitle: string;
    seoDescription: string;
    eyebrowTag: string;
    eyebrowSub: string;
    title: string;
    subtitle: string;
    directEmail: string;
    copy: string;
    copied: string;
    copyFailed: string;
    locationTimezone: string;
    profiles: string;
    downloadResume: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    noSpam: string;
    statusMailtoPrefix: string;
    statusSuccess: string;
    statusRedirecting: string;
    statusSubmitError: string;
    statusNetworkError: string;
  };
}

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    skipToContent: 'Skip to content',
    nav: {
      home: 'Home',
      work: 'Work',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      cvShort: 'CV PDF',
      cvDownloadFull: 'Download Resume (PDF)',
      primaryLabel: 'Primary navigation',
      mobileLabel: 'Mobile navigation',
      toggleMenu: 'Toggle navigation menu',
      languageSwitcherLabel: 'Language selector',
      themeToggleLabel: 'Toggle color theme',
    },
    footer: {
      navigation: 'Navigation',
      connect: 'Connect',
      builtWith: 'Built with Astro & Tailwind CSS.',
      zeroBloat: 'Zero bloat · Static-first',
    },
    home: {
      primaryCta: 'Start a conversation',
      secondaryCta: 'Selected work',
      downloadCv: 'Download CV (PDF)',
      metricsAriaLabel: 'Key career metrics',
      selectedWorkLabel: 'Selected Work',
      selectedWorkTitle: 'Production automation & quality engineering',
      selectedWorkSubtitle:
        'Recent enterprise systems where I architected multi-platform test frameworks, release gates, and measurable regression pipelines.',
      allCaseStudies: 'All case studies →',
      capabilitiesLabel: 'How I Help',
      capabilitiesTitle: 'Core SDET capabilities',
      exploreServices: 'Explore services →',
      ctaEyebrow: 'Next Step',
      ctaTitle: 'Need a Senior SDET or resilient automation suite?',
      ctaSubtitle:
        'Based in Bogotá, Colombia, working remotely in US business hours. Reach out directly or grab my latest resume.',
      ctaButton: 'Get in touch',
    },
    work: {
      seoTitle: 'Work & Experience',
      seoDescription:
        'Enterprise QA automation case studies across OTT streaming, retail e-commerce, US banking, and AI fintech, plus 10+ years of career history.',
      eyebrowTag: 'WORK',
      eyebrowSub: 'CASE STUDIES & EXPERIENCE',
      title: 'Automation frameworks shipped in production.',
      subtitle:
        'A closer look at the test architectures, release pipelines, and engineering teams I have supported across banking, e-commerce, AI fintech, and multi-platform OTT media.',
      caseStudiesLabel: 'Flagship Case Studies',
      caseStudiesTitle: 'Selected QA engineering engagements',
      contextLabel: 'Context',
      architectureLabel: 'Architecture',
      impactLabel: 'Impact',
      careerLabel: 'Career History',
      careerTitle: 'Professional experience',
      earlyCareerTitle: 'Early Career Foundations',
      earlyCareerSummary:
        'Healthcare, telecommunications, finance, e-commerce, and transportation systems.',
      webLabel: 'Web & Open Source',
      webTitle: 'Published web builds',
      bottomPrompt: 'Want the full printable summary?',
      bottomSub: 'Download my latest Senior SDET resume or reach out directly.',
      downloadResume: 'Download Resume PDF',
      contactMe: 'Contact me →',
    },
    about: {
      seoTitle: 'About',
      seoDescription:
        'Background, technical matrix, ISTQB certifications, and engineering principles of Diego Chacón, Senior QA Automation Engineer / SDET.',
      eyebrowTag: 'ABOUT',
      eyebrowSub: 'PROFILE & CREDENTIALS',
      title: 'Methodical quality engineering, forged for release speed.',
      locationLabel: 'Location',
      collaborationLabel: 'Collaboration',
      coreStackLabel: 'Core Stack',
      languagesLabel: 'Languages',
      downloadResume: 'Download Resume PDF',
      principle1Title: '01 // Signal over noise',
      principle1Body:
        'I treat test code like production code: clean abstractions, deterministic data, minimal flakiness, and reports engineers actually read.',
      principle2Title: '02 // Product-first QA',
      principle2Body:
        'I clarify edge cases at the Figma and requirements stage before writing scripts—preventing defects earlier instead of merely logging them later.',
      skillsLabel: 'Technical Stack',
      skillsTitle: 'Tools, frameworks & platforms',
      credentialsLabel: 'Credentials',
      credentialsTitle: 'Certifications & education',
    },
    services: {
      seoTitle: 'Services',
      seoDescription:
        'Test automation architecture, CI/CD quality gates, API & performance QA, and QA strategy consulting by Diego Chacón.',
      eyebrowTag: 'SERVICES',
      eyebrowSub: 'HOW I WORK WITH TEAMS',
      title: 'Pragmatic quality engineering built for high-velocity teams.',
      subtitle:
        'Whether you need a Senior SDET embedded in your product squad, an automation framework built from scratch, or an audit of flaky CI suites, here is how I help engineering teams ship with confidence.',
      deliverablesLabel: 'Key Deliverables',
      ctaEyebrow: "Let's Talk",
      ctaTitle: 'Have a release bottleneck or framework to build?',
      ctaSubtitle:
        'Tell me about your stack, platforms, and release cadence. I respond directly within one business day.',
      ctaButton: 'Discuss a project',
      emailDirectly: 'Email directly',
    },
    contact: {
      seoTitle: 'Contact',
      seoDescription:
        'Get in touch with Diego Chacón for Senior SDET roles, test automation architecture, or QA consulting.',
      eyebrowTag: 'CONTACT',
      eyebrowSub: 'START A CONVERSATION',
      title: "Let's talk about your team or next release.",
      subtitle:
        'Open to Senior SDET / QA Automation Engineer opportunities and focused consulting engagements. Based in Bogotá, Colombia, aligned with US business hours.',
      directEmail: 'Direct Email',
      copy: 'Copy',
      copied: 'Copied',
      copyFailed: 'Failed',
      locationTimezone: 'Location & Timezone',
      profiles: 'Profiles',
      downloadResume: 'Download Resume (PDF)',
      formTitle: 'Send a message',
      formSubtitle: 'Share a bit of context on your role, project, or QA goals.',
      nameLabel: 'Name',
      namePlaceholder: 'Jane Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'jane@company.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about the role, team, or testing challenge...',
      submitButton: 'Send message',
      noSpam: 'No spam // Direct reply',
      statusMailtoPrefix: 'Opening your email app to send this message to',
      statusSuccess: 'Message sent. Thank you for reaching out—I will reply shortly.',
      statusRedirecting: 'Completing security verification via Formspree...',
      statusSubmitError: 'Could not submit via form right now. Please email',
      statusNetworkError: 'Network error while sending. Please email',
    },
  },
  es: {
    skipToContent: 'Ir al contenido principal',
    nav: {
      home: 'Inicio',
      work: 'Trabajo',
      about: 'Sobre mí',
      services: 'Servicios',
      contact: 'Contacto',
      cvShort: 'CV PDF',
      cvDownloadFull: 'Descargar CV (PDF)',
      primaryLabel: 'Navegación principal',
      mobileLabel: 'Navegación móvil',
      toggleMenu: 'Abrir o cerrar menú de navegación',
      languageSwitcherLabel: 'Selector de idioma',
      themeToggleLabel: 'Cambiar tema de color',
    },
    footer: {
      navigation: 'Navegación',
      connect: 'Contacto',
      builtWith: 'Construido con Astro y Tailwind CSS.',
      zeroBloat: 'Sin peso extra · Estático',
    },
    home: {
      primaryCta: 'Iniciar conversación',
      secondaryCta: 'Trabajo destacado',
      downloadCv: 'Descargar CV (PDF)',
      metricsAriaLabel: 'Métricas clave de experiencia',
      selectedWorkLabel: 'Trabajo Destacado',
      selectedWorkTitle: 'Automatización e ingeniería de calidad en producción',
      selectedWorkSubtitle:
        'Sistemas empresariales recientes donde arquitecté frameworks multiplataforma, quality gates en CI/CD y suites de regresión medibles.',
      allCaseStudies: 'Todos los casos →',
      capabilitiesLabel: 'Cómo Aporto',
      capabilitiesTitle: 'Capacidades clave como SDET',
      exploreServices: 'Ver servicios →',
      ctaEyebrow: 'Siguiente Paso',
      ctaTitle: '¿Necesitas un Senior SDET o una suite de automatización sólida?',
      ctaSubtitle:
        'Ubicado en Bogotá, Colombia, trabajando en remoto en horario laboral de EE. UU. Escríbeme directamente o descarga mi CV actualizado.',
      ctaButton: 'Contáctame',
    },
    work: {
      seoTitle: 'Trabajo y Experiencia',
      seoDescription:
        'Casos de estudio en automatización QA para OTT streaming, e-commerce, banca en EE. UU. y fintech con IA, más de 10 años de trayectoria.',
      eyebrowTag: 'TRABAJO',
      eyebrowSub: 'CASOS DE ESTUDIO Y EXPERIENCIA',
      title: 'Frameworks de automatización probados en producción.',
      subtitle:
        'Un recorrido por las arquitecturas de pruebas, pipelines de despliegue y equipos de ingeniería con los que he trabajado en banca, e-commerce, fintech con IA y plataformas OTT.',
      caseStudiesLabel: 'Casos de Estudio Principales',
      caseStudiesTitle: 'Proyectos seleccionados de ingeniería QA',
      contextLabel: 'Contexto',
      architectureLabel: 'Arquitectura',
      impactLabel: 'Impacto',
      careerLabel: 'Trayectoria',
      careerTitle: 'Experiencia profesional',
      earlyCareerTitle: 'Primeros Años en QA',
      earlyCareerSummary:
        'Sistemas de salud, telecomunicaciones, finanzas, comercio electrónico y transporte.',
      webLabel: 'Web y Open Source',
      webTitle: 'Sitios web publicados',
      bottomPrompt: '¿Prefieres el resumen completo en PDF?',
      bottomSub: 'Descarga mi CV actualizado de Senior SDET o escríbeme directamente.',
      downloadResume: 'Descargar CV PDF',
      contactMe: 'Contáctame →',
    },
    about: {
      seoTitle: 'Sobre mí',
      seoDescription:
        'Perfil, stack técnico, certificaciones ISTQB y principios de ingeniería de Diego Chacón, Senior QA Automation Engineer / SDET.',
      eyebrowTag: 'SOBRE MÍ',
      eyebrowSub: 'PERFIL Y CREDENCIALES',
      title: 'Ingeniería de calidad metódica, diseñada para la velocidad de entrega.',
      locationLabel: 'Ubicación',
      collaborationLabel: 'Modalidad',
      coreStackLabel: 'Stack Principal',
      languagesLabel: 'Idiomas',
      downloadResume: 'Descargar CV PDF',
      principle1Title: '01 // Señal sobre ruido',
      principle1Body:
        'Trato el código de pruebas como código de producción: abstracciones limpias, datos deterministas, mínima inestabilidad y reportes útiles para el equipo.',
      principle2Title: '02 // QA orientado al producto',
      principle2Body:
        'Aclaro casos borde desde Figma y requerimientos antes de automatizar—previniendo defectos temprano en vez de limitarme a reportarlos al final.',
      skillsLabel: 'Stack Técnico',
      skillsTitle: 'Herramientas, frameworks y plataformas',
      credentialsLabel: 'Credenciales',
      credentialsTitle: 'Certificaciones y educación',
    },
    services: {
      seoTitle: 'Servicios',
      seoDescription:
        'Arquitectura de automatización de pruebas, quality gates en CI/CD, QA de APIs y rendimiento, y consultoría en estrategia QA por Diego Chacón.',
      eyebrowTag: 'SERVICIOS',
      eyebrowSub: 'CÓMO TRABAJO CON EQUIPOS',
      title: 'Ingeniería de calidad pragmática para equipos de alta velocidad.',
      subtitle:
        'Ya sea integrándome como Senior SDET en tu squad de producto, construyendo un framework desde cero o estabilizando suites en CI, así ayudo a los equipos a lanzar con confianza.',
      deliverablesLabel: 'Entregables Clave',
      ctaEyebrow: 'Hablemos',
      ctaTitle: '¿Tienes cuellos de botella en releases o un framework por construir?',
      ctaSubtitle:
        'Cuéntame sobre tu stack, plataformas y cadencia de despliegues. Respondo directamente en menos de un día hábil.',
      ctaButton: 'Hablar sobre un proyecto',
      emailDirectly: 'Escribir por correo',
    },
    contact: {
      seoTitle: 'Contacto',
      seoDescription:
        'Contacta a Diego Chacón para roles de Senior SDET, arquitectura de automatización de pruebas o consultoría QA.',
      eyebrowTag: 'CONTACTO',
      eyebrowSub: 'INICIAR CONVERSACIÓN',
      title: 'Hablemos sobre tu equipo o próximo lanzamiento.',
      subtitle:
        'Disponible para roles de Senior SDET / QA Automation Engineer y consultorías enfocadas. Ubicado en Bogotá, Colombia, alineado con horario laboral de EE. UU.',
      directEmail: 'Correo Directo',
      copy: 'Copiar',
      copied: 'Copiado',
      copyFailed: 'Error',
      locationTimezone: 'Ubicación y Horario',
      profiles: 'Perfiles',
      downloadResume: 'Descargar CV (PDF)',
      formTitle: 'Enviar mensaje',
      formSubtitle: 'Comparte un poco de contexto sobre el rol, proyecto u objetivos de QA.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@empresa.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre el rol, el equipo o el reto de pruebas...',
      submitButton: 'Enviar mensaje',
      noSpam: 'Sin spam // Respuesta directa',
      statusMailtoPrefix: 'Abriendo tu aplicación de correo para enviar el mensaje a',
      statusSuccess: 'Mensaje enviado. Gracias por escribir—responderé pronto.',
      statusRedirecting: 'Completando verificación de seguridad en Formspree...',
      statusSubmitError: 'No se pudo enviar por el formulario en este momento. Escríbeme a',
      statusNetworkError: 'Error de red al enviar. Por favor escribe directamente a',
    },
  },
};

export function getUiCopy(locale: Locale): UiCopy {
  return uiCopy[locale];
}
