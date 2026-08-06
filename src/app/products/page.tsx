"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import {
  Search,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Bed,
  Activity,
  Accessibility,
  ShoppingBag,
  HeartPulse,
  Sparkles,
  PlusSquare,
  Armchair,
  Package,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

// Icon mapping helper for categories
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "All Products": LayoutGrid,
  "Ward Furniture": Bed,
  "ICU & Critical Care": Activity,
  "Emergency & Patient Transfer": Accessibility,
  "Labour & Maternity": HeartPulse,
  "Examination & Consultation": Sparkles,
  "Medical Trolleys": ShoppingBag,
  "OT Equipment": PlusSquare,
  "Stainless Steel Furniture & Ward Accessories": Armchair,
  Accessories: Package,
  "General Furniture": Armchair,
};

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // List of category names including "All Products"
  const categoryList = useMemo(() => {
    return ["All Products", ...CATEGORIES.map((cat) => cat.name)];
  }, []);

  const currentCategory = categoryList[activeCategoryIndex];

  // Total counts for each category based on all products
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Products": PRODUCTS.length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat.name] = 0;
    });
    PRODUCTS.forEach((prod) => {
      counts[prod.category] = (counts[prod.category] || 0) + 1;
    });
    return counts;
  }, []);

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
        currentCategory === "All Products" ||
        product.category === currentCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, currentCategory]);

  // Derive unique categories present in results, sorted by product count descending
  const groupedCategoryNames = useMemo(() => {
    const countsMap: Record<string, number> = {};
    filteredProducts.forEach((p) => {
      countsMap[p.category] = (countsMap[p.category] || 0) + 1;
    });
    return Object.keys(countsMap).sort((a, b) => countsMap[b] - countsMap[a]);
  }, [filteredProducts]);

  return (
    <div className="w-full px-[1.25vw] py-[2vh] relative min-h-screen">
      {/* Main Layout: Max 90vh Sticky Left Side Panel + Stretchy Product Grid */}
      <div className="flex gap-[1.5vw] items-start relative">
        {/* Expandable & Collapsible Left Side Panel */}
        <aside
          className={`shrink-0 transition-all duration-300 ease-in-out sticky top-[10vh] group/sidebar z-50 ${
            isSidebarExpanded ? "w-[18vw]" : "w-[5.5vw] min-w-[76px]"
          }`}
        >
          <div className="bg-white rounded-[1.2vw] border border-slate-200/90 p-[0.7vw] shadow-sm flex flex-col h-[89vh] max-h-[88vh] overflow-visible relative">
            {/* Border Arrow Button to Expand / Collapse */}
            <button
              onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
              className="absolute -right-[0.9vw] top-[2vh] z-30 w-[1.8vw] h-[1.8vw] min-w-[24px] min-h-[24px] rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-500 hover:scale-110 active:scale-95 transition-all duration-200"
              title={isSidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
              aria-label="Toggle Side Panel"
            >
              {isSidebarExpanded ? (
                <ChevronLeft className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] stroke-[2.5]" />
              ) : (
                <ChevronRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] stroke-[2.5]" />
              )}
            </button>

            <div className="flex flex-col gap-[1.2vh] min-h-0 flex-1 overflow-y-auto overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {isSidebarExpanded && (
                <div className="pb-[1.2vh] border-b border-slate-100 shrink-0 px-[0.3vw]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[1.2vw] min-text-[17px] font-bold text-slate-900 leading-tight">
                      Categories
                    </h1>
                  </div>
                </div>
              )}

              {/* Category Navigation Items List - Vertical Scroll Only (Tooltips Unclipped) */}
              <nav className="flex flex-col gap-[1.2vh] pr-[0.1vw] flex-1 min-h-0 relative z-20">
                {categoryList.map((catName, idx) => {
                  const isActive = activeCategoryIndex === idx;
                  const count = categoryCounts[catName] || 0;
                  const IconComponent = CATEGORY_ICONS[catName] || Package;

                  return (
                    <button
                      key={catName}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`w-full flex items-center ${
                        isSidebarExpanded
                          ? 'justify-between px-[0.9vw]'
                          : 'justify-center px-[0.4vw]'
                      } py-[1.1vh] rounded-[0.7vw] text-[0.85vw] min-text-[13px] font-semibold transition-all duration-300 text-left group shrink-0 relative ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-100/90 via-sky-100/70 to-sky-100/60 backdrop-blur-xl border border-blue-400/90 shadow-md shadow-blue-500/10 text-slate-900 font-bold'
                          : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50/90 hover:border-slate-300 hover:text-blue-700'
                      }`}
                    >
                      {/* Running Silver Shine Beam Animation Effect */}
                      {isActive && (
                        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-silver-shine z-0 rounded-[0.7vw]" />
                      )}

                      {/* Left Blue Line Attached Flush to Left Border Edge */}
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-[0.3vw] min-w-[4px] bg-blue-600 rounded-l-[0.7vw] z-10" />
                      )}

                      <div className={`flex items-center gap-[0.7vw] min-w-0 relative z-10 ${isSidebarExpanded ? 'pl-[0.5vw]' : 'pl-0 justify-center'}`}>
                        <div
                          className={`p-[0.45vw] rounded-[0.5vw] transition-all flex items-center justify-center ${
                            isActive
                              ? 'bg-white/90 backdrop-blur-md text-blue-600 shadow-sm border border-white'
                              : 'bg-slate-100/90 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}
                        >
                          <IconComponent className="w-[1.15vw] h-[1.15vw] min-w-[17px] min-h-[17px] shrink-0 stroke-[1.8]" />
                        </div>
                        {isSidebarExpanded && (
                          <span className="truncate tracking-tight text-slate-900 font-bold">{catName}</span>
                        )}
                      </div>

                      {isSidebarExpanded && (
                        <span
                          className={`px-[0.6vw] py-[0.15vh] rounded-full text-[0.7vw] min-text-[11px] font-bold shrink-0 transition-all duration-300 relative z-10 ${
                            isActive
                              ? 'bg-blue-600/20 backdrop-blur-md text-blue-900 shadow-sm border border-blue-300/60'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700'
                          }`}
                        >
                          {count}
                        </span>
                      )}

                      {/* Custom Floating Tooltip (Fixed Position Unclipped above all elements) */}
                      {!isSidebarExpanded && (
                        <div className="fixed left-[7vw] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-[9999] flex items-center drop-shadow-2xl">
                          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-r-[6px] border-r-slate-900/95 -mr-[1px]" />
                          <div className="bg-slate-900/95 backdrop-blur-md text-white px-[0.8vw] py-[0.6vh] rounded-[0.5vw] text-[0.75vw] min-text-[12px] font-semibold shadow-2xl border border-slate-700/80 whitespace-nowrap flex items-center gap-[0.5vw]">
                            <span>{catName}</span>
                            <span className="bg-blue-500 text-white text-[0.65vw] min-text-[10px] font-bold px-[0.4vw] py-[0.1vh] rounded-full">
                              {count}
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </aside>

        {/* Right Side Area: Top Bar (First/Active Category Title + Black Count Badge + 45% Search) + Dynamic Grid */}
        <main className="flex-1 min-w-0 flex flex-col gap-[2vh]">
          {/* Top Bar Row: Active/First Category Title + Rounded Black Count Badge on Left, 45% Width Search Bar on Right */}
          {(() => {
            const firstCatName = groupedCategoryNames[0] || currentCategory;
            const topTitle = currentCategory === "All Products" ? firstCatName : currentCategory;
            const topCount = currentCategory === "All Products"
              ? filteredProducts.filter((p) => p.category === firstCatName).length
              : filteredProducts.length;

            return (
              <div className="flex items-center justify-between gap-[1vw] w-full">
                <div className="flex items-center gap-[0.6vw]">
                  <h2 className="text-[1.4vw] min-text-[18px] font-bold text-slate-900 tracking-tight">
                    {topTitle}
                  </h2>
                  <span className="bg-[#111827] text-white text-[0.75vw] min-text-[11px] font-bold px-[0.6vw] py-[0.2vh] rounded-full">
                    {topCount}
                  </span>
                </div>

                {/* Right-Aligned 45% Width Search Container */}
                <div className="flex items-center gap-[1vw] bg-white p-[0.6vw] rounded-[1.2vw] border border-slate-200/90 shadow-sm w-[45%] min-w-[320px] ml-auto">
                  <div className="relative w-full">
                    <Search className="absolute left-[1vw] top-1/2 -translate-y-1/2 w-[1.1vw] h-[1.1vw] min-w-[16px] min-h-[16px] text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search products by name, specs, or model..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-[2.8vw] pr-[1vw] py-[1vh] bg-slate-50 rounded-[0.8vw] text-[0.85vw] min-text-[13px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all font-medium text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Product Grid Area */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-[8vh] bg-slate-50 rounded-[1.2vw] border border-slate-200 my-[1vh]">
              <p className="text-slate-500 font-medium text-[0.9vw] min-text-[14px]">
                No products match your search{" "}
                {searchTerm ? `"${searchTerm}"` : ""} in {currentCategory}.
              </p>
            </div>
          ) : (
            <div
              key={currentCategory + searchTerm}
              className="space-y-[4vh]"
            >
              {groupedCategoryNames.map((catName, groupIdx) => {
                const catProducts = filteredProducts.filter(
                  (p) => p.category === catName,
                );
                if (catProducts.length === 0) return null;

                // Show category section header only for subsequent categories when in 'All Products' mode
                const showSectionHeader =
                  currentCategory === "All Products" && groupIdx > 0;

                return (
                  <section key={catName} className="space-y-[1.5vh]">
                    {/* Category Section Header for 2nd, 3rd, etc. categories in All Products mode */}
                    {showSectionHeader && (
                      <div className="flex items-center gap-[0.6vw] w-full pt-[1vh]">
                        <h2 className="text-[1.3vw] min-text-[17px] font-bold text-slate-900">
                          {catName}
                        </h2>
                        <span className="bg-[#111827] text-white text-[0.75vw] min-text-[11px] font-bold px-[0.6vw] py-[0.2vh] rounded-full">
                          {catProducts.length}
                        </span>
                      </div>
                    )}

                    {/* Dynamic Responsive Grid (2 columns for optimal Spec Table display) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[1.5vw] transition-all duration-300">
                      {catProducts.map((product, idx) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={idx}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
