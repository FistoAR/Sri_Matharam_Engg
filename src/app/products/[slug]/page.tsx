import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, MedicalProduct } from '@/lib/data';
import { constructMetadata, generateProductSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductImageZoom } from '@/components/ui/ProductImageZoom';
import { ThumbnailSlider } from '@/components/ui/ThumbnailSlider';
import { SuggestedProductsSlider } from '@/components/ui/SuggestedProductsSlider';
import { ProductTabs } from '@/components/ui/ProductTabs';
import { FadeIn } from '@/components/ui/FadeIn';
import { SpecificationVariantSelector } from '@/components/ui/SpecificationVariantSelector';
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
      <script
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

            <div className="space-y-[1vh]">

              <FadeIn direction="up" delay={0.1} duration={0.4}>
              <h1 className="text-[1.8vw] min-text-[22px] font-extrabold text-[#0B3C83] tracking-tight leading-tight">
                {product.name}
              </h1>
            </FadeIn>

            {/* MOQ Row */}
            <FadeIn direction="up" delay={0.15} duration={0.4} className="space-y-[0.8vh]">
              <div className="flex flex-wrap items-baseline justify-between gap-[1vw]">
                <div>
                  <div className="inline-flex items-center gap-[0.5vw] bg-blue-50/80 text-[#0B3C83] text-[0.8vw] min-text-[11px] font-semibold px-[0.8vw] py-[0.4vh] rounded-[0.5vw] border border-blue-200/80">
                    <Package className="w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px] text-[#0B3C83]" />
                    <span>MOQ: <strong className="text-slate-900 font-semibold">1 Unit</strong></span>
                  </div>
                </div>
              </div>
            </FadeIn>

            </div>


            <div className='space-y-[2vh]'>

              {/* Interactive Specification Variant Selector Toggle Buttons */}
              <FadeIn direction="up" delay={0.18} duration={0.4}>
                <SpecificationVariantSelector product={product} />
              </FadeIn>

              {/* Quick Trust & Guarantee Badges */}
            <FadeIn direction="up" delay={0.2} duration={0.4} className="grid grid-cols-3 gap-[0.6vw]">
              <div className="bg-blue-50/80 border border-blue-200/80 p-[0.6vw] rounded-[0.6vw] flex items-center gap-[0.9vw]">
                <ShieldCheck className="w-[1.5vw] h-[1.5vw] min-w-[15px] min-h-[15px] text-[#0B3C83] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.75vw] min-text-[11px] font-extrabold text-slate-900 leading-none">ISO Certified</span>
                  <span className="text-[0.7vw] min-text-[9px] font-medium text-slate-600 mt-[0.5vh]">Tested Quality</span>
                </div>
              </div>

              <div className="bg-orange-50/80 border border-orange-200/80 p-[0.6vw] rounded-[0.6vw] flex items-center gap-[0.9vw]">
                <Sparkles className="w-[1.5vw] h-[1.5vw] min-w-[15px] min-h-[15px] text-orange-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.75vw] min-text-[11px] font-extrabold text-slate-900 leading-none">Direct Factory</span>
                  <span className="text-[0.7vw] min-text-[9px] font-medium text-slate-600 mt-[0.2vh]">Best Pricing</span>
                </div>
              </div>

              <div className="bg-blue-50/80 border border-blue-200/80 p-[0.6vw] rounded-[0.6vw] flex items-center gap-[0.9vw]">
                <Award className="w-[1.5vw] h-[1.5vw] min-w-[15px] min-h-[15px] text-[#0B3C83] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.75vw] min-text-[11px] font-extrabold text-slate-900 leading-none">1 Year Warranty</span>
                  <span className="text-[0.7vw] min-text-[9px] font-medium text-slate-600 mt-[0.5vh]">Full Support</span>
                </div>
              </div>
            </FadeIn>

            {/* Hospital Procurement Benefits */}
            <FadeIn direction="up" delay={0.25} duration={0.4} className="bg-white border border-slate-200/90 rounded-[0.8vw] p-[1vw] space-y-[0.6vh]">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-[0.4vh]">
                <span className="text-[0.85vw] min-text-[11px] font-extrabold text-[#0B3C83] ">Hospital Procurement Benefits</span>
                <span className="text-[0.8vw] min-text-[9px] font-bold text-orange-600">Sri Mathurams Advantage</span>
              </div>
              <div className="grid grid-cols-3 gap-[0.6vw] text-[0.8vw] min-text-[10px] py-[0.4vw]">
                <div className="flex items-start gap-[0.3vw]">
                  <CheckCircle2 className="w-[0.95vw] h-[0.95vw] min-w-[12px] min-h-[12px] text-orange-500 shrink-0 mt-[0.1vh mr-[0.4vw]" />
                  <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">Bulk Quotation</strong> Institutional pricing</span>
                </div>
                <div className="flex items-start gap-[0.3vw]">
                  <CheckCircle2 className="w-[0.95vw] h-[0.95vw] min-w-[12px] min-h-[12px] text-orange-500 shrink-0 mt-[0.1vh mr-[0.4vw]" />
                  <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">Custom Specs</strong> Dimension & color options</span>
                </div>
                <div className="flex items-start gap-[0.3vw]">
                  <CheckCircle2 className="w-[0.95vw] h-[0.95vw] min-w-[12px] min-h-[12px] text-orange-500 shrink-0 mt-[0.1vh] mr-[0.4vw]" />
                  <span className="text-slate-700 font-medium leading-snug"><strong className="text-slate-900 font-bold block">On-Site Setup</strong> Turnkey installation</span>
                </div>
              </div>
            </FadeIn>

            </div>
            

            

            
            {/* Trade & Supply Information Card */}
            <FadeIn direction="up" delay={0.35} duration={0.4} className="bg-slate-50/90 rounded-[0.8vw] border border-slate-200/90 p-[1vw] space-y-[0.8vh]">
              <h2 className="text-[0.95vw] min-text-[13px] font-bold text-[#0B3C83] flex items-center gap-[0.5vw] border-b border-slate-200/80 pb-[0.6vh]">
                <Truck className="w-[1.1vw] h-[1.1vw] min-w-[15px] min-h-[15px] text-orange-500" /> Trade & Supply Information
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[0.7vw] text-[0.78vw] min-text-[11px]">
                <div className="bg-white p-[0.6vw] rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Supply Ability</span>
                  <span className="font-bold text-slate-950 text-[0.85vw] min-text-[12px] mt-[0.2vh] block">350 Units / Mo</span>
                </div>
                <div className="bg-white p-[0.6vw] rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Delivery Time</span>
                  <span className="font-bold text-slate-950 text-[0.85vw] min-text-[12px] mt-[0.2vh] block">30 Days</span>
                </div>
                <div className="bg-white p-[0.6vw] rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Payment Terms</span>
                  <span className="font-bold text-slate-950 text-[0.85vw] min-text-[12px] mt-[0.2vh] block">Cash Advance</span>
                </div>
                <div className="bg-white p-[0.6vw] rounded-[0.5vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-600 font-semibold block">Market</span>
                  <span className="font-bold text-slate-950 text-[0.85vw] min-text-[12px] mt-[0.2vh] block">Tamil Nadu</span>
                </div>
              </div>
            </FadeIn>

            {/* Deal Notice Badge - Regional Service Area Location */}
            <FadeIn direction="up" delay={0.3} duration={0.4} className="relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 text-orange-950 text-[0.8vw] min-text-[11px] font-bold px-[0.9vw] py-[0.7vh] rounded-lg flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-[0.5vw]">
                <span className="tracking-wide">Regional Service Area:</span>
                <span className="text-orange-600 font-extrabold">Tamil Nadu Only</span>
              </div>
              <span className="bg-orange-500 text-white text-[0.6vw] min-text-[10px] px-[0.6vw] py-[0.4vh] rounded-lg uppercase tracking-wider font-semibold">
                DIRECT DELIVERY
              </span>
            </FadeIn>


            {/* Action Buttons Right After Trade & Supply Information */}
            <FadeIn direction="up" delay={0.4} duration={0.4} className="pt-[0.2vh]">
              <div className="flex flex-col sm:flex-row gap-[0.8vw]">
                <Link href="/contact" className="flex-1">
                  <button className="w-full inline-flex items-center justify-center gap-[0.5vw] px-[1.2vw] py-[1.1vh] rounded-[0.7vw] bg-orange-500 hover:bg-orange-600 text-white text-[0.88vw] min-text-[13px] font-bold shadow-md shadow-orange-500/20 active:scale-95 transition-all">
                    Get a Price / Quote <Send className="w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px]" />
                  </button>
                </Link>
                <a href="tel:+919842212345" className="flex-1">
                  <button className="w-full inline-flex items-center justify-center gap-[0.5vw] px-[1.2vw] py-[1.1vh] rounded-[0.7vw] bg-[#0B3C83] hover:bg-[#062454] text-white text-[0.88vw] min-text-[13px] font-bold shadow-md active:scale-95 transition-all">
                    <PhoneCall className="w-[0.9vw] h-[0.9vw] min-w-[13px] min-h-[13px] text-white" /> Call Sales
                  </button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tabbed Product Information Below (Matching 2nd Image: Product Description, Specifications, Trade Info, FAQ) */}
        <ProductTabs product={product} />

        {/* Related Products from the Same Category */}
        {relatedProducts.length > 0 && (
          <FadeIn direction="up" delay={0.1} duration={0.5} className="space-y-[1vh] py-[4vh]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[1.5vw] min-text-[18px] font-extrabold tracking-tight">
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
          </FadeIn>
        )}
      </div>
    </>
  );
}
