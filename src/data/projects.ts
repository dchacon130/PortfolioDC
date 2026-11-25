/**
 * ============================================================================
 * SELECTED WORK & CASE STUDIES (EN / ES) — Edit this file to add new QA
 * engineering case studies or web / open-source projects.
 * ============================================================================
 */

import type { Locale } from '../i18n/utils';

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  category: string;
  period: string;
  metric: string;
  summary: string;
  architecture: string;
  impact: string;
  stack: string[];
  featured?: boolean;
}

export interface WebProject {
  title: string;
  category: string;
  description: string;
  stack: string[];
  linkLabel: string;
  href: string;
  image?: string;
}

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  en: [
    {
      id: 'ditu-tv',
      index: '01',
      title: 'Ditu TV — Multi-Platform OTT Automation',
      category: 'OTT Streaming · Monks / 919it',
      period: '2025 – 2026',
      metric: '7 platforms · daily Slack & Allure health gates',
      summary:
        'Unified end-to-end test automation for a live and on-demand media streaming product spanning web, mobile, and Smart TV hardware.',
      architecture:
        'Architected a modular WebdriverIO + TypeScript framework executing across physical and remote device labs (Web, iOS, Android, Samsung Tizen, LG webOS, Hisense, Roku), backed by OpenAPI contract checks, NPAW streaming telemetry validation, and Firebase build distribution.',
      impact:
        'Automated early-morning regression covering Live TV, EPG, VOD, Login, Profiles, and Ad Insertion—delivering actionable daily health reports directly to Slack and TestRail.',
      stack: ['WebdriverIO', 'TypeScript', 'Appium', 'Smart TV / OTT', 'NPAW', 'OpenAPI', 'Firebase', 'Allure'],
      featured: true,
    },
    {
      id: 'sams-club',
      index: '02',
      title: "Sam's Club — High-Velocity Retail Regression",
      category: 'E-Commerce · Monks / 919it',
      period: '2026',
      metric: '305 tests × 3 browsers in 34 minutes',
      summary:
        'Cross-browser regression engineering and rapid production release sign-off for a large-scale retail e-commerce storefront.',
      architecture:
        'Built a resilient Playwright + TypeScript suite running 305 tests each on Chrome, Edge, and Safari, paired with Figma UI/UX parity reviews, Copilot-assisted test authoring, and automated GitHub Pages dashboards.',
      impact:
        'Cut full-application cross-browser verification down to 34 minutes and enabled confident production release validation inside strict 1-hour deployment windows.',
      stack: ['Playwright', 'TypeScript', 'Chrome / Edge / Safari', 'Figma QA', 'GitHub Pages', 'GitHub Copilot'],
      featured: true,
    },
    {
      id: 'csc-connect',
      index: '03',
      title: 'CSC Connect — US Banking & Salesforce Integrity',
      category: 'Banking & Financial Services · 919it',
      period: '2024 – Present',
      metric: 'Nightly Azure DevOps BDD quality gates',
      summary:
        'Mission-critical financial workflow automation validating end-to-end web operations and bidirectional Salesforce CRM synchronization.',
      architecture:
        'Engineered a Playwright + TypeScript framework structured with Page Object Model (POM) and Gherkin (BDD) scenarios, scheduled nightly in Azure DevOps with Allure reporting, Mailtrap email verification, and LambdaTest execution.',
      impact:
        'Ensured consistent customer and financial data integrity across web, Excel ingestion pipelines, asynchronous notifications, and Salesforce before every release.',
      stack: ['Playwright', 'TypeScript', 'POM', 'Gherkin BDD', 'Azure DevOps', 'Allure', 'Salesforce', 'Mailtrap'],
      featured: true,
    },
    {
      id: 'traive-finance',
      index: '04',
      title: 'Traive Finance — AI Credit-Risk QA',
      category: 'Agri-Fintech AI · Avenue Code',
      period: '2023 – 2024',
      metric: 'ML credit-risk & financial workflow validation',
      summary:
        'Quality engineering for an AI-powered agricultural trading and credit-risk platform serving Brazilian financial markets.',
      architecture:
        'Combined Playwright + TypeScript E2E automation with structured functional verification of machine-learning crop profitability probability models and complex financial rules.',
      impact:
        'Strengthened release confidence across high-value underwriting workflows and automated critical regression paths.',
      stack: ['Playwright', 'TypeScript', 'AI / ML Testing', 'Fintech QA'],
      featured: false,
    },
  ],
  es: [
    {
      id: 'ditu-tv',
      index: '01',
      title: 'Ditu TV — Automatización OTT Multiplataforma',
      category: 'Streaming OTT · Monks / 919it',
      period: '2025 – 2026',
      metric: '7 plataformas · reportes diarios en Slack y Allure',
      summary:
        'Automatización end-to-end unificada para un producto de streaming en vivo y bajo demanda a través de web, dispositivos móviles y Smart TV.',
      architecture:
        'Arquitecté un framework modular con WebdriverIO y TypeScript ejecutándose en laboratorios físicos y remotos (Web, iOS, Android, Samsung Tizen, LG webOS, Hisense y Roku), complementado con contratos OpenAPI, telemetría de video NPAW y distribución de builds con Firebase.',
      impact:
        'Automaticé la regresión diaria cubriendo Live TV, EPG, VOD, Login, Perfiles e Inserción de Anuncios—entregando reportes accionables de salud cada mañana directo a Slack y TestRail.',
      stack: ['WebdriverIO', 'TypeScript', 'Appium', 'Smart TV / OTT', 'NPAW', 'OpenAPI', 'Firebase', 'Allure'],
      featured: true,
    },
    {
      id: 'sams-club',
      index: '02',
      title: "Sam's Club — Regresión Retail de Alta Velocidad",
      category: 'E-Commerce · Monks / 919it',
      period: '2026',
      metric: '305 pruebas × 3 navegadores en 34 minutos',
      summary:
        'Ingeniería de regresión cross-browser y validación acelerada de lanzamientos en producción para una plataforma e-commerce retail de gran escala.',
      architecture:
        'Construí una suite robusta con Playwright y TypeScript ejecutando 305 pruebas en Chrome, Edge y Safari, combinada con revisiones UI/UX contra Figma, diseño asistido por GitHub Copilot y tableros automatizados en GitHub Pages.',
      impact:
        'Reduje la verificación completa cross-browser a 34 minutos y habilité validaciones confiables de producción dentro de ventanas estrictas de despliegue de 1 hora.',
      stack: ['Playwright', 'TypeScript', 'Chrome / Edge / Safari', 'Figma QA', 'GitHub Pages', 'GitHub Copilot'],
      featured: true,
    },
    {
      id: 'csc-connect',
      index: '03',
      title: 'CSC Connect — Banca EE. UU. e Integridad Salesforce',
      category: 'Banca y Servicios Financieros · 919it',
      period: '2024 – Presente',
      metric: 'Quality gates BDD nocturnos en Azure DevOps',
      summary:
        'Automatización de flujos financieros críticos validando operaciones web end-to-end y sincronización bidireccional con Salesforce CRM.',
      architecture:
        'Desarrollé un framework en Playwright + TypeScript estructurado con Page Object Model (POM) y escenarios Gherkin (BDD), programado cada noche en Azure DevOps con reportes Allure, verificación de correos en Mailtrap y ejecución en LambdaTest.',
      impact:
        'Garanticé consistencia de datos financieros y de clientes entre la web, cargas masivas en Excel, notificaciones asíncronas y Salesforce antes de cada despliegue.',
      stack: ['Playwright', 'TypeScript', 'POM', 'Gherkin BDD', 'Azure DevOps', 'Allure', 'Salesforce', 'Mailtrap'],
      featured: true,
    },
    {
      id: 'traive-finance',
      index: '04',
      title: 'Traive Finance — QA de Riesgo Crediticio con IA',
      category: 'Agri-Fintech IA · Avenue Code',
      period: '2023 – 2024',
      metric: 'Validación de modelos ML y flujos financieros',
      summary:
        'Ingeniería de calidad para una plataforma agrícola de trading y riesgo crediticio impulsada por inteligencia artificial en Brasil.',
      architecture:
        'Combiné automatización E2E en Playwright + TypeScript con validación funcional estructurada de modelos probabilísticos de machine learning para rentabilidad de cultivos y reglas financieras complejas.',
      impact:
        'Fortalecí la confianza en lanzamientos de flujos crediticios de alto impacto y automaticé rutas críticas de regresión.',
      stack: ['Playwright', 'TypeScript', 'Testing IA / ML', 'QA Fintech'],
      featured: false,
    },
  ],
};

