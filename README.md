# Alfred J. Lin — Portfolio

Personal portfolio site for Alfred J. Lin, Product Designer with 5+ years across hardware-adjacent software, e-commerce, and information systems.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **MDX** for project write-ups. Deployed on Vercel.

## Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX via `next-mdx-remote`
- **Analytics**: Vercel Analytics + Speed Insights
- **Package manager**: pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Requires Node.js >= 24.

## Structure

```
app/
  page.tsx          # Home / project listing
  about/            # About page
  project/          # Project case studies (MDX)
  article/          # Blog articles (MDX)
  components/       # Shared UI components
public/             # Static assets
```
