export default function RegionDetailPage({ params }: { params: { slug: string } }) {
  return <div className="prose prose-invert max-w-none"><h1>Bölge: {params.slug}</h1><p>İl/ilçe bazlı bölgesel SEO sayfa şablonu.</p></div>;
}
