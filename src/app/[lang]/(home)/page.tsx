import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Cloud,
  GitBranch,
  Sparkles,
  Database,
  BookOpen,
  Layers,
  Search,
  Wrench,
  Server,
  Zap,
} from 'lucide-react';

const t = {
  zh: {
    badge: '社区驱动 · 中文优先 · BSD 开源 · 永远是最新版本',
    title: 'Valkey，重新讲一遍。',
    subtitle:
      '为 AI 时代、Vibe Coding 开发者和云上用户打造的现代 Valkey 知识库。从 Redis 平滑迁移、向量检索与 Agent 记忆、各云厂商托管对照，一站讲清这个由 Linux 基金会托管的高性能键值存储。',
    ctaPrimary: '开始阅读',
    ctaSecondary: '给 AI 开发者看',
    cards: [
      {
        icon: 'sparkles',
        title: '5 分钟跑起来',
        desc: 'Docker / 包管理器 / 一键云实例，新手最短上手路径。',
        href: '/docs/quickstart',
      },
      {
        icon: 'branch',
        title: 'Redis 还是 Valkey？',
        desc: '许可证分叉始末、多线程对比、Redis 8 AGPL 反扑，一文看懂。',
        href: '/docs/migration/redis-vs-valkey',
      },
      {
        icon: 'bot',
        title: 'AI / Agent 时代',
        desc: 'valkey-search 向量检索、LLM 语义缓存、Agent 记忆、MCP Server。',
        href: '/docs/ai/vector-search',
      },
      {
        icon: 'cloud',
        title: '云上托管对照',
        desc: 'AWS ElastiCache/MemoryDB、GCP Memorystore、Aiven 实测与选型。',
        href: '/docs/cloud/selection',
      },
      {
        icon: 'history',
        title: '从 Redis 迁过来',
        desc: 'RDB/AOF 直接换、复制级在线迁移、客户端零改动 checklist。',
        href: '/docs/migration/from-redis',
      },
      {
        icon: 'server',
        title: '运维全家桶',
        desc: '安装配置、持久化、复制与哨兵、集群、ACL/TLS、监控告警。',
        href: '/docs/operations',
      },
      {
        icon: 'layers',
        title: '原理深入',
        desc: '8.0 异步多线程、per-slot 字典、双通道复制、内存优化。',
        href: '/docs/internals/threading',
      },
      {
        icon: 'book',
        title: '数据结构 5 分钟系列',
        desc: 'String / Hash / List / Set / ZSet / Stream / 过期 / 脚本。',
        href: '/docs/newbie/strings',
      },
    ],
  },
  en: {
    badge: 'Community-driven · BSD-licensed · Always up to date',
    title: 'Valkey, retold for 2026.',
    subtitle:
      'A modern Valkey knowledge base for the AI era, vibe-coding developers and cloud users. Smooth migration from Redis, vector search and agent memory, managed-cloud matrices — everything about the Linux Foundation high-performance key-value store.',
    ctaPrimary: 'Read the docs',
    ctaSecondary: 'For AI developers',
    cards: [
      {
        icon: 'sparkles',
        title: 'Up in 5 minutes',
        desc: 'Docker / package managers / one-click cloud — the shortest path to a running Valkey.',
        href: '/en/docs/quickstart',
      },
      {
        icon: 'branch',
        title: 'Redis or Valkey?',
        desc: 'The license fork, threading, the Redis 8 AGPL counter-move — explained.',
        href: '/en/docs/versions',
      },
      {
        icon: 'bot',
        title: 'For AI / Vibe Coding',
        desc: 'valkey-search vectors, semantic caching, agent memory, MCP servers.',
        href: '/en/docs/for-ai-devs',
      },
      {
        icon: 'cloud',
        title: 'Valkey on the cloud',
        desc: 'AWS ElastiCache & MemoryDB, GCP Memorystore, Aiven, Oracle, DigitalOcean.',
        href: '/en/docs/on-cloud',
      },
    ],
  },
  ko: {
    badge: '커뮤니티 · 한국어 (준비 중)',
    title: 'Valkey, 다시 쓰는 문서.',
    subtitle: '한국어 번역은 곧 추가됩니다. 영어 문서로 먼저 시작해 보세요.',
    ctaPrimary: '문서 열기',
    ctaSecondary: 'AI 개발자용',
    cards: [],
  },
  es: {
    badge: 'Comunidad · Español (en preparación)',
    title: 'Valkey, contado de nuevo.',
    subtitle: 'La traducción al español llegará pronto. Mientras tanto, lee la documentación en inglés.',
    ctaPrimary: 'Ir a los docs',
    ctaSecondary: 'Para desarrolladores de IA',
    cards: [],
  },
  pt: {
    badge: 'Comunidade · Português (em preparação)',
    title: 'Valkey, recontado.',
    subtitle: 'A tradução em português chega em breve. Por enquanto, leia a documentação em inglês.',
    ctaPrimary: 'Abrir docs',
    ctaSecondary: 'Para desenvolvedores de IA',
    cards: [],
  },
} as const;

