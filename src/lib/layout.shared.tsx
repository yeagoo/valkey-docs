import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Zap } from 'lucide-react';
import { i18n, localeNames } from '@/lib/i18n';

const i18nMessages: Record<string, Record<string, string>> = {
  zh: {
    search: '搜索文档',
    searchNoResult: '没有找到结果',
    toc: '本页目录',
    tocNoHeadings: '本页没有目录',
    lastUpdate: '最后更新于',
    chooseLanguage: '切换语言',
    nextPage: '下一页',
    previousPage: '上一页',
    chooseTheme: '主题',
    editOnGithub: '在 GitHub 编辑',
  },
  en: {
    search: 'Search docs',
    searchNoResult: 'No results found',
    toc: 'On this page',
    tocNoHeadings: 'No headings on this page',
    lastUpdate: 'Last updated',
    chooseLanguage: 'Language',
    nextPage: 'Next',
    previousPage: 'Previous',
    chooseTheme: 'Theme',
    editOnGithub: 'Edit on GitHub',
  },
  ko: { search: '문서 검색', chooseLanguage: '언어' },
  es: { search: 'Buscar', chooseLanguage: 'Idioma' },
  pt: { search: 'Buscar', chooseLanguage: 'Idioma' },
};

export const i18nUI = {
  provider: (locale: string) => ({
    locale,
    locales: i18n.languages.map((lang) => ({
      name: localeNames[lang],
      locale: lang,
    })),
    translations: i18nMessages[locale] ?? i18nMessages.zh,
  }),
};

const navTitles: Record<string, string> = {
  zh: 'Valkey 中文社区',
  en: 'Valkey Community',
  ko: 'Valkey 커뮤니티',
  es: 'Comunidad Valkey',
  pt: 'Comunidade Valkey',
};

export function baseOptions(locale: string): BaseLayoutProps {
  const isDefault = locale === i18n.defaultLanguage;
  return {
    nav: {
      title: (
        <>
          <Zap className="size-5 text-valkey-purple-500" />
          <span className="font-semibold">{navTitles[locale] ?? navTitles.zh}</span>
        </>
      ),
      url: isDefault ? '/' : `/${locale}`,
    },
    githubUrl: 'https://github.com/valkey-io/valkey',
    links: [
      {
        type: 'main',
        text: locale === 'zh' ? '文档' : 'Docs',
        url: isDefault ? '/docs' : `/${locale}/docs`,
      },
    ],
  };
}
