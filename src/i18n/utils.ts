/**
 * ============================================================================
 * I18N HELPERS — Shared locale utilities for EN (default) and ES (/es/*).
 * ============================================================================
 */

export type Locale = 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'es'] as const;

/**
 * Normalizes a pathname by stripping trailing slashes (keeping '/' for root).
 */
export function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

/**
 * Removes any leading '/es' locale prefix to get the canonical route path.
 */
export function stripLocalePrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (normalized === '/es') return '/';
  if (normalized.startsWith('/es/')) {
    return normalized.slice(3) || '/';
  }
  return normalized;
}

/**
 * Builds a localized path for a canonical route (e.g. '/portfolio' -> '/es/portfolio').
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  const canonical = stripLocalePrefix(path);
  if (locale === DEFAULT_LOCALE) return canonical;
  return canonical === '/' ? '/es' : `/es${canonical}`;
}

/**
 * Computes the equivalent route in the target locale for the language switcher.
 */
export function getAlternatePath(currentPathname: string, targetLocale: Locale): string {
  return getLocalizedPath(currentPathname, targetLocale);
}
