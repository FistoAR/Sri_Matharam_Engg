import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, MedicalProduct } from '@/lib/data';
import { constructMetadata, generateProductSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductCard } from '@/components/ui/ProductCard';
import { ProductImageZoom } from '@/components/ui/ProductImageZoom';
import { ThumbnailSlider } from '@/components/ui/ThumbnailSlider';
import { SuggestedProductsSlider } from '@/components/ui/SuggestedProductsSlider';
import { ProductFaqAccordion } from '@/components/ui/ProductFaqAccordion';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag, MapPin, Send, PhoneCall, ShieldCheck, Truck, CheckCircle2, HelpCircle, Package, ChevronDown, ArrowRight } from 'lucide-react';

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
      <div className="px-[3vw] py-[1vh] flex flex-col gap-[0.6vw]">
        <Breadcrumb
          items={[
            { label: 'Products', url: '/products' },
            { label: product.name, url: `/products/${product.slug}` },
          ]}
        />

        {/* Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-start">
          {/* Product Gallery Left - Aligned 1:1 with 80vh Right Side */}
          <div className="lg:col-span-6 space-y-[1.5vh] h-[50vh] sm:h-[60vh] lg:h-[83.5vh] flex flex-col justify-between">
            <div className="relative flex-1 min-h-0">
              <ProductImageZoom
                src={product.image}
                alt={`${product.name} - Sri Mathurams Medical Equipment`}
                category={product.category}
              />
              <div className="absolute top-[2vh] left-[1vw] inline-flex items-center gap-[0.5vw] bg-slate-900/80 backdrop-blur-md text-white text-[0.85vw] font-bold px-[1vw] py-[0.6vh] rounded-[0.4vw] border border-white/20 shadow-lg z-10 pointer-events-none">
                <Tag className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-white" />
                <span>{product.category}</span>
              </div>
            </div>

            {/* Smooth 3-Grid Auto-Sliding Thumbnail Slider */}
            <div className="shrink-0">
              <ThumbnailSlider
                images={
                  product.gallery.length >= 3
                    ? product.gallery
                    : [product.image, ...product.gallery, product.image].slice(0, 4)
                }
                productName={product.name}
              />
            </div>
          </div>

          {/* Right Side Content: Responsive Scrollable Panel (80vh on Desktop) */}
          <div className="lg:col-span-6 space-y-[1vh] lg:max-h-[83.5vh] lg:overflow-y-auto pr-[0.8vw] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
            
            <FadeIn direction="up" delay={0.1} duration={0.4}>
              <h1 className="text-[1.8vw] font-semibold text-slate-900">
                {product.name}
              </h1>
            </FadeIn>

            {/* Price & Quote Card */}
            <FadeIn direction="up" delay={0.15} duration={0.4} className="space-y-[1.5vh] relative overflow-hidden">
              <div className="flex flex-wrap items-baseline justify-between gap-[1vw]">
                <div>
                  <div className="text-[1.5vw] font-semibold text-green-600">
                    ₹ 7,500.0 <span className="text-[1vw] font-normal text-slate-500">/ Unit</span>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-[0.5vw] bg-slate-100 text-slate-700 text-[0.85vw] font-semibold px-[0.8vw] py-[0.5vh] rounded-[0.6vw] border border-slate-200">
                    <Package className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-slate-500" />
                    <span>MOQ: <strong className="text-slate-900 font-semibold">1 Unit</strong></span>
                  </div>
                </div>
              </div>

              {/* Deal Notice Badge - Modern Sleek Pill Banner */}
              <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 text-orange-950 text-[0.82vw] font-bold px-[1vw] py-[0.9vh] rounded-lg flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-[0.5vw]">
                  <span className="relative flex h-[0.6vw] w-[0.6vw] min-w-[8px] min-h-[8px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[0.6vw] w-[0.6vw] min-w-[8px] min-h-[8px] bg-orange-500"></span>
                  </span>
                  <span className="tracking-wide">Regional Service Area:</span>
                  <span className="text-orange-600 font-extrabold">Tamil Nadu Only</span>
                </div>
                <span className="bg-orange-500 text-white text-[0.65vw] px-[0.6vw] py-[0.5vh] rounded-lg uppercase tracking-wider font-semibold">
                  Direct  Delivery
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-[1vw]">
                <Link href="/contact" className="flex-1">
                  <button className="w-full inline-flex items-center justify-center gap-[0.5vw] px-[1.2vw] py-[1.2vh] rounded-[0.8vw] bg-orange-500 hover:bg-orange-600 text-white text-[0.9vw] font-bold shadow-md shadow-orange-500/20 active:scale-95 transition-all">
                    Get a Price / Quote <Send className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
                  </button>
                </Link>
                <a href="tel:+919842212345" className="flex-1">
                  <button className="w-full inline-flex items-center justify-center gap-[0.5vw] px-[1.2vw] py-[1.2vh] rounded-[0.8vw] bg-slate-900/80 backdrop-blur-md hover:bg-slate-900 text-white text-[0.9vw] font-bold shadow-md border border-slate-800 active:scale-95 transition-all">
                    <PhoneCall className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-white" /> Call Sales
                  </button>
                </a>
              </div>
            </FadeIn>

            {/* Plain Examination Bed Specifications Grid */}
            <FadeIn direction="up" delay={0.2} duration={0.4} className="bg-white rounded-[0.6vw] border border-slate-200 px-[1.5vw] py-[1vw] shadow-sm space-y-[1.5vh]">
              <h2 className="text-[1vw] font-bold text-slate-950 flex items-center gap-[0.5vw] border-b border-slate-100 pb-[1vh]">
                <ShieldCheck className="w-[1.3vw] h-[1.3vw] min-w-[18px] min-h-[18px] text-orange-500 " /> Key Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[1.5vw] gap-y-[0.8vh] text-[0.85vw]">
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Metal Type</span>
                  <span className="font-medium text-slate-900">Mild Steel</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Castors</span>
                  <span className="font-medium text-slate-900">No (Static)</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Top Surface</span>
                  <span className="font-medium text-slate-900">Perforated CRC Sheet</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Dimension (L*W*H)</span>
                  <span className="font-medium text-slate-900">1830 x 610 x 810 mm</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Load Capacity</span>
                  <span className="font-medium text-slate-900">Up to 150 kg</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Finish</span>
                  <span className="font-medium text-slate-900">Powder Coated</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Weight</span>
                  <span className="font-medium text-slate-900">Approx. 35 kg</span>
                </div>
                <div className="flex justify-between py-[0.8vh] border-b border-slate-100">
                  <span className="text-slate-800 font-semibold">Headrest</span>
                  <span className="font-medium text-slate-900">Fitted Headrest</span>
                </div>
              </div>
            </FadeIn>

            {/* Trade & Supply Information */}
            <FadeIn direction="up" delay={0.25} duration={0.4} className="bg-slate-50 rounded-[0.6vw] border border-slate-200 p-[1.5vw] space-y-[1.5vh]">
              <h2 className="text-[1vw] font-bold text-slate-950 flex items-center gap-[0.5vw] border-b border-slate-200/80 pb-[1vh]">
                <Truck className="w-[1.3vw] h-[1.3vw] min-w-[18px] min-h-[18px] text-orange-500" /> Trade & Supply Information
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[0.8vw] text-[0.8vw]">
                <div className="bg-white p-[0.8vw] rounded-[0.8vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-800 font-semibold block">Supply Ability</span>
                  <span className="font-medium text-black text-[0.9vw] mt-[0.3vh] block">350 Units / Mo</span>
                </div>
                <div className="bg-white p-[0.8vw] rounded-[0.8vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-800 font-semibold block">Delivery Time</span>
                  <span className="font-medium text-black text-[0.9vw] mt-[0.3vh] block">30 Days</span>
                </div>
                <div className="bg-white p-[0.8vw] rounded-[0.8vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-800 font-semibold block">Payment Terms</span>
                  <span className="font-medium text-black text-[0.9vw] mt-[0.3vh] block">Cash Advance</span>
                </div>
                <div className="bg-white p-[0.8vw] rounded-[0.8vw] border border-slate-200 shadow-2xs">
                  <span className="text-slate-800 font-semibold block">Market</span>
                  <span className="font-medium text-black text-[0.9vw] mt-[0.3vh] block">All India</span>
                </div>
              </div>
            </FadeIn>

            {/* Product Overview Description */}
            <FadeIn direction="up" delay={0.3} duration={0.4} className="bg-white rounded-[0.6vw] border border-slate-200 p-[1.5vw] space-y-[1.2vh]">
              <h2 className="text-[1vw] font-bold text-slate-950">About Plain Examination Bed</h2>
              <p className="text-slate-900 text-[0.95vw] leading-relaxed font-medium">
                Over the years of dedication, we have been a renowned manufacturer of Plain Examination Bed in the market. 
                This is used to place a patient in a supine, prone or a seated position to facilitate a medical examination. 
                Plain Examination Bed is acknowledged by our customers for its high functionality, durability and quality.
              </p>

              <div className="pt-[1vh] space-y-[0.8vh]">
                <div className="flex items-start gap-[0.5vw] text-[0.85vw] text-slate-900 font-medium">
                  <CheckCircle2 className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-orange-500 shrink-0 mt-[0.3vh]" />
                  <span><strong className="text-black">Durable Construction:</strong> Built from mild steel with a rectangular frame for constant daily clinical use.</span>
                </div>
                <div className="flex items-start gap-[0.5vw] text-[0.85vw] text-slate-900 font-medium">
                  <CheckCircle2 className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-orange-500 shrink-0 mt-[0.3vh]" />
                  <span><strong className="text-black">Patient Comfort & Safety:</strong> Fitted headrest and removable mattress with washable cover for hygiene.</span>
                </div>
                <div className="flex items-start gap-[0.5vw] text-[0.85vw] text-slate-900 font-medium">
                  <CheckCircle2 className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-orange-500 shrink-0 mt-[0.3vh]" />
                  <span><strong className="text-black">Non-Slip Stability:</strong> Sturdy tubular legs with non-slip feet caps ensure zero slipping during assessments.</span>
                </div>
              </div>
            </FadeIn>

            {/* Frequently Asked Questions (FAQs) */}
            <FadeIn direction="up" delay={0.35} duration={0.4} className="bg-white rounded-[0.6vw] border border-slate-200 p-[1.5vw] space-y-[1.5vh]">
              <h2 className="text-[1vw] font-bold text-slate-950 flex items-center gap-[0.5vw] border-b border-slate-100 pb-[1vh]">
                 Frequently Asked Questions
              </h2>
              <ProductFaqAccordion
                items={[
                  {
                    question: 'How is the plain examination bed maintained for hygiene?',
                    answer: 'The top surface, made from perforated CRC sheet, is easy to sanitize due to its design and finish. The powder coating and removable mattress with a washable cover further support straightforward cleaning.',
                  },
                  {
                    question: 'What are the benefits of a perforated CRC sheet top?',
                    answer: 'A perforated CRC sheet top improves air circulation for patients lying on the bed and simplifies cleaning by preventing liquid accumulation. It also enhances patient comfort and reduces moisture retention.',
                  },
                  {
                    question: 'Where can this bed be used effectively?',
                    answer: 'This plain examination bed is suitable for clinics, hospitals, and nursing homes. Its robust construction and portable build make it ideal for various healthcare settings.',
                  },
                  {
                    question: 'How does the headrest feature enhance patient examinations?',
                    answer: 'The fitted headrest provides extra support for patients during examinations, increasing comfort and enabling proper positioning for medical assessments.',
                  },
                ]}
              />
            </FadeIn>
          </div>
        </div>

        {/* Related Products from the Same Category */}
        {relatedProducts.length > 0 && (
          <FadeIn direction="up" delay={0.1} duration={0.5} className="space-y-[1vh] py-[4vh]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[1.5vw] font-semibold text-navy-950">
                  Related Products in <span className="text-orange-600">{product.category}</span>
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
