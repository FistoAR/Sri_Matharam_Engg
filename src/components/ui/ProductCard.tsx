"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Package,
  Settings,
  Maximize2,
  Layers,
  Activity,
  Box,
  Grid,
  Truck,
} from "lucide-react";
import { MedicalProduct } from "@/lib/data";
import { useInquiryModal } from "@/components/ui/InquiryModalContext";

interface ProductCardProps {
  product: MedicalProduct;
  index?: number;
  hideDetails?: boolean;
}

// Icon mapping helper for spec keys matching the design mockup
const SPEC_ICONS: Record<string, React.ElementType> = {
  Accessories: Package,
  Castors: Settings,
  Dimension: Maximize2,
  Foldable: Layers,
  Function: Activity,
  Material: Box,
  "No. of Fold": Grid,
  "Supply Ability": Truck,
};

export function ProductCard({ product, hideDetails = false }: ProductCardProps) {
  const { openInquiryModal } = useInquiryModal();
  const specs = product.specifications || {};
  const specEntries = Object.entries(specs);

  return (
    <div className="bg-white rounded-[1vw] border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden">
      {/* Clickable Top Header & Content Area navigating to product details */}
      <Link href={`/products/${product.slug}`} className="p-[1vw] space-y-[1vh] block cursor-pointer">
        {/* Top Header: Product Title */}
        <div className="flex items-start justify-between gap-[0.6vw]">
          <h3 className="text-[16px] sm:text-[1.2vw] font-bold text-[#0B3C83] group-hover:text-blue-600 transition-colors tracking-tight line-clamp-1">
            {product.name}
          </h3>
        </div>

        {/* Main Body Layout */}
        {hideDetails ? (
          /* Full Width Clean Image Display Container (Only when hideDetails is true) */
          <div className="relative aspect-[4/3] w-full bg-slate-50/80 rounded-[0.8vw] border border-slate-200/90 p-[0.6vw] flex items-center justify-center overflow-hidden group-hover:border-blue-300 transition-colors">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-contain p-[0.4vw] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          /* Default Layout: Left Photo Frame Container + Right Specs Double-Column Container */
          <div className="grid grid-cols-12 gap-[1.2vw] items-center justify-around pt-[0.4vh]">
            {/* Left Separate Container: Image Frame */}
            <div className="col-span-12 sm:col-span-4 relative aspect-[4/3] sm:aspect-[4/5] w-full bg-slate-50/80 rounded-[0.8vw] border border-slate-200/90 p-[0.5vw] flex items-center justify-center overflow-hidden group-hover:border-blue-300 transition-colors shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-contain p-[0.3vw] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Separate Container: Text Specs with Dedicated Key Column & Value Column */}
            <div className="col-span-12 sm:col-span-8 flex justify-between gap-[1vw] overflow-hidden">
              {specEntries.length > 0 ? (
                <>
                  {/* Container 1: Keys / Labels Column */}
                  <div className="flex flex-col justify-around space-y-[1.2vh] shrink-0">
                    {specEntries.slice(0, 7).map(([key]) => (
                      <span key={key} className="font-bold text-slate-900 text-[14px] sm:text-[0.93vw] leading-snug">
                        {key}:
                      </span>
                    ))} 
                  </div>

                  {/* Container 2: Values Column */}
                  <div className="flex flex-col justify-around space-y-[1.2vh] text-right overflow-hidden flex-1 min-w-0">
                    {specEntries.slice(0, 7).map(([key, value]) => (
                      <span key={key} className="font-semibold text-slate-700 text-[14px] sm:text-[0.93vw] leading-snug truncate">
                        {value}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-slate-600 font-normal leading-relaxed line-clamp-4 text-[14px] sm:text-[0.9vw]">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        )}
      </Link>

      {/* Compact Bottom Banner with Sky Blue Glass Gradient */}
      <div className="bg-gradient-to-r from-blue-100/90 via-sky-100/70 to-sky-100/60 backdrop-blur-xl border-t border-blue-200/90 py-[8px] sm:py-[1vh] px-[12px] sm:px-[1vw] flex items-center justify-end gap-[0.8vw] mt-[0.3vh]">
        {/* Right Side: Dark Royal Blue Pill Button with White Text & Arrow */}
        <button 
          onClick={() => openInquiryModal(product)}
          className="w-full sm:w-auto bg-[#0B3C83] hover:bg-[#062454] text-white text-[13px] sm:text-[0.78vw] font-bold py-[10px] sm:py-[0.8vh] px-[16px] sm:px-[1.2vw] rounded-lg sm:rounded-[0.6vw] transition-all duration-300 flex items-center justify-center gap-[6px] sm:gap-[0.4vw] shadow-md shadow-blue-900/10 active:scale-[0.98]"
        >
          SEND INQUIRY
          <ArrowRight className="w-[14px] h-[14px] sm:w-[0.85vw] sm:h-[0.85vw] stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
