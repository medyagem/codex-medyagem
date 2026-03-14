const cards = ['Pages', 'Services', 'Blog', 'Regions', 'Projects', 'Settings'];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
      <p className="text-slate-300">Son aktiviteler ve özet istatistikler alanı.</p>
      <div className="grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card} className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
            <h2 className="font-semibold text-indigo-200">{card}</h2>
            <p className="text-sm text-slate-400">CRUD yönetim ekranı hazır.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
