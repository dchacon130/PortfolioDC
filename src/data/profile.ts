/**
 * ============================================================================
 * PROFILE & SITE CONFIGURATION (EN / ES) — Edit this file to update personal
 * details, contact links, availability status, CV path, or hero metrics.
 * ============================================================================
 */

import type { Locale } from '../i18n/utils';
import { getLocalizedPath } from '../i18n/utils';
import { getUiCopy } from '../i18n/ui';

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

export interface LocalizedProfile {
  name: string;
  fullName: string;
  monogram: string;
  role: string;
  focusLine: string;
  location: string;
  workMode: string;
  availability: {
    active: boolean;
    label: string;
  };
  email: string;
  phone: string;
  cvPath: string;
  cvDownloadName: string;
  contactFormEndpoint: string;
  hero: {
    eyebrow: string;
    headline: string;
    summary: string;
  };
  aboutSummary: string[];
  metrics: ProofMetric[];
  socials: SocialLink[];
  navigation: NavItem[];
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
    ogImage: string;
  };
}

const shared = {
  name: 'Diego Chacón',
  fullName: 'Diego Alexander Chacón González',
  monogram: 'DC',
  focusLine: 'Playwright · TypeScript · API · Mobile & OTT',
  location: 'Bogotá, Colombia',
  email: 'dchacon130@gmail.com',
  phone: '+57 310 482 3098',
  cvPath: '/assets/cv/Diego-Chacon-SDET-CV.pdf',
  cvDownloadName: 'Diego-Chacon-Senior-SDET-CV.pdf',

  /**
   * Contact Form Endpoint (Formspree).
   * Change this URL to switch providers, or set to '' to fall back to mailto:.
   */
  contactFormEndpoint: 'https://formspree.io/f/xdkenlqw',

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

  siteUrl: 'https://portfolio-dc.vercel.app',
  ogImage: '/assets/brand/og-banner.png',
};

function buildNav(locale: Locale): NavItem[] {
  const ui = getUiCopy(locale);
  return [
    { label: ui.nav.home, href: getLocalizedPath('/', locale) },
    { label: ui.nav.work, href: getLocalizedPath('/portfolio', locale) },
    { label: ui.nav.about, href: getLocalizedPath('/about', locale) },
    { label: ui.nav.services, href: getLocalizedPath('/services', locale) },
    { label: ui.nav.contact, href: getLocalizedPath('/contact', locale) },
  ];
}

const localizedProfiles: Record<Locale, LocalizedProfile> = {
  en: {
    ...shared,
    role: 'Senior QA Automation Engineer / SDET',
    workMode: 'Remote · US Business Hours',
    availability: {
      active: true,
      label: 'Available for Senior SDET roles & QA advisory',
    },
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
    ],
    navigation: buildNav('en'),
    seo: {
      defaultTitle: 'Diego Chacón — Senior QA Automation Engineer / SDET',
      defaultDescription:
        'Senior SDET with 10+ years in QA and 4+ years building Playwright, WebdriverIO, Appium & TypeScript automation frameworks for web, mobile, API, and OTT platforms.',
      siteUrl: shared.siteUrl,
      ogImage: shared.ogImage,
    },
  },
  es: {
    ...shared,
    role: 'Senior QA Automation Engineer / SDET',
    workMode: 'Remoto · Horario Laboral EE. UU.',
    availability: {
      active: true,
      label: 'Disponible para roles Senior SDET y consultoría QA',
    },
    hero: {
      eyebrow: 'Senior SDET · 10+ Años en Calidad de Software',
      headline: 'Diseño automatización de pruebas confiable para web, mobile, API y plataformas OTT.',
      summary:
        'Ingeniero certificado ISTQB CT-TAE, especializado en construir frameworks de automatización desde cero con Playwright, WebdriverIO, Appium y TypeScript—integrados a quality gates CI/CD en banca, fintech, e-commerce y streaming.',
    },
    aboutSummary: [
      'Soy Senior SDET con más de 10 años en calidad de software y más de 4 años arquitectando frameworks de automatización end-to-end desde cero para ecosistemas web, mobile, API y Smart TV / OTT.',
      'Mi enfoque convierte el QA en una ventaja de ingeniería rápida y medible—combinando Playwright, WebdriverIO, Appium y TypeScript con quality gates confiables en Azure DevOps y GitHub Actions, reportes claros y diseño de pruebas asistido por IA con Claude Code, Cursor y GitHub Copilot.',
      'He colaborado en remoto con equipos de ingeniería en Estados Unidos, Europa y Latinoamérica en industrias exigentes como banca estadounidense, agri-fintech con IA, retail e-commerce, sistemas POS de hotelería y video streaming multiplataforma.',
    ],
    metrics: [
      {
        value: '10+',
        label: 'Años en QA',
        detail: 'Banca, fintech, retail y OTT',
      },
      {
        value: '305×3',
        label: 'Suite cross-browser',
        detail: 'Chrome, Edge y Safari en 34 min',
      },
      {
        value: '7',
        label: 'Plataformas OTT y cliente',
        detail: 'Web, iOS, Android, Tizen, webOS, Hisense, Roku',
      },
      {
        value: 'CT-TAE',
        label: 'ISTQB Avanzado',
        detail: 'Test Automation Engineer Certificado',
      },
    ],
    navigation: buildNav('es'),
    seo: {
      defaultTitle: 'Diego Chacón — Senior QA Automation Engineer / SDET',
      defaultDescription:
        'Senior SDET con más de 10 años en QA y 4+ construyendo frameworks con Playwright, WebdriverIO, Appium y TypeScript para web, mobile, API y OTT.',
      siteUrl: shared.siteUrl,
      ogImage: shared.ogImage,
    },
  },
};

export function getProfile(locale: Locale = 'en'): LocalizedProfile {
  return localizedProfiles[locale];
}

// Default English export kept for convenience
export const profile = localizedProfiles.en;
