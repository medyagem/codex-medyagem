# MedyaGem Dijital Ajans - Teknik Proje Spesifikasyonu

Bu döküman, MedyaGem web sitesinin teknik mimarisini, veri modellerini, sayfa yapılarını ve tasarım sistemini özetler.

## Teknoloji
- Next.js 14 (App Router), React 18, Tailwind CSS
- Prisma ORM + SQLite (geliştirme ortamı)
- GSAP ve Lenis (animasyon/smooth scroll için)

## Veri Modelleri
- Page, Service, ServiceCategory
- BlogPost, BlogCategory
- Region, Project
- SeoMeta, SchemaConfig, SiteSetting

## Rotalar
- Website: `/`, `/hakkimizda`, `/hizmetler/[slug]`, `/bolgeler/[slug]`, `/calismalar/[slug]`, `/blog`, `/blog/[slug]`, `/iletisim`, `/sss`
- Admin: `/admin`, `/admin/pages`, `/admin/services`, `/admin/blog`, `/admin/regions`, `/admin/projects`, `/admin/settings`
