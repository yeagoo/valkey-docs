import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'zh',
  languages: ['zh', 'en', 'ko', 'es', 'pt'],
  hideLocale: 'default-locale',
  parser: 'dir',
  fallbackLanguage: 'zh',
});

export const localeNames: Record<string, string> = {
  zh: '中文',
  en: 'English',
  ko: '한국어',
  es: 'Español',
  pt: 'Português',
};
