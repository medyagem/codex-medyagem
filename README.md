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

## Ortam Değişkenleri
SQLite varsayılanı şema içinde doğrudan tanımlıdır (`file:./dev.db`), bu yüzden `npx prisma db push` komutu için zorunlu bir `DATABASE_URL` gerekmez.

Yine de farklı bir veritabanı URL'i kullanmak isterseniz `.env` dosyası ekleyebilirsiniz:

```env
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="securepassword123"
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

## Sorun Giderme
1. **Prisma db push hata veriyor (`DATABASE_URL` bulunamadı):** Güncel şemada varsayılan SQLite URL'i gömülü gelir; tekrar `npx prisma db push` çalıştırın. Özel URL kullanacaksanız `.env` içine `DATABASE_URL` ekleyin.
2. **Prisma Client bulunamadı hatası:** `npx prisma generate` komutunu çalıştırın.
3. **Admin paneline girilemiyor:** `.env` dosyasında `ADMIN_PASSWORD` değerinin tanımlı olduğundan emin olun.
