import Link from 'next/link';

const services = [
  'WordPress Tasarım',
  'SEO Yönetimi',
  'Google Ads Yönetimi',
  'E-Ticaret Yönetimi',
  'Sosyal Medya Reklamları',
  'İçerik Pazarlama',
  'Kurumsal Kimlik',
  'Dönüşüm Optimizasyonu'
];

const projects = ['Sayar Temizlik', 'Lima Mimarlık', 'Pera Lojistik', 'Mavi Marina'];
const process = ['Analiz', 'Strateji', 'Kurulum', 'Optimizasyon', 'Raporlama'];
const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Kocaeli', 'Konya', 'Gaziantep', 'Muğla'];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">MedyaGem Dijital Ajans</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            İşinizi Büyüten <span className="text-indigo-300">Web Sitesi</span> ve Dijital Pazarlama Çözümleri
          </h1>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            SEO, web tasarım ve performans reklamcılığını tek ekipte birleştiriyor; görünürlüğünüzü artırıp ölçülebilir müşteri kazanımı sağlıyoruz.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/iletisim" className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400">
              Ücretsiz Teklif Al
            </Link>
            <Link href="/calismalar/ornek-proje" className="rounded-md border border-slate-700 px-5 py-2.5 text-sm text-slate-200 hover:border-indigo-400">
              Referanslarımız
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#070b1a] p-4">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
            <span>Canlı Performans Özeti</span>
            <span className="text-emerald-300">+37% Organik Trafik</span>
          </div>
          <div className="space-y-3 text-sm">
            {['SEO Visibility', 'Leads', 'CTR', 'CPC'].map((item, idx) => (
              <div key={item} className="flex items-center justify-between rounded-md bg-slate-900/55 px-3 py-2">
                <span className="text-slate-300">{item}</span>
                <span className="font-semibold text-white">{[92, 184, '4.8%', '₺12.4'][idx]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-slate-900 pt-12">
        <h2 className="text-3xl font-semibold text-white">Hizmetlerimiz</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-4 h-10 w-10 rounded-md border border-indigo-400/40 bg-indigo-500/10" />
              <h3 className="text-sm font-semibold text-white">{service}</h3>
              <p className="mt-2 text-xs text-slate-400">Performans ve dönüşüm odaklı uçtan uca yönetim.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-slate-900 pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">MedyaGem Nedir?</h2>
          <p className="mt-3 text-slate-300">Kurumsal markalara uçtan uca dijital büyüme sistemi kuran performans ajansıyız.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-md border border-slate-800 p-4"><p className="text-2xl font-bold text-indigo-300">200+</p><p className="text-xs text-slate-400">Proje</p></div>
            <div className="rounded-md border border-slate-800 p-4"><p className="text-2xl font-bold text-indigo-300">15+</p><p className="text-xs text-slate-400">Uzman</p></div>
            <div className="rounded-md border border-slate-800 p-4"><p className="text-2xl font-bold text-indigo-300">10Y</p><p className="text-xs text-slate-400">Deneyim</p></div>
          </div>
        </div>
        <div className="space-y-3">
          {['Performans odaklı strateji', 'Şeffaf ve canlı raporlama', 'Sektöre özel büyüme planı', 'Hızlı optimizasyon döngüsü'].map((item) => (
            <div key={item} className="rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-200">{item}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900 pt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white">Çalışmalarımız</h2>
          <Link href="/calismalar/ornek-proje" className="text-sm text-indigo-300 hover:text-indigo-200">Tümünü Gör</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project} className="rounded-lg border border-slate-800 bg-slate-950/60 p-5">
              <div className="mb-4 h-36 rounded-md bg-gradient-to-br from-indigo-950 to-slate-900" />
              <h3 className="font-medium text-white">{project}</h3>
              <p className="mt-1 text-sm text-slate-400">SEO + reklam yönetimi ile ölçeklenen büyüme hikayesi.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900 pt-12">
        <h2 className="text-center text-3xl font-semibold text-white">Çalışma Sürecimiz</h2>
        <ol className="mx-auto mt-8 max-w-3xl space-y-4">
          {process.map((step, idx) => (
            <li key={step} className="rounded-md border border-slate-800 bg-slate-900/30 px-4 py-3 text-sm text-slate-200">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/50 text-xs text-indigo-300">{idx + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-slate-900 pt-12">
        <h2 className="text-3xl font-semibold text-white">Blog & İçgörüler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Google’da İlk Sıraya Nasıl Çıkılır?', '2026 SEO Trendleri', 'Ajans Seçiminde 7 Kriter'].map((title) => (
            <article key={title} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-4 h-24 rounded bg-indigo-950/40" />
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs text-slate-400">Devamını oku →</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900 pt-12">
        <h2 className="text-center text-3xl font-semibold text-white">Sıkça Sorulan Sorular</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-3">
          {['SEO ne kadar sürede sonuç verir?', 'Web sitesi kaç günde yayına alınır?', 'Aylık raporlamada neleri görürüm?'].map((q) => (
            <details key={q} className="rounded-md border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <summary className="cursor-pointer list-none font-medium">{q}</summary>
              <p className="pt-3 text-slate-400">Sektöre göre değişmekle birlikte ilk 60-90 gün içinde ölçülebilir iyileşmeler görünür.</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900 pt-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Türkiye Genelinde Dijital Hizmet</h2>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-3 text-sm">
          {cities.map((city) => (
            <div key={city} className="rounded border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-300">{city}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-900 pt-12">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-950/70 p-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Dijitalde Büyümeye Hazır mısınız?</h2>
          <p className="mt-3 text-sm text-slate-300">Markanız için özel strateji ve teklif almak için bize ulaşın.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/iletisim" className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white">Strateji Toplantısı</Link>
            <Link href="/iletisim" className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200">Hemen Ara</Link>
          </div>
          <p className="mt-5 text-xl font-semibold text-white">0538 629 5834</p>
        </div>
      </section>

      <footer className="border-t border-slate-900 pt-10 text-xs text-slate-400">
        <div className="grid gap-8 md:grid-cols-4">
          <div><p className="font-semibold text-white">MedyaGem</p><p className="mt-2">SEO, web tasarım ve reklam yönetimi.</p></div>
          <div><p className="font-semibold text-white">Hizmetler</p><p className="mt-2">SEO Yönetimi</p><p>Google Ads</p></div>
          <div><p className="font-semibold text-white">Kurumsal</p><p className="mt-2">Hakkımızda</p><p>Çalışmalar</p></div>
          <div><p className="font-semibold text-white">İletişim</p><p className="mt-2">info@medyagem.com</p><p>İstanbul, Türkiye</p></div>
        </div>
      </footer>
    </div>
  );
}