const icons = {
  sparkles: Sparkles,
  bot: Bot,
  cloud: Cloud,
  branch: GitBranch,
  database: Database,
  book: BookOpen,
  layers: Layers,
  search: Search,
  wrench: Wrench,
  server: Server,
  history: GitBranch,
  zap: Zap,
} as const;

type Lang = keyof typeof t;

const metaTitle: Record<string, string> = {
  zh: 'Valkey 中文社区 — 给 AI 时代的现代键值存储文档',
  en: 'Valkey Community — modern docs for the AI era',
  ko: 'Valkey 커뮤니티 — 현대적 문서',
  es: 'Comunidad Valkey — documentación moderna',
  pt: 'Comunidade Valkey — documentação moderna',
};

const metaDesc: Record<string, string> = {
  zh: '一份面向新手、AI 开发者与云上用户的现代 Valkey 知识库。涵盖从 Redis 迁移、向量检索、Agent 记忆、各云厂商托管与版本路线图。',
  en: 'A modern Valkey knowledge base for beginners, AI developers and cloud users. Migration from Redis, vector search, agent memory, managed cloud and the release roadmap.',
  ko: 'Valkey 문서 (한국어, 준비 중)',
  es: 'Documentación Valkey en español (en preparación)',
  pt: 'Documentação Valkey em português (em preparação)',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const key = (['zh', 'en', 'ko', 'es', 'pt'] as const).includes(lang as Lang) ? (lang as Lang) : 'zh';
  return {
    title: metaTitle[key],
    description: metaDesc[key],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const key = (['zh', 'en', 'ko', 'es', 'pt'] as const).includes(lang as Lang) ? (lang as Lang) : 'zh';
  const copy = t[key];
  const prefix = key === 'zh' ? '' : `/${key}`;

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden border-b border-fd-border bg-gradient-to-b from-valkey-lilac via-white to-white dark:from-valkey-plum-900 dark:via-fd-background dark:to-fd-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--color-valkey-purple-100),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_var(--color-valkey-plum-600),_transparent_60%)]"
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-valkey-purple-200 bg-valkey-purple-50 px-4 py-1 text-sm font-medium text-valkey-purple-700 dark:border-valkey-purple-800 dark:bg-valkey-purple-900/30 dark:text-valkey-purple-200">
            <Sparkles className="size-4" />
            {copy.badge}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-valkey-plum-600 dark:text-white sm:text-6xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg text-fd-muted-foreground">{copy.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`${prefix}/docs`}
              className="inline-flex items-center gap-2 rounded-full bg-valkey-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-valkey-purple-600"
            >
              {copy.ctaPrimary}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`${prefix}/docs/for-ai-devs`}
              className="inline-flex items-center gap-2 rounded-full border border-valkey-purple-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-valkey-purple-700 backdrop-blur transition hover:bg-white dark:border-valkey-purple-700 dark:bg-valkey-plum-800/30 dark:text-valkey-purple-100 dark:hover:bg-valkey-plum-800/60"
            >
              <Bot className="size-4" />
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {copy.cards.length > 0 && (
        <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card) => {
            const Icon = icons[card.icon as keyof typeof icons] ?? BookOpen;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card p-6 transition hover:-translate-y-0.5 hover:border-valkey-purple-300 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-valkey-purple-50 text-valkey-purple-600 transition group-hover:bg-valkey-purple-500 group-hover:text-white dark:bg-valkey-plum-800 dark:text-valkey-purple-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-fd-foreground">{card.title}</h3>
                <p className="text-sm text-fd-muted-foreground">{card.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-valkey-purple-600 dark:text-valkey-purple-300">
                  →
                </span>
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
}
