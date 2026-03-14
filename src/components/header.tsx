import Link from 'next/link';
import { navLinks } from '@/lib/site';

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-night/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-indigo-300">
          MedyaGem
        </Link>
        <nav className="flex gap-4 text-sm text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
