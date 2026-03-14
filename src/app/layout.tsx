import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MedyaGem | SEO, Web Tasarım ve Performans Ajansı',
  description: 'MedyaGem ile SEO, web tasarım ve Google Ads tarafında ölçülebilir büyüme elde edin.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[#03050e] text-slate-100`}>
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12">{children}</main>
      </body>
    </html>
  );
}
