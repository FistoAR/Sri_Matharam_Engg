"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES, getCategoryTheme } from "@/lib/data";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Shield,
  Activity,
  Bed,
  Menu,
  ChevronsDown,
  ChevronsUp,
  X,
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 font-semibold">
          Loading Products...
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}

function ProductsPageContent() {
  // List of category names
  const categoryList = useMemo(() => {
    return ["All Products", ...CATEGORIES.map((cat) => cat.name)];
  }, []);

  // Pre-calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Products": PRODUCTS.length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat.name] = PRODUCTS.filter((p) => p.category === cat.name).length;
    });
    return counts;
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search") || searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    const q = searchParams.get("search") || searchParams.get("q") || "";
    setSearchTerm(q);
  }, [searchParams]);

  React.useEffect(() => {
    const handleSyncSearch = (e: any) => {
      setSearchTerm(e.detail || "");
    };
    window.addEventListener("productSearchChange", handleSyncSearch);
    return () => window.removeEventListener("productSearchChange", handleSyncSearch);
  }, []);

  React.useEffect(() => {
    setIsMounted(true);
    if (categoryQuery) {
      const idx = categoryList.indexOf(categoryQuery);
      if (idx !== -1) {
        setActiveCategoryIndex(idx);
      }
    }

    // Sync sidebar state from localStorage
    const saved = localStorage.getItem("sidebarExpanded");
    if (saved !== null) {
      setIsSidebarExpanded(saved === "true");
    }
  }, [categoryQuery, categoryList]);

  React.useEffect(() => {
    const handleSync = () => {
      const saved = localStorage.getItem("sidebarExpanded");
      if (saved !== null) {
        setIsSidebarExpanded(saved === "true");
      }
    };
    window.addEventListener("sidebarToggle", handleSync);
    return () => window.removeEventListener("sidebarToggle", handleSync);
  }, []);

  const currentCategory = categoryList[activeCategoryIndex] || "All Products";

  // Filter products by search term & active category selection
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;
    if (currentCategory !== "All Products") {
      list = list.filter((p) => p.category === currentCategory);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          (p.modelNumber && p.modelNumber.toLowerCase().includes(term)) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term),
      );
    }

    return list;
  }, [currentCategory, searchTerm]);

  // Unique categories present in results, sorted by original layout ordering
  const groupedCategoryNames = useMemo(() => {
    return CATEGORIES.filter((cat) =>
      filteredProducts.some((p) => p.category === cat.name),
    ).map((cat) => cat.name);
  }, [filteredProducts]);

  // Description for each category based on data
  const currentCategoryDesc = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.name === currentCategory);
    return (
      cat?.description ||
      "High-quality medical equipment designed for patient comfort, safety, and easy operation."
    );
  }, [currentCategory]);

  // Representative banner image for the category
  const bannerImage = useMemo(() => {
    if (currentCategory === "All Products") {
      return "/images/Product Assets/Banners/AllProducts.webp";
    }
    const cat = CATEGORIES.find((c) => c.name === currentCategory);
    return cat?.banner || "/images/Product Assets/Banners/AllProducts.webp";
  }, [currentCategory]);

  const mainRef = React.useRef<HTMLDivElement>(null);
  const productsStartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className={`flex-1 min-w-0 space-y-6 lg:h-[calc(100vh-140px)] lg:overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative transition-all duration-700 transform ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Category Banner Card */}
      <style>{`
        @keyframes bannerSlideIn {
          from { opacity: 0; transform: translateX(-48px) scale(0.98); filter: blur(3px); }
          to   { opacity: 1; transform: translateX(0)     scale(1);    filter: blur(0); }
        }
        .banner-slide-in {
          animation: bannerSlideIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
      <div
        key={bannerImage}
        className="banner-slide-in hidden lg:block relative rounded-2xl overflow-hidden border border-slate-200/90 w-full shadow-2xs"
      >
        <Image
          src={bannerImage}
          alt={`${currentCategory} Banner`}
          width={1200}
          height={160}
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
      </div>


      {/* Products Grid */}
      <div
        ref={productsStartRef}
        className="min-h-[calc(100vh-140px)] pb-12 space-y-8"
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <p className="text-slate-700 font-bold text-sm">
                No products found matching "{searchTerm}".
              </p>
              <p className="text-slate-400 text-xs font-medium">
                Try searching with a model code (e.g., "MF01") or a keyword (e.g., "trolley", "bed", "chair").
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              {currentCategory !== "All Products" && (
                <button
                  onClick={() => {
                    setActiveCategoryIndex(0);
                    const params = new URLSearchParams(searchParams.toString());
                    params.delete("category");
                    router.replace(`/products?${params.toString()}`, { scroll: false });
                  }}
                  className="px-4 py-2 bg-[#0B3C83] hover:bg-[#092D62] text-white text-xs font-bold rounded-xl shadow-xs transition-all"
                >
                  Search in All Products
                </button>
              )}
              <button
                onClick={() => {
                  setSearchTerm("");
                  window.dispatchEvent(new CustomEvent("productSearchChange", { detail: "" }));
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete("search");
                  params.delete("q");
                  router.replace(`/products?${params.toString()}`, { scroll: false });
                }}
                className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-all"
              >
                Clear Search
              </button>
            </div>
          </div>
        ) : currentCategory === "All Products" ? (
          // Grouped by Category layout
          groupedCategoryNames.map((catName) => {
            const catProducts = filteredProducts.filter(
              (p) => p.category === catName,
            );
            const catTheme = getCategoryTheme(catName);
            return (
              <div key={catName} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200/60 pb-2 pt-2">
                  <h2
                    className="text-sm font-extrabold tracking-wide uppercase font-montserrat"
                    style={{ color: catTheme.bg }}
                  >
                    {catName}
                  </h2>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${catTheme.bg}1A`,
                      color: catTheme.bg,
                      border: `1px solid ${catTheme.bg}33`,
                    }}
                  >
                    {catProducts.length}
                  </span>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ${
                    isSidebarExpanded ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  }`}
                >
                  {catProducts.map((product) => (
                    <ScrollReveal key={product.id}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          // Single Category Direct Grid layout
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-300 ${
              isSidebarExpanded ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {filteredProducts.map((product) => (
              <ScrollReveal key={product.id}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Mobile/Tablet Category Banner Card at Bottom */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden border border-slate-200/90 w-full aspect-[3.2/1] shadow-2xs mt-8">
        <Image
          key={bannerImage}
          src={bannerImage}
          alt={`${currentCategory} Banner`}
          fill
          sizes="100vw"
          className="object-fill transition-opacity duration-300"
          priority
        />
      </div>
    </main>
  );
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          // If the element enters from the top edge of the viewport, show it instantly
          if (rect.top < 150) {
            setShouldAnimate(false);
          }
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        shouldAnimate ? "transition-all duration-700 ease-out transform" : ""
      } ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      {children}
    </div>
  );
}
