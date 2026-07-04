import translations from './assets/translations.json';

export type Lang = 'DE' | 'EN' | 'ES';

export const t: Record<Lang, Record<string, string>> = translations;
