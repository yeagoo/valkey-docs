import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';

const BASE = 'https://valkey.edu.rich';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // home pages per locale
  for (const lang of i18n.languages) {
    const path = lang === i18n.defaultLanguage ? '/' : `/${lang}`;
    entries.push({ url: `${BASE}${path}`, changeFrequency: 'weekly', priority: 1 });
  }

  // doc pages per locale
  for (const page of source.getPages()) {
    entries.push({
      url: `${BASE}${page.url}`,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  return entries;
}
