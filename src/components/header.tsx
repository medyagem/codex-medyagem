import Link from 'next/link';

const links = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Kurumsal' },
  { href: '/hizmetler/seo', label: 'Hizmetler' },
  { href: '/calismalar/ornek-proje', label: 'Çalışmalar' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-900/40 bg-[#050712]/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-bold tracking-widest text-white">
          MEDYAGEM
        </Link>

        <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/iletisim"
          className="rounded-md border border-indigo-500/40 bg-indigo-500/20 px-3 py-2 text-xs font-medium text-indigo-100 transition hover:bg-indigo-500/35"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}
