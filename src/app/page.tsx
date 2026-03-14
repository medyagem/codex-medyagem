import { SectionCard } from '@/components/section-card';

const sections = [
  ['Hero', 'SEO odaklı büyüme stratejileri ile markanızı dijitalde öne taşıyoruz.'],
  ['Hizmetler', 'SEO, Web Tasarım ve Google Ads hizmetleri tek çatı altında.'],
  ['Hakkımızda', 'Veri odaklı çalışan, dönüşüm getiren kampanyalara odaklanan ekip.'],
  ['Süreç', 'Analiz, strateji, üretim ve optimizasyon adımlarıyla şeffaf iş akışı.'],
  ['Blog', 'Organik trafik artıran teknik ve içerik odaklı rehberler.'],
  ['FAQ', 'En sık sorulan sorular için hızlı cevaplar.']
] as const;

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">MedyaGem CMS Integration</h1>
      <p className="text-slate-300">Tüm ana sayfa sectionları ve detay sayfaları CMS üzerinden yönetilebilir olacak şekilde hazırlandı.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(([title, content]) => (
          <SectionCard key={title} title={title}>
            <p>{content}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
