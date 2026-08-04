import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${COMPANY_INFO.url}/sitemap.xml`,
  };
}
