import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { FadeIn } from '@/components/ui/FadeIn';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <FadeIn direction="up" delay={(index % 4) * 0.08} duration={0.4}>
      <Link 
        href={`/products/${product.slug}`}
        className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-[1vw]"
      >
        <article className="bg-white rounded-[1vw] border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
          <div>
            {/* Image banner - White Background */}
            <div className="relative aspect-[4/3] w-full bg-white p-[1.2vw] overflow-hidden flex items-center justify-center border-b border-slate-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-[1vw] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Content - Soft Grey Background */}
            <div className="p-[1.2vw] space-y-[0.8vh] bg-slate-50/80">
              {/* Header */}
              <div className="flex items-start justify-between gap-[0.5vw]">
                <h3 className="text-[1.1vw] font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-[0.8vw] font-medium leading-relaxed line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>

          {/* Card Action Button - Soft Grey Background */}
          <div className="px-[1.2vw] pb-[1.2vw] pt-[0.4vh] bg-slate-50/80">
            <span
              className="w-fit inline-flex items-center justify-center gap-[0.4vw] px-[1vw] py-[0.8vh] rounded-[0.6vw] border-2 border-orange-500/60 bg-orange-50/50 text-orange-600 text-[0.8vw] font-bold group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-md"
            >
              View Details
              <ArrowRight className="w-[0.9vw] h-[0.9vw] min-w-[12px] min-h-[12px] group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
