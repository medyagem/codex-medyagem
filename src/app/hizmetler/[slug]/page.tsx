export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <div className="prose prose-invert max-w-none"><h1>Hizmet: {params.slug}</h1><p>Hizmet landing page içeriği, SEO metaları ve dönüşüm bölümleri.</p></div>;
}
