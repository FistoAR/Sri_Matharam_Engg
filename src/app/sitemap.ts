import { MetadataRoute } from 'next';
import { PRODUCTS, COMPANY_INFO } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.url;

  const staticRoutes = ['', '/about', '/products', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
