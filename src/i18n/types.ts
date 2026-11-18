export type Locale = 'en' | 'es';

/** v2: default español; ignores legacy `portfolio-lang` that often stored `en`. */
export const LOCALE_STORAGE_KEY = 'portfolio-lang-v2';

export const DEFAULT_LOCALE: Locale = 'es';