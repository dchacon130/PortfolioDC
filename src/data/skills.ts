/**
 * ============================================================================
 * TECHNICAL SKILLS, CERTIFICATIONS & EDUCATION (EN / ES) — Edit this file to
 * add new tools, certifications, or languages.
 * ============================================================================
 */

import type { Locale } from '../i18n/utils';

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  badge?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

const skillGroupsByLocale: Record<Locale, SkillGroup[]> = {
  en: [
    {
      category: 'Test Automation & Frameworks',
      items: [
        'Playwright',
        'WebdriverIO',
        'Appium',
        'Selenium',
        'Cucumber / Gherkin (BDD)',
        'Page Object Model (POM)',
        'UiPath (RPA)',
      ],
    },
    {
      category: 'Programming Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      category: 'API, Performance & Network',
      items: ['Postman', 'Swagger / OpenAPI', 'K6 (Load & Performance)', 'Proxyman'],
    },
    {
      category: 'CI/CD, Cloud & Reporting',
      items: [
        'Azure DevOps',
        'GitHub Actions',
        'Docker (Fundamentals)',
        'LambdaTest',
        'Allure Reports',
        'GitHub Pages',
      ],
    },
    {
      category: 'Platforms (Web, Mobile & OTT)',
      items: [
        'Web Applications',
        'iOS',
        'Android',
        'POS / Kiosk Systems',
        'Samsung Tizen',
        'LG webOS',
        'Hisense',
        'Roku',
        'Firebase',
        'NPAW',
      ],
    },
    {
      category: 'Databases & QA Ecosystem',
      items: [
        'SQL Server',
        'MySQL',
        'MongoDB',
        'IBM Netezza (ETL / DW)',
        'Jira',
        'TestRail',
        'TestLink',
        'Mantis',
        'Salesforce',
        'Mailtrap',
        'Shopify',
      ],
    },
    {
      category: 'AI-Assisted Engineering',
      items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'LangChain (Fundamentals)'],
    },
  ],
  es: [
    {
      category: 'Automatización y Frameworks',
      items: [
        'Playwright',
        'WebdriverIO',
        'Appium',
        'Selenium',
        'Cucumber / Gherkin (BDD)',
        'Page Object Model (POM)',
        'UiPath (RPA)',
      ],
    },
    {
      category: 'Lenguajes de Programación',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      category: 'API, Rendimiento y Red',
      items: ['Postman', 'Swagger / OpenAPI', 'K6 (Carga y Rendimiento)', 'Proxyman'],
    },
    {
      category: 'CI/CD, Nube y Reportes',
      items: [
        'Azure DevOps',
        'GitHub Actions',
        'Docker (Fundamentos)',
        'LambdaTest',
        'Allure Reports',
        'GitHub Pages',
      ],
    },
    {
      category: 'Plataformas (Web, Mobile y OTT)',
      items: [
        'Aplicaciones Web',
        'iOS',
        'Android',
        'Sistemas POS / Kiosco',
        'Samsung Tizen',
        'LG webOS',
        'Hisense',
        'Roku',
        'Firebase',
        'NPAW',
      ],
    },
    {
      category: 'Bases de Datos y Gestión QA',
      items: [
        'SQL Server',
        'MySQL',
        'MongoDB',
        'IBM Netezza (ETL / DW)',
        'Jira',
        'TestRail',
        'TestLink',
        'Mantis',
        'Salesforce',
        'Mailtrap',
        'Shopify',
      ],
    },
    {
      category: 'Ingeniería Asistida por IA',
      items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'LangChain (Fundamentos)'],
    },
  ],
};

const credentialsByLocale: Record<Locale, Credential[]> = {
  en: [
    {
      title: 'ISTQB Certified Tester — Advanced Level Test Automation Engineer (CT-TAE)',
      issuer: 'ISTQB',
      badge: 'Advanced',
    },
    {
      title: 'ISTQB Certified Tester — Foundation Level & Agile Tester (CTFL)',
      issuer: 'ISTQB',
      badge: 'Certified',
    },
    {
      title: 'Software Engineering Studies',
      issuer: 'Universidad Nacional Abierta y a Distancia (UNAD)',
      badge: 'Education',
    },
    {
      title: 'Advanced Playwright',
      issuer: 'Test Automation University',
      badge: 'Specialization',
    },
    {
      title: 'Development of Applications with AI using LangChain & Docker Fundamentals (2025)',
      issuer: 'Platzi',
      badge: '2025',
    },
  ],
  es: [
    {
      title: 'ISTQB Certified Tester — Advanced Level Test Automation Engineer (CT-TAE)',
      issuer: 'ISTQB',
      badge: 'Avanzado',
    },
    {
      title: 'ISTQB Certified Tester — Foundation Level & Agile Tester (CTFL)',
      issuer: 'ISTQB',
      badge: 'Certificado',
    },
    {
      title: 'Estudios en Ingeniería de Software',
      issuer: 'Universidad Nacional Abierta y a Distancia (UNAD)',
      badge: 'Educación',
    },
    {
      title: 'Advanced Playwright',
      issuer: 'Test Automation University',
      badge: 'Especialización',
    },
    {
      title: 'Desarrollo de Aplicaciones con IA usando LangChain y Fundamentos de Docker (2025)',
      issuer: 'Platzi',
      badge: '2025',
    },
  ],
};

const languagesByLocale: Record<Locale, LanguageItem[]> = {
  en: [
    { name: 'English', level: 'Professional Working Proficiency · EF SET Certified' },
    { name: 'Spanish', level: 'Native' },
  ],
  es: [
    { name: 'Inglés', level: 'Nivel Profesional · Certificado EF SET' },
    { name: 'Español', level: 'Nativo' },
  ],
};

export function getSkillGroups(locale: Locale = 'en'): SkillGroup[] {
  return skillGroupsByLocale[locale];
}

export function getCredentials(locale: Locale = 'en'): Credential[] {
  return credentialsByLocale[locale];
}

export function getLanguages(locale: Locale = 'en'): LanguageItem[] {
  return languagesByLocale[locale];
}

export const skillGroups = skillGroupsByLocale.en;
export const credentials = credentialsByLocale.en;
export const languages = languagesByLocale.en;
