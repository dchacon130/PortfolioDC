/**
 * ============================================================================
 * SERVICES (EN / ES) — Edit this file to update consulting offerings and
 * deliverables. Written consistently in first-person voice.
 * ============================================================================
 */

import type { Locale } from '../i18n/utils';

export interface ServiceItem {
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  tools: string[];
}

const servicesByLocale: Record<Locale, ServiceItem[]> = {
  en: [
    {
      index: '01',
      title: 'Test Automation Architecture',
      summary:
        'I design and build maintainable end-to-end automation frameworks from scratch tailored to your product architecture—whether web, native mobile, or multi-platform Smart TV / OTT.',
      deliverables: [
        'Scalable Playwright, WebdriverIO, or Appium frameworks using Page Object Model & BDD',
        'Cross-browser regression suites engineered for speed and low flakiness',
        'Multi-device & Smart TV test harnesses (iOS, Android, Tizen, webOS, Roku, Hisense)',
        'Reusable test data automation and environment precondition tooling',
      ],
      tools: ['Playwright', 'WebdriverIO', 'Appium', 'TypeScript', 'Python'],
    },
    {
      index: '02',
      title: 'CI/CD Quality Gates & Reporting',
      summary:
        'Automation only creates value when your team trusts its signal. I integrate test suites directly into your release pipelines with fast feedback loops and executive-ready dashboards.',
      deliverables: [
        'Automated pull-request gates and scheduled nightly regression runs',
        'Rich failure diagnostics via Allure Reports, GitHub Pages, and Slack alerts',
        'Cloud device-lab orchestration with LambdaTest and Firebase distribution',
        'Strict release-window validation playbooks for production deployments',
      ],
      tools: ['Azure DevOps', 'GitHub Actions', 'Allure Reports', 'LambdaTest', 'Docker'],
    },
    {
      index: '03',
      title: 'API, Performance & Exploratory QA',
      summary:
        'Beyond UI checks, I validate backend contracts, data synchronization, network behavior, and real-world edge cases before customers ever encounter them.',
      deliverables: [
        'REST / OpenAPI contract verification and end-to-end integration validation (e.g., CRM & banking sync)',
        'Load and performance testing baselines with K6',
        'Deep network inspection, log forensics, and video streaming telemetry audits (Proxyman / NPAW)',
        'Figma design-parity reviews, usability checks, and structured UAT facilitation',
      ],
      tools: ['Postman', 'Swagger / OpenAPI', 'K6', 'Proxyman', 'NPAW', 'Mailtrap'],
    },
    {
      index: '04',
      title: 'QA Strategy & AI-Accelerated Workflows',
      summary:
        'For teams scaling quality from zero or modernizing legacy processes, I establish pragmatic QA foundations and introduce AI-assisted workflows that accelerate test design without sacrificing rigor.',
      deliverables: [
        'Quality roadmap, risk-based test strategy, and release sign-off criteria from scratch',
        'Tool selection, TestRail / Jira traceability, and defect triage workflows',
        'AI-assisted test authoring standards using Claude Code, Cursor, and GitHub Copilot',
        'Hands-on mentoring and architecture handoff for internal engineering teams',
      ],
      tools: ['ISTQB CT-TAE', 'TestRail', 'Jira', 'Claude Code', 'GitHub Copilot'],
    },
  ],
  es: [
    {
      index: '01',
      title: 'Arquitectura de Automatización de Pruebas',
      summary:
        'Diseño y construyo frameworks de automatización end-to-end mantenibles desde cero adaptados a tu producto—web, mobile nativo o Smart TV / OTT multiplataforma.',
      deliverables: [
        'Frameworks escalables en Playwright, WebdriverIO o Appium con Page Object Model y BDD',
        'Suites de regresión cross-browser optimizadas para velocidad y mínima inestabilidad',
        'Entornos de prueba multidispositivo y Smart TV (iOS, Android, Tizen, webOS, Roku, Hisense)',
        'Automatización de datos de prueba reutilizables y precondiciones de ambiente',
      ],
      tools: ['Playwright', 'WebdriverIO', 'Appium', 'TypeScript', 'Python'],
    },
    {
      index: '02',
      title: 'Quality Gates en CI/CD y Reportes',
      summary:
        'La automatización solo genera valor cuando el equipo confía en su señal. Integro las suites directamente en tus pipelines con feedback rápido y reportes claros.',
      deliverables: [
        'Quality gates automáticos en Pull Requests y regresiones nocturnas programadas',
        'Diagnóstico detallado de fallos con Allure Reports, GitHub Pages y alertas en Slack',
        'Orquestación en laboratorios en la nube con LambdaTest y distribución en Firebase',
        'Playbooks de validación rápida para ventanas estrictas de despliegue en producción',
      ],
      tools: ['Azure DevOps', 'GitHub Actions', 'Allure Reports', 'LambdaTest', 'Docker'],
    },
    {
      index: '03',
      title: 'QA de APIs, Rendimiento y Exploratorio',
      summary:
        'Más allá de la interfaz, valido contratos de backend, sincronización de datos, tráfico de red y casos borde reales antes de que lleguen a producción.',
      deliverables: [
        'Verificación de contratos REST / OpenAPI e integridad entre sistemas (CRM y banca)',
        'Pruebas de carga y líneas base de rendimiento con K6',
        'Inspección profunda de red, análisis de logs y auditoría de telemetría de video (Proxyman / NPAW)',
        'Revisiones UI/UX contra Figma, usabilidad y facilitación estructurada de UAT',
      ],
      tools: ['Postman', 'Swagger / OpenAPI', 'K6', 'Proxyman', 'NPAW', 'Mailtrap'],
    },
    {
      index: '04',
      title: 'Estrategia QA y Flujos Acelerados con IA',
      summary:
        'Para equipos que construyen calidad desde cero o modernizan procesos heredados, establezco bases pragmáticas de QA e incorporo flujos asistidos por IA sin sacrificar rigor técnico.',
      deliverables: [
        'Hoja de ruta de calidad, estrategia basada en riesgo y criterios de liberación desde cero',
        'Selección de herramientas, trazabilidad en TestRail / Jira y triaje de defectos',
        'Estándares de diseño de pruebas asistido por IA con Claude Code, Cursor y GitHub Copilot',
        'Mentoría práctica y transferencia de arquitectura al equipo interno de ingeniería',
      ],
      tools: ['ISTQB CT-TAE', 'TestRail', 'Jira', 'Claude Code', 'GitHub Copilot'],
    },
  ],
};

export function getServices(locale: Locale = 'en'): ServiceItem[] {
  return servicesByLocale[locale];
}

export const services = servicesByLocale.en;
