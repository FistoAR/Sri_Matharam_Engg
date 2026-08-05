'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { Search, ChevronLeft, ChevronRight, LayoutGrid, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  // List of category names including "All Products"
  const categoryList = useMemo(() => {
    return ['All Products', ...CATEGORIES.map((cat) => cat.name)];
  }, []);

  const currentCategory = categoryList[activeCategoryIndex];

  // Filter products by search and active selected category
  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);
      const matchesCategory =
        currentCategory === 'All Products' || product.category === currentCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, currentCategory]);

  // Derive unique categories present in results, sorted by product count descending (largest count first)
  const groupedCategoryNames = useMemo(() => {
    const countsMap: Record<string, number> = {};
    filteredProducts.forEach((p) => {
      countsMap[p.category] = (countsMap[p.category] || 0) + 1;
    });
    return Object.keys(countsMap).sort((a, b) => countsMap[b] - countsMap[a]);
  }, [filteredProducts]);

  // Navigate to previous category
  const prevCategory = () => {
    setActiveCategoryIndex((prev) => (prev > 0 ? prev - 1 : categoryList.length - 1));
  };

  // Navigate to next category
  const nextCategory = () => {
    setActiveCategoryIndex((prev) => (prev < categoryList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full px-[3vw] py-[2vh]  relative min-h-screen">
      
      {/* Top Section Header Row: Title on Left, Controls Panel on Right */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[1.5vw] pb-[0.5vh]">
        
        {/* Left Side: Main Page Heading */}
        <FadeIn direction="down" duration={0.4}>
          <h1 className="text-[2vw] font-semibold text-slate-900">
            Our Featured Products
          </h1>
        </FadeIn>

        {/* Right Side Panel: Search Bar + Category Selector */}
        <div className="flex flex-col sm:flex-row items-center gap-[0.8vw] bg-white p-[0.6vw] rounded-[1vw] border border-slate-200 shadow-sm shrink-0">
          
          {/* Active Category Display Badge - Solid Orange Theme */}
          <div className="flex items-center gap-[0.4vw] px-[0.8vw] py-[0.8vh] rounded-[0.6vw] bg-slate-900/80 backdrop-blur-md text-white text-[0.8vw] font-bold shrink-0 shadow-md">
            <LayoutGrid className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-white" />
            <span>{currentCategory}</span>
            <span className="bg-white/20 text-white px-[0.4vw] py-[0.1vh] rounded-full text-[0.65vw]">
              {filteredProducts.length}
            </span>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-[15vw]">
            <Search className="absolute left-[0.8vw] top-1/2 -translate-y-1/2 w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-[2.2vw] pr-[1vw] py-[0.8vh] bg-slate-50 rounded-[0.6vw] text-[0.85vw] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all font-medium text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Category Dropdown Select */}
          <div className="relative w-full sm:w-[13vw]">
            <select
              value={activeCategoryIndex}
              onChange={(e) => setActiveCategoryIndex(Number(e.target.value))}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 text-[0.85vw] font-bold py-[0.8vh] pl-[0.8vw] pr-[2vw] rounded-[0.6vw] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer shadow-sm hover:bg-slate-100/80"
            >
              {categoryList.map((catName, idx) => (
                <option key={catName} value={idx} className="font-medium text-slate-900 py-[0.4vh]">
                  {catName}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-[0.8vw] top-1/2 -translate-y-1/2 w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-slate-500 pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Product Section Container */}
      <div className="relative pt-[2vh]">
        
        {/* Sticky Floating Navigation Buttons (Positioned outside layout flow) */}
        <button
          onClick={prevCategory}
          className="fixed left-[1vw] top-1/2 -translate-y-1/2 z-50 w-[2.8vw] h-[2.8vw] min-w-[36px] min-h-[36px] rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/25 hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center"
          title={`Previous Category (${categoryList[(activeCategoryIndex - 1 + categoryList.length) % categoryList.length]})`}
          aria-label="Previous Category"
        >
          <ChevronLeft className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] stroke-[2.5]" />
        </button>

        <button
          onClick={nextCategory}
          className="fixed right-[1vw] top-1/2 -translate-y-1/2 z-50 w-[2.8vw] h-[2.8vw] min-w-[36px] min-h-[36px] rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/25 hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center"
          title={`Next Category (${categoryList[(activeCategoryIndex + 1) % categoryList.length]})`}
          aria-label="Next Category"
        >
          <ChevronRight className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] stroke-[2.5]" />
        </button>

        {/* Grid View Container Grouped Category-Wise */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-[6vh] bg-slate-50 rounded-[1vw] border border-slate-200 my-[2vh]">
            <p className="text-slate-500 font-medium text-[0.9vw]">
              No products match your search {searchTerm ? `"${searchTerm}"` : ''} in {currentCategory}.
            </p>
          </div>
        ) : (
          <div key={currentCategory + searchTerm} className="space-y-[4vh] transition-all duration-500 animate-fadeIn">
            {groupedCategoryNames.map((catName) => {
              const catProducts = filteredProducts.filter((p) => p.category === catName);
              if (catProducts.length === 0) return null;

              // Only show category title headers when in "All Products" mode or actively searching
              const showCategoryTitle = currentCategory === 'All Products' || Boolean(searchTerm.trim());

              return (
                <section key={catName} className="space-y-[1.5vh]">
                  {/* Category Title Header (Only for All Products or when searching) */}
                  {showCategoryTitle && (
                    <div className="flex items-center gap-[0.6vw] w-full">
                      <h2 className="text-[1.5vw] font-medium text-slate-800">
                        {catName}
                      </h2>
                      <span className="bg-slate-900/80 backdrop-blur-md text-white text-[0.75vw] font-bold px-[0.45vw] py-[0.5vh] rounded-full">
                        {catProducts.length} 
                      </span>
                    </div>
                  )}

                  {/* Products Grid for this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5vw]">
                    {catProducts.map((product, idx) => (
                      <ProductCard key={product.id} product={product} index={idx} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}
