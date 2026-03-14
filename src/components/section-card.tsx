import { ReactNode } from 'react';

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 shadow-lg shadow-indigo-500/5">
      <h2 className="mb-3 text-xl font-semibold text-indigo-200">{title}</h2>
      <div className="text-slate-300">{children}</div>
    </section>
  );
}
