/**
 * ============================================================================
 * TECHNICAL SKILLS, CERTIFICATIONS & EDUCATION — Edit this file to add new
 * tools, certifications, or languages.
 * ============================================================================
 */

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

export const skillGroups: SkillGroup[] = [
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
];

export const credentials: Credential[] = [
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
];

export const languages: LanguageItem[] = [
  { name: 'English', level: 'Professional Working Proficiency · EF SET Certified' },
  { name: 'Spanish', level: 'Native' },
];
