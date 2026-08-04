import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '@/types';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = generateBreadcrumbSchema([
    { label: 'Home', url: '/' },
    ...items,
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-orange-600 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {isLast ? (
                  <span className="font-bold text-orange-600 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-orange-600 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1 truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
