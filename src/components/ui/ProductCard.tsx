import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.category} by Sri Mathurams Medical Engineering`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 left-4 bg-navy-900 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {product.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-orange-600 transition-colors">
            <Link href={`/products/${product.slug}`} className="focus:outline-none focus:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-slate-700 text-sm mt-2 font-medium line-clamp-2">
            {product.description}
          </p>

          <ul className="mt-4 space-y-1.5 border-t border-slate-200 pt-4">
            {product.specifications.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex justify-between text-xs">
                <span className="text-slate-600 font-medium">{spec.label}:</span>
                <span className="text-navy-950 font-bold">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="inline-flex items-center text-xs text-navy-900 font-bold gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> ISO Certified
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-sm font-bold text-orange-600 group-hover:text-orange-500 gap-1 hover:underline"
          >
            View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
