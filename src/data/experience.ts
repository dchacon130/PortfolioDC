/**
 * ============================================================================
 * PROFESSIONAL EXPERIENCE (EN / ES) — Edit this file to add/update roles,
 * dates, client engagements, and highlights. Mirrors your latest SDET CV.
 * ============================================================================
 */

import type { Locale } from '../i18n/utils';

export interface ClientEngagement {
  name: string;
  domain: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  domain?: string;
  summary?: string;
  highlights?: string[];
  stack?: string[];
  engagements?: ClientEngagement[];
}

export interface EarlyRole {
  company: string;
  role: string;
  period: string;
}

const experienceByLocale: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      company: '919it LLC',
      role: 'Senior SDET / QA Automation Engineer',
      period: 'Aug 2024 – Present',
      location: 'Delaware, USA (Remote)',
      summary:
        'Delivering end-to-end automation architecture, multi-platform OTT testing, and release validation across enterprise US and global client teams.',
      engagements: [
        {
          name: 'CSC Connect',
          domain: 'US Banking & Financial Services Platform',
          period: 'Aug 2024 – Present',
          highlights: [
            'Designed and maintained end-to-end automated regression suites using Playwright, TypeScript, Page Object Model (POM), and Gherkin (BDD), running nightly in Azure DevOps with Allure Reports.',
            'Validated bidirectional data synchronization and integration integrity between the core web application and Salesforce.',
            'Executed black-box and functional validation on critical banking workflows, complex forms, Excel ingestion, and asynchronous email triggers via Mailtrap and LambdaTest.',
          ],
          stack: ['Playwright', 'TypeScript', 'Gherkin BDD', 'Azure DevOps', 'Allure', 'Salesforce', 'LambdaTest'],
        },
        {
          name: "Sam's Club (Monks)",
          domain: 'Retail & E-Commerce Platform',
          period: 'Apr 2026 – Aug 2026',
          highlights: [
            'Built and maintained a cross-browser automated regression suite of 305 tests per browser (Chrome, Edge, Safari), completing full-application regression in 34 minutes.',
            'Conducted manual UI/UX validations against Figma design specs and resolved ambiguous requirements prior to Copilot-assisted automation.',
            'Validated production releases inside a strict one-hour deployment window and published daily automated status reports to GitHub Pages.',
          ],
          stack: ['Playwright', 'TypeScript', 'Chrome / Edge / Safari', 'Figma QA', 'GitHub Copilot', 'GitHub Pages'],
        },
        {
          name: 'Ditu TV (Monks)',
          domain: 'OTT Media Streaming Platform',
          period: 'Jun 2025 – Mar 2026',
          highlights: [
            'Architected and maintained WebdriverIO + TypeScript automation across 7 platforms (Web, iOS, Android, Samsung Tizen, LG webOS, Hisense, and Roku) on physical and remote device labs.',
            'Automated early-morning regression suites for Live TV, EPG, VOD, Login, Profiles, and Ad Insertion with daily Slack health reports.',
            'Performed network traffic inspection, log analysis, OpenAPI contract checks, NPAW streaming telemetry verification, and Firebase mobile build management.',
            'Led client-facing quality reviews and release demos with TestRail suite governance and Allure reporting.',
          ],
          stack: ['WebdriverIO', 'TypeScript', 'Appium', 'Tizen / webOS / Roku', 'NPAW', 'OpenAPI', 'Firebase', 'TestRail'],
        },
      ],
    },
    {
      company: 'Avenue Code',
      role: 'QA Automation Engineer',
      period: 'Sep 2023 – Jul 2024',
      location: 'San Francisco, USA (Remote)',
      domain: 'Client: Traive Finance · Agri-Fintech AI Platform',
      highlights: [
        'Elevated QA processes for an AI-driven agricultural trading and credit-risk platform operating across Brazilian markets, validating machine-learning probability models for crop profitability.',
        'Developed and maintained end-to-end automated test suites using Playwright and TypeScript alongside structured manual functional testing for complex financial workflows.',
      ],
      stack: ['Playwright', 'TypeScript', 'ML Model Validation', 'Financial Workflows'],
    },
    {
      company: 'CTI Consulting',
      role: 'SDET Engineer',
      period: 'Mar 2021 – Aug 2023',
      location: 'Miami, USA (Remote)',
      domain: 'E-Commerce & Warehouse Management',
      highlights: [
        'Executed end-to-end QA across the administrative web portal and Android warehouse fulfillment app, validating product creation, purchasing, and optimal warehouse picking.',
        'Built cross-platform automation using Playwright (TypeScript), Selenium (Python), and Appium to cut manual regression overhead.',
        'Automated the web-to-tablet product-picking workflow to benchmark operator throughput baselines per day.',
        'Led live client demos and User Acceptance Testing (UAT) sessions with international stakeholders.',
      ],
      stack: ['Playwright', 'TypeScript', 'Selenium', 'Python', 'Appium', 'Android', 'UAT'],
    },
    {
      company: 'Speeron',
      role: 'Senior QA Engineer',
      period: 'Apr 2018 – Feb 2021',
      location: 'Stockholm, Sweden (Remote)',
      domain: 'Hospitality & Tourism Technology',
      highlights: [
        'Served as sole QA Engineer, establishing the QA department, quality strategy, release criteria, and test environment governance from scratch.',
        'Built UiPath RPA workflows to automate reservation creation as reusable test data preconditions for the entire engineering team.',
        'Executed comprehensive testing on Point-of-Sale (POS) applications on Windows tablets simulating real-world hospitality transactions.',
      ],
      stack: ['QA Strategy', 'UiPath RPA', 'POS / Windows Tablets', 'Release Governance'],
    },
  ],
  es: [
    {
      company: '919it LLC',
      role: 'Senior SDET / QA Automation Engineer',
      period: 'Ago 2024 – Presente',
      location: 'Delaware, EE. UU. (Remoto)',
      summary:
        'Arquitectura de automatización end-to-end, pruebas multiplataforma OTT y validación de lanzamientos para equipos empresariales en EE. UU. y globales.',
      engagements: [
        {
          name: 'CSC Connect',
          domain: 'Plataforma Bancaria y Servicios Financieros (EE. UU.)',
          period: 'Ago 2024 – Presente',
          highlights: [
            'Diseñé y mantuve suites de regresión E2E con Playwright, TypeScript, Page Object Model (POM) y Gherkin (BDD), ejecutadas cada noche en Azure DevOps con reportes Allure.',
            'Validé la sincronización bidireccional de datos y la integridad de integraciones entre la aplicación web principal y Salesforce.',
            'Ejecuté pruebas funcionales y de caja negra en flujos bancarios críticos, formularios complejos, ingesta de archivos Excel y alertas asíncronas por correo con Mailtrap y LambdaTest.',
          ],
          stack: ['Playwright', 'TypeScript', 'Gherkin BDD', 'Azure DevOps', 'Allure', 'Salesforce', 'LambdaTest'],
        },
        {
          name: "Sam's Club (Monks)",
          domain: 'Plataforma Retail y E-Commerce',
          period: 'Abr 2026 – Ago 2026',
          highlights: [
            'Construí y mantuve una suite cross-browser de 305 pruebas por navegador (Chrome, Edge y Safari), completando la regresión completa de la aplicación en 34 minutos.',
            'Realicé validaciones manuales de UI/UX contra especificaciones en Figma y aclaré requerimientos ambiguos antes de automatizar con asistencia de GitHub Copilot.',
            'Validé despliegues en producción dentro de ventanas estrictas de una hora y publiqué reportes diarios automatizados en GitHub Pages.',
          ],
          stack: ['Playwright', 'TypeScript', 'Chrome / Edge / Safari', 'Figma QA', 'GitHub Copilot', 'GitHub Pages'],
        },
        {
          name: 'Ditu TV (Monks)',
          domain: 'Plataforma de Streaming Media OTT',
          period: 'Jun 2025 – Mar 2026',
          highlights: [
            'Arquitecté y mantuve automatización con WebdriverIO + TypeScript en 7 plataformas (Web, iOS, Android, Samsung Tizen, LG webOS, Hisense y Roku) sobre laboratorios físicos y remotos.',
            'Automaticé regresiones diarias en la madrugada cubriendo Live TV, EPG, VOD, Login, Perfiles e Inserción de Anuncios, con reportes diarios de salud en Slack.',
            'Realicé inspección profunda de tráfico de red, análisis de logs, verificación de contratos OpenAPI, validación de telemetría de video con NPAW y gestión de builds móviles en Firebase.',
            'Lideré revisiones de calidad y demos de release frente al cliente, gestionando suites en TestRail y publicando reportes Allure.',
          ],
          stack: ['WebdriverIO', 'TypeScript', 'Appium', 'Tizen / webOS / Roku', 'NPAW', 'OpenAPI', 'Firebase', 'TestRail'],
        },
      ],
    },
    {
      company: 'Avenue Code',
      role: 'QA Automation Engineer',
      period: 'Sep 2023 – Jul 2024',
      location: 'San Francisco, EE. UU. (Remoto)',
      domain: 'Cliente: Traive Finance · Plataforma Agri-Fintech con IA',
      highlights: [
        'Elevé los procesos de QA para una plataforma agrícola de crédito y riesgo impulsada por IA en mercados de Brasil, validando modelos probabilísticos de machine learning para rentabilidad de cultivos.',
        'Desarrollé y mantuve suites de pruebas E2E con Playwright y TypeScript junto con pruebas funcionales manuales estructuradas para flujos financieros complejos.',
      ],
      stack: ['Playwright', 'TypeScript', 'Validación ML', 'Flujos Financieros'],
    },
    {
      company: 'CTI Consulting',
      role: 'SDET Engineer',
      period: 'Mar 2021 – Ago 2023',
      location: 'Miami, EE. UU. (Remoto)',
      domain: 'E-Commerce y Gestión de Bodegas',
      highlights: [
        'Ejecuté QA integral sobre el portal administrativo web y la aplicación Android de fulfillment en bodega, validando creación de productos, compras e itinerarios óptimos de picking.',
        'Desarrollé automatización multiplataforma con Playwright (TypeScript), Selenium (Python) y Appium para reducir la carga manual de regresión.',
        'Automaticé el flujo web-a-tablet de recolección de productos para medir productividad diaria por operador y establecer líneas base operativas.',
        'Lideré demostraciones en vivo y sesiones de Pruebas de Aceptación de Usuario (UAT) con stakeholders internacionales.',
      ],
      stack: ['Playwright', 'TypeScript', 'Selenium', 'Python', 'Appium', 'Android', 'UAT'],
    },
    {
      company: 'Speeron',
      role: 'Senior QA Engineer',
      period: 'Abr 2018 – Feb 2021',
      location: 'Estocolmo, Suecia (Remoto)',
      domain: 'Tecnología para Hotelería y Turismo',
      highlights: [
        'Me desempeñé como único QA Engineer, estableciendo desde cero el área de QA, estrategia de calidad, criterios de liberación y gobierno de ambientes de prueba.',
        'Construí flujos RPA con UiPath para automatizar la creación de reservas como precondiciones reutilizables de datos de prueba para todo el equipo de ingeniería.',
        'Ejecuté pruebas exhaustivas sobre aplicaciones de Punto de Venta (POS) en tablets Windows simulando operaciones hoteleras reales.',
      ],
      stack: ['Estrategia QA', 'UiPath RPA', 'POS / Tablets Windows', 'Gobierno de Releases'],
    },
  ],
};

