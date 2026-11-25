/**
 * ============================================================================
 * PROFESSIONAL EXPERIENCE — Edit this file to add/update roles, dates,
 * client engagements, and bullet points. Mirrors your latest SDET CV.
 * ============================================================================
 */

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

export const experience: ExperienceItem[] = [
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
];

export const earlyCareer: EarlyRole[] = [
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
];
