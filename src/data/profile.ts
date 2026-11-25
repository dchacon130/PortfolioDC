/**
 * ============================================================================
 * PROFILE & SITE CONFIGURATION — Edit this file to update personal details,
 * contact links, availability status, CV path, navigation, or hero metrics.
 * ============================================================================
 */

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const profile = {
  name: 'Diego Chacón',
  fullName: 'Diego Alexander Chacón González',
  monogram: 'DC',
  role: 'Senior QA Automation Engineer / SDET',
  focusLine: 'Playwright · TypeScript · API · Mobile & OTT',
  location: 'Bogotá, Colombia',
  workMode: 'Remote · US Business Hours',
  availability: {
    active: true,
    label: 'Available for Senior SDET roles & QA advisory',
  },
  email: 'dchacon130@gmail.com',
  phone: '+57 310 482 3098',
  cvPath: '/assets/cv/Diego-Chacon-SDET-CV.pdf',
  cvDownloadName: 'Diego-Chacon-Senior-SDET-CV.pdf',

  /**
   * Optional Contact Form Endpoint (e.g. Web3Forms or Formspree).
   * Leave empty '' to gracefully open the user's email client with pre-filled subject/body,
   * or paste your Formspree URL (https://formspree.io/f/xxxxxxx) / Web3Forms endpoint.
   */
  contactFormEndpoint: 'https://formspree.io/f/xdkenlqw',

  hero: {
    eyebrow: 'Senior SDET · 10+ Years in Software Quality',
    headline: 'I architect reliable test automation for web, mobile, API & OTT platforms.',
    summary:
      'ISTQB CT-TAE certified engineer specializing in building automation frameworks from scratch with Playwright, WebdriverIO, Appium, and TypeScript—wired into CI/CD quality gates across banking, fintech, e-commerce, and streaming.',
  },

  aboutSummary: [
    'I am a Senior SDET with over 10 years in software quality and 4+ years architecting end-to-end test automation frameworks from scratch across web, mobile, API, and OTT Smart TV ecosystems.',
    'My work focuses on turning QA into a fast, measurable engineering advantage—combining Playwright, WebdriverIO, Appium, and TypeScript with reliable CI/CD quality gates in Azure DevOps and GitHub Actions, clear reporting, and AI-assisted test design using Claude Code, Cursor, and GitHub Copilot.',
    'I have partnered remotely with engineering teams across the US, Europe, and Latin America in high-stakes domains including US banking, AI agri-fintech, retail e-commerce, hospitality POS, and multi-platform video streaming.',
  ],

  metrics: [
    {
      value: '10+',
      label: 'Years in QA',
      detail: 'Banking, fintech, retail & OTT',
    },
    {
      value: '305×3',
      label: 'Cross-browser suite',
      detail: 'Chrome, Edge & Safari in 34 min',
    },
    {
      value: '7',
      label: 'OTT & client platforms',
      detail: 'Web, iOS, Android, Tizen, webOS, Hisense, Roku',
    },
    {
      value: 'CT-TAE',
      label: 'ISTQB Advanced',
      detail: 'Certified Test Automation Engineer',
    },
  ] satisfies ProofMetric[],

  socials: [
    {
      label: 'GitHub',
      handle: 'github.com/dchacon130',
      href: 'https://github.com/dchacon130',
    },
    {
      label: 'LinkedIn',
      handle: 'linkedin.com/in/dchacon130',
      href: 'https://www.linkedin.com/in/dchacon130/',
    },
    {
      label: 'X / Twitter',
      handle: '@DiegoChacon20',
      href: 'https://twitter.com/DiegoChacon20',
    },
    {
      label: 'Instagram',
      handle: '@dchacon130',
      href: 'https://www.instagram.com/dchacon130',
    },
  ] satisfies SocialLink[],

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],

  seo: {
    defaultTitle: 'Diego Chacón — Senior QA Automation Engineer / SDET',
    defaultDescription:
      'Senior SDET with 10+ years in QA and 4+ years building Playwright, WebdriverIO, Appium & TypeScript automation frameworks for web, mobile, API, and OTT platforms.',
    siteUrl: 'https://portfolio-dc.vercel.app',
    ogImage: '/assets/brand/og-banner.png',
  },
} as const;