const webProjectsByLocale: Record<Locale, WebProject[]> = {
  en: [
    {
      title: '919IT LLC',
      category: 'Business Website',
      description:
        'Corporate web presence showcasing software engineering and QA automation consulting services, built for speed and clarity with Astro.',
      stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
      linkLabel: 'Visit live site',
      href: 'https://919itllc.com',
      image: '/assets/image/919it-web-background.png',
    },
    {
      title: 'Portfolio DC (v2)',
      category: 'Personal Engineering Site',
      description:
        'This minimalist, zero-bloat portfolio built with Astro 5 and Tailwind CSS v4—data-driven TypeScript architecture with Playwright E2E CI and zero client framework runtime.',
      stack: ['Astro 5', 'Tailwind CSS v4', 'TypeScript', 'Playwright CI'],
      linkLabel: 'View on GitHub',
      href: 'https://github.com/dchacon130/PortfolioDC',
    },
  ],
  es: [
    {
      title: '919IT LLC',
      category: 'Sitio Corporativo',
      description:
        'Presencia web corporativa para servicios de ingeniería de software y consultoría en automatización QA, construida con Astro para máxima velocidad y claridad.',
      stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
      linkLabel: 'Visitar sitio',
      href: 'https://919itllc.com',
      image: '/assets/image/919it-web-background.png',
    },
    {
      title: 'Portfolio DC (v2)',
      category: 'Sitio Personal de Ingeniería',
      description:
        'Este portafolio minimalista construido con Astro 5 y Tailwind CSS v4—arquitectura modular en TypeScript, CI con Playwright E2E y cero runtime JS de cliente.',
      stack: ['Astro 5', 'Tailwind CSS v4', 'TypeScript', 'Playwright CI'],
      linkLabel: 'Ver en GitHub',
      href: 'https://github.com/dchacon130/PortfolioDC',
    },
  ],
};

export function getCaseStudies(locale: Locale = 'en'): CaseStudy[] {
  return caseStudiesByLocale[locale];
}

export function getWebProjects(locale: Locale = 'en'): WebProject[] {
  return webProjectsByLocale[locale];
}

export const caseStudies = caseStudiesByLocale.en;
export const webProjects = webProjectsByLocale.en;
