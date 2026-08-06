'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { MedicalProduct } from '@/lib/data';

interface SpecificationVariantSelectorProps {
  product: MedicalProduct;
}

export function SpecificationVariantSelector({ product }: SpecificationVariantSelectorProps) {
  // Generate specification options based on product specifications or standard variants
  const defaultVariants = React.useMemo(() => {
    if (product.specificationVariants && product.specificationVariants.length > 0) {
      return product.specificationVariants;
    }

    // Auto-generate realistic specification options if not explicitly declared
    if (product.category === 'Emergency & Patient Transfer' || product.name.includes('Stretcher') || product.name.includes('Trolley')) {
      return [
        { id: 'ms', name: 'Mild Steel (MS)', desc: 'Pre-treated Epoxy Powder Coated MS Body' },
        { id: 'ss', name: 'Stainless Steel (SS)', desc: '304 Grade Corrosion Resistant Stainless Steel' },
        { id: 'hilo', name: 'Hi-Lo Adjustable', desc: 'Hydraulic/Crank Height Adjustable System' },
      ];
    }

    if (product.name.includes('Locker') || product.category === 'Ward Furniture') {
      return [
        { id: 'cabin', name: 'Plain Cabin', desc: 'Single Storage Cabin Unit' },
        { id: 'deluxe', name: 'Cabin + Drawer', desc: 'Top Smooth Drawer + Storage Cabin' },
        { id: 'granite', name: 'Granite Top', desc: 'Granite Top + File Rack + Cabin + Drawer' },
      ];
    }

    if (product.name.includes('Cot') || product.name.includes('Bed')) {
      return [
        { id: 'manual', name: 'Manual Crank', desc: 'Smooth Mechanical Screw Crank Handle' },
        { id: 'abs', name: 'ABS Side Rails', desc: 'Moulded Tuck-away ABS Protection Rails' },
        { id: 'ss-rails', name: 'SS Collapsible', desc: 'Full Stainless Steel Drop Safety Rails' },
      ];
    }

    return [
      { id: 'ms', name: 'Mild Steel (MS)', desc: 'Standard Powder Coated Finish' },
      { id: 'ss', name: 'Stainless Steel (SS)', desc: '304 Grade Stainless Steel Finish' },
      { id: 'custom', name: 'Custom Spec', desc: 'Tailored Hospital Specification' },
    ];
  }, [product]);

  const [selectedVariant, setSelectedVariant] = useState(defaultVariants[0]?.name || 'Mild Steel (MS)');

  return (
    <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-white border border-blue-200/90 rounded-[0.9vw] p-[1vw] space-y-[1vh] shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.5vw]">
          <Layers className="w-[1.1vw] h-[1.1vw] min-w-[15px] min-h-[15px] text-[#0B3C83]" />
          <span className="text-[0.9vw] min-text-[13px] font-extrabold text-[#0B3C83]">Select Specification Variant:</span>
        </div>
        <span className="text-[0.75vw] min-text-[11px] font-bold text-orange-600 bg-orange-100/80 px-[0.6vw] py-[0.2vh] rounded-full">
          {defaultVariants.length} Options Available
        </span>
      </div>

      {/* Interactive Toggle Pill Buttons */}
      <div className="grid grid-cols-3 gap-[0.6vw]">
        {defaultVariants.map((v) => {
          const isSelected = selectedVariant === v.name;
          return (
            <button
              key={v.name}
              type="button"
              onClick={() => setSelectedVariant(v.name)}
              className={`p-[0.7vw] rounded-[0.7vw] border transition-all duration-300 text-left flex flex-col justify-between group relative overflow-hidden ${
                isSelected
                  ? 'bg-[#0B3C83] text-white border-[#0B3C83] shadow-md scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[0.82vw] min-text-[12px] font-extrabold truncate ${isSelected ? 'text-white' : 'text-slate-900 group-hover:text-blue-700'}`}>
                  {v.name}
                </span>
                <CheckCircle2 className={`w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px] shrink-0 ${isSelected ? 'text-orange-400 opacity-100' : 'opacity-0'}`} />
              </div>
              {'desc' in v && (
                <span className={`text-[0.68vw] min-text-[10px] line-clamp-1 mt-[0.3vh] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {v.desc}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
