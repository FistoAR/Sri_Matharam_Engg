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
      <nav aria-label="Breadcrumb" className="py-[1vh]">
        <ol className="flex items-center space-x-[0.2vw] text-[0.8vw] text-slate-600 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center gap-[0.3vw] hover:text-orange-600 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded-[0.3vw] px-[0.4vw]"
            >
              <Home className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-[0.2vw]">
                <ChevronRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-slate-400 flex-shrink-0" />
                {isLast ? (
                  <span className="font-bold text-slate-800 truncate max-w-[15vw]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-orange-600 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded-[0.3vw] px-[0.4vw] truncate max-w-[10vw]"
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
