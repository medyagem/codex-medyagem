# MedyaGem CMS Integration

> Projenin teknik özetini [TECHNICAL_PROMPT.md](./TECHNICAL_PROMPT.md) dosyasında bulabilirsiniz.

## Proje Sözleşmesi
- Mevcut Next.js sitesindeki section/list/detail alanlarını yönetilebilir CMS yapısına bağlamak
- Fullstack CMS mimarisi

## Teknoloji
- Next.js App Router
- TypeScript + Tailwind CSS
- Prisma ORM + SQLite

## Kurulum
```bash
npm install
npx prisma generate
npx prisma db push
```

## Çalıştırma
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Test
```bash
npm run test
```

## Dosya Yapısı
- `src/app`: route ve layout dosyaları
- `src/components`: tekrar kullanılabilir UI bileşenleri
- `src/lib`: yardımcılar ve Prisma client
- `prisma/schema.prisma`: veri modelleri
