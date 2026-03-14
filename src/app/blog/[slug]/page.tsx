export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return <div className="prose prose-invert max-w-none"><h1>Blog Detay: {params.slug}</h1><p>İçerik, FAQ ve Article JSON-LD bu şablon üzerinden gelir.</p></div>;
}
