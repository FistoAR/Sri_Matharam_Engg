import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { PRODUCTS, MedicalProduct } from '@/lib/data';
import { constructMetadata, generateProductSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductImageZoom } from '@/components/ui/ProductImageZoom';
import { ThumbnailSlider } from '@/components/ui/ThumbnailSlider';
import { SuggestedProductsSlider } from '@/components/ui/SuggestedProductsSlider';
import { ProductTabs } from '@/components/ui/ProductTabs';
import { FadeIn } from '@/components/ui/FadeIn';
import { SpecificationVariantSelector } from '@/components/ui/SpecificationVariantSelector';
import { ProductDetailQuoteButton } from '@/components/ui/ProductDetailQuoteButton';
import { Tag, Send, PhoneCall, ShieldCheck, Truck, Package, ArrowRight, Sparkles, Award, CheckCircle2 } from 'lucide-react';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return constructMetadata({ title: 'Product Not Found', noIndex: true });
  }

  return constructMetadata({
    title: `${product.name} | Hospital Equipment`,
    description: product.description,
    canonical: `/products/${product.slug}`,
    ogImage: product.image,
  });
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) as MedicalProduct | undefined;

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);

  // Include ALL products in the same category (or full catalog if single product)
  let sameCategoryProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );

  let relatedProducts = sameCategoryProducts;
  if (relatedProducts.length < 4) {
    const additionalProducts = PRODUCTS.filter(
      (p) => p.slug !== product.slug && !relatedProducts.some((rp) => rp.id === p.id)
    );
    relatedProducts = [...relatedProducts, ...additionalProducts];
  }

  return (
    <>
      <Script
        id={`product-schema-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="px-[3vw] py-[1.5vh] flex flex-col gap-[1.5vw]">
        <Breadcrumb
          items={[
            { label: 'Products', url: '/products' },
            { label: product.name, url: `/products/${product.slug}` },
          ]}
        />

        {/* Main Overview Section (Gallery Left + Concise Specs & Price Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-start">
          {/* Left Gallery Container (Compact Aspect Ratio to fit inside initial screen height) */}
          <div className="lg:col-span-6 space-y-[1vh] flex flex-col">
            <div className="relative aspect-[16/10] w-full">
              <ProductImageZoom
                src={product.image}
                alt={`${product.name} - Sri Mathurams Medical Equipment`}
                category={product.category}
              />
              <div className="absolute top-[1.2vh] left-[1vw] inline-flex items-center gap-[0.5vw] bg-slate-900/80 backdrop-blur-md text-white text-[0.8vw] min-text-[11px] font-bold px-[0.8vw] py-[0.5vh] rounded-[0.4vw] border border-white/20 shadow-lg z-10 pointer-events-none">
                <Tag className="w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px] text-white" />
                <span>{product.category}</span>
              </div>
            </div>

            {/* Smooth 3-Grid Auto-Sliding Thumbnail Slider */}
            <div className="shrink-0 pt-[0.5vh]">
              <ThumbnailSlider
                images={
                  product.gallery && product.gallery.length >= 3
                    ? product.gallery
                    : [product.image, ...(product.gallery || []), product.image, product.image].slice(0, 3)
                }
                productName={product.name}
              />
            </div>
          </div>

          {/* Right Side Content Panel (Slightly Tightened Vertical Spacing) */}
          <div className="lg:col-span-6 space-y-[3.8vh]">

            <FadeIn direction="up" delay={0.05} duration={0.4}>
              <div className="flex items-center justify-between gap-[1vw] flex-wrap">
                <h1 className="text-[22px] sm:text-[1.8vw] font-bold text-[#0B3C83] tracking-tight ">
                  {product.name}
                </h1>
                <div className="inline-flex items-center gap-[6px] sm:gap-[0.5vw] bg-blue-50/90 text-[#0B3C83] text-[13px] sm:text-[0.8vw] font-bold px-[10px] sm:px-[0.8vw] py-[5px] sm:py-[0.4vh] rounded-lg sm:rounded-[0.5vw] border border-blue-200/90 shrink-0">
                  <Package className="w-[16px] h-[16px] sm:w-[0.9vw] sm:h-[0.9vw] text-[#0B3C83]" />
                  <span>MOQ: <strong className="text-slate-900 font-bold">1 Unit</strong></span>
                </div>
              </div>
            </FadeIn>

            <div className='space-y-[2vh]'>
              {/* Interactive Specification Variant Selector Toggle Buttons */}
              <FadeIn direction="up" delay={0.1} duration={0.4}>
                <SpecificationVariantSelector product={product} />
              </FadeIn>

              {/* Hospital Procurement Benefits */}
              <FadeIn direction="up" delay={0.15} duration={0.4} className="bg-white border border-slate-200/90 rounded-[12px] sm:rounded-[0.8vw] p-[16px] sm:p-[1vw] space-y-[10px]">
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-[6px]">
                  <span className="text-[14px] sm:text-[0.85vw] font-bold text-[#0B3C83]">Hospital Procurement Benefits</span>
                  <span className="text-[12px] sm:text-[0.8vw] font-bold text-orange-600">Sri Mathurams Advantage</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] sm:gap-[0.8vw] text-[13px] sm:text-[0.8vw] py-[4px]">
                  <div className="flex items-start gap-[8px] sm:gap-[0.3vw]">
                    <CheckCircle2 className="w-[16px] h-[16px] sm:w-[0.95vw] sm:h-[0.95vw] text-orange-500 shrink-0 mt-[2px]" />
                    <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">Bulk Quotation</strong> Institutional pricing</span>
                  </div>
                  <div className="flex items-start gap-[8px] sm:gap-[0.3vw]">
                    <CheckCircle2 className="w-[16px] h-[16px] sm:w-[0.95vw] sm:h-[0.95vw] text-orange-500 shrink-0 mt-[2px]" />
                    <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">Custom Specs</strong> Dimension & color options</span>
                  </div>
                  <div className="flex items-start gap-[8px] sm:gap-[0.3vw]">
                    <CheckCircle2 className="w-[16px] h-[16px] sm:w-[0.95vw] sm:h-[0.95vw] text-orange-500 shrink-0 mt-[2px]" />
                    <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">On-Site Setup</strong> Turnkey installation</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Trade & Supply Information Card */}
            <FadeIn direction="up" delay={0.2} duration={0.4} className="bg-slate-50/90 rounded-[12px] sm:rounded-[0.8vw] border border-slate-200/90 p-[16px] sm:p-[1vw] space-y-[10px]">
              <h2 className="text-[15px] sm:text-[0.95vw] font-bold text-[#0B3C83] flex items-center gap-[8px] sm:gap-[0.5vw] border-b border-slate-200/80 pb-[6px]">
                <Truck className="w-[18px] h-[18px] sm:w-[1.1vw] sm:h-[1.1vw] text-orange-500" /> Trade & Supply Information
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px] sm:gap-[0.7vw] text-[12px] sm:text-[0.78vw]">
                <div className="bg-white p-[10px] sm:p-[0.6vw] rounded-[8px] sm:rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Supply Ability</span>
                  <span className="font-bold text-slate-950 text-[14px] sm:text-[0.85vw] mt-[2px] block">350 Units / Mo</span>
                </div>
                <div className="bg-white p-[10px] sm:p-[0.6vw] rounded-[8px] sm:rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Delivery Time</span>
                  <span className="font-bold text-slate-950 text-[14px] sm:text-[0.85vw] mt-[2px] block">30 Days</span>
                </div>
                <div className="bg-white p-[10px] sm:p-[0.6vw] rounded-[8px] sm:rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Payment Terms</span>
                  <span className="font-bold text-slate-950 text-[14px] sm:text-[0.85vw] mt-[2px] block">Cash Advance</span>
                </div>
                <div className="bg-white p-[10px] sm:p-[0.6vw] rounded-[8px] sm:rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Market</span>
                  <span className="font-bold text-slate-950 text-[14px] sm:text-[0.85vw] mt-[2px] block">Tamil Nadu</span>
                </div>
              </div>
            </FadeIn>

            {/* Deal Notice Badge - Regional Service Area Location */}
            <FadeIn direction="up" delay={0.25} duration={0.4} className="relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 text-orange-950 text-[13px] sm:text-[0.8vw] font-bold px-[14px] sm:px-[0.9vw] py-[10px] sm:py-[0.7vh] rounded-lg flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-[6px] sm:gap-[0.5vw]">
                <span className="tracking-wide">Regional Service Area:</span>
                <span className="text-orange-600 font-bold">Tamil Nadu Only</span>
              </div>
              <span className="bg-orange-500 text-white text-[10px] sm:text-[0.6vw] px-[8px] sm:px-[0.6vw] py-[4px] sm:py-[0.4vh] rounded-lg uppercase tracking-wider font-bold">
                DIRECT DELIVERY
              </span>
            </FadeIn>

            {/* Action Buttons Right After Trade & Supply Information */}
            <FadeIn direction="up" delay={0.3} duration={0.4} className="pt-[0.2vh]">
              <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[0.8vw]">
                <div className="flex-1">
                  <ProductDetailQuoteButton product={product} />
                </div>
                <a href="tel:+919842212345" className="flex-1">
                  <button className="w-full inline-flex items-center justify-center gap-[8px] sm:gap-[0.5vw] px-[16px] sm:px-[1.2vw] py-[12px] sm:py-[1.1vh] rounded-lg sm:rounded-[0.7vw] bg-[#0B3C83] hover:bg-[#062454] text-white text-[15px] sm:text-[0.88vw] font-bold shadow-md active:scale-95 transition-all">
                    <PhoneCall className="w-[18px] h-[18px] sm:w-[0.9vw] sm:h-[0.9vw] text-white" /> Call Sales
                  </button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tabbed Product Information Below */}
        <ProductTabs product={product} />

        {/* Related Products from the Same Category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-[1vh] py-[4vh]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[1.5vw] min-text-[18px] font-bold tracking-tight">
                  <span className="text-[#0B3C83]">Related Products in </span>
                  <span className="text-orange-600">{product.category}</span>
                </h2>
              </div>
              <Link href="/products">
                <button className="group inline-flex items-center gap-[0.5vw] bg-white border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 text-[0.8vw] font-semibold px-[1vw] py-[0.7vh] rounded-xl shadow-xs hover:shadow-md transition-all duration-300">
                  <span>View All Products</span>
                  <ArrowRight className="w-[0.9vw] h-[0.9vw] min-w-[14px] min-h-[14px] text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
            <SuggestedProductsSlider products={relatedProducts} />
          </div>
        )}
      </div>
    </>
  );
}
