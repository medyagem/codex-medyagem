export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <div className="prose prose-invert max-w-none"><h1>Proje: {params.slug}</h1><p>Portfolyo vaka çalışması detayı ve sonuç metrikleri.</p></div>;
}