const earlyCareerByLocale: Record<Locale, EarlyRole[]> = {
  en: [
    {
      company: 'SoftwareOne (Intergrupo)',
      role: 'Mid-Level QA Engineer',
      period: 'Jun 2013 – Mar 2018',
    },
    {
      company: 'Q-Vision Technologies',
      role: 'Junior QA Engineer',
      period: 'Apr 2012 – May 2013',
    },
    {
      company: 'DataTools',
      role: 'Junior QA Engineer',
      period: 'Jan 2010 – Mar 2012',
    },
  ],
  es: [
    {
      company: 'SoftwareOne (Intergrupo)',
      role: 'QA Engineer Intermedio',
      period: 'Jun 2013 – Mar 2018',
    },
    {
      company: 'Q-Vision Technologies',
      role: 'QA Engineer Junior',
      period: 'Abr 2012 – May 2013',
    },
    {
      company: 'DataTools',
      role: 'QA Engineer Junior',
      period: 'Ene 2010 – Mar 2012',
    },
  ],
};

export function getExperience(locale: Locale = 'en'): ExperienceItem[] {
  return experienceByLocale[locale];
}

export function getEarlyCareer(locale: Locale = 'en'): EarlyRole[] {
  return earlyCareerByLocale[locale];
}

export const experience = experienceByLocale.en;
export const earlyCareer = earlyCareerByLocale.en;
