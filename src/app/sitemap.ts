import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/hakkimizda', '/blog', '/iletisim', '/sss'];
  return routes.map((route) => ({
    url: `https://www.medyagem.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7
  }));
}
