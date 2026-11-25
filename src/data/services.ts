/**
 * ============================================================================
 * SERVICES — Edit this file to update consulting offerings and deliverables.
 * Written consistently in first-person voice.
 * ============================================================================
 */

export interface ServiceItem {
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  tools: string[];
}

export const services: ServiceItem[] = [
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
];
