# valkey.edu.rich

A modern, multilingual **Valkey** knowledge base built with [Fumadocs](https://fumadocs.dev) on Next.js 16, modeled on the sibling `mariadb` project.

- **Primary language:** Chinese (`/`) — purple/violet brand theme
- **Secondary:** English (`/en`), with Korean / Spanish / Portuguese placeholders
- **Stats:** ~55 中文文章 · 225 个静态页面 · 涵盖从 Redis 迁移 / 向量与 AI / 各云厂商托管 / 运维原理

## Content map

| 区 | 内容 |
|---|---|
| 入门 | quickstart · for-beginners · 数据结构 5 分钟系列 (string/hash/list/set/zset/stream/pubsub/ttl/script) |
| AI/Agent | valkey-search · 语义缓存 · Agent 记忆 · RAG · MCP Server · Bloom & JSON · 框架集成 |
| 云上 | AWS ElastiCache/MemoryDB · GCP Memorystore · Aiven 等 · 中国云 · 选型与成本 |
| 迁移 | Redis vs Valkey · 从 Redis 迁过来 · Redis Stack 模块怎么办 |
| 运维 | 总览 · 复制与高可用 · 集群 · 安全 · 监控 |
| 原理 | 多线程 · 内存 · 持久化内部 · 集群内部 |
| 参考 | 速查 · 错误码 · 版本与路线图 |
| 故事 | 分叉的故事 · 治理 · 前沿 |

## Local dev

```bash
pnpm install
pnpm dev

# 后台跑（推荐）：
PORT=45634 setsid nohup pnpm dev > /tmp/valkey-dev.log 2>&1 < /dev/null & disown
# 访问 http://localhost:45634

# 停掉：
pkill -9 -f "next-server.*valkey"
```

## Build & verify

```bash
pnpm typecheck
pnpm build
```

## Deploy

```bash
pnpm preview          # workerd 本地验证
pnpm deploy           # opennextjs-cloudflare build && deploy
```

## Project layout

```
src/
  app/
    global.css                 Tailwind v4 + Valkey 紫色品牌色 tokens
    sitemap.ts / robots.ts     5 语言 × 所有页
    [lang]/                    locale 路由
    api/search/route.ts        Orama i18n search
  lib/i18n.ts                  zh(default) · en · ko · es · pt
  lib/source.ts                fumadocs loader
  lib/layout.shared.tsx
  middleware.ts                locale rewrite (Edge runtime)
content/docs/zh|en|ko|es|pt/
wrangler.jsonc                 Cloudflare Workers (OpenNext)
open-next.config.ts
```

## Color tokens

`global.css` defines a 9-shade `valkey-purple-*` (centered on `#7C3AED`), `valkey-plum-*` (dark surfaces), `valkey-fuchsia` accent, and `valkey-lilac` light tint. Both light and dark themes map `--color-fd-primary` to the purple scale.

## Contributing

PRs welcome — 翻译（ko / es / pt → 正文）、英文同步、纠错、新主题（特别欢迎你踩过的 Redis→Valkey 迁移坑）。
