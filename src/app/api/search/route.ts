import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Orama JS doesn't ship tokenizers for Chinese / Korean out of the box.
// Falling back to 'english' so search works across locales without crashing.
// TODO: swap in @orama/tokenizers/mandarin once we add the dep.
export const { GET } = createFromSource(source, {
  localeMap: {
    zh: 'english',
    en: 'english',
    ko: 'english',
    es: 'spanish',
    pt: 'portuguese',
  },
});
