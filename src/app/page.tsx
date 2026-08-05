import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { Award, CheckCircle2, ShieldCheck, HeartPulse, Truck, Headphones, Wrench, ArrowRight, Facebook, Instagram, Linkedin, Youtube, Users, Factory, Sparkles, Building2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function HomePage() {
  // Select 1 representative product per category to keep home page clean & curated
  const categoryHighlights = CATEGORIES.map((cat) => {
    const matchedProduct = PRODUCTS.find((p) => p.category === cat.name) || PRODUCTS[0];
    return {
      category: cat,
      product: matchedProduct,
    };
  });
  return (
    <div className="space-y-[6vh] bg-slate-50">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHY CHOOSE SRI MATHURAMS SECTION */}
      <section className="w-full px-[3vw] py-[3vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-stretch">
          
          {/* Left Column Text & 3x2 Grid Features */}
          <div className="lg:col-span-7 flex flex-col justify-between py-[0.5vh]">
            <FadeIn direction="up" delay={0.1} className="space-y-[1vh] mb-[2vh]">
              <span className="text-[2.5vw] font-semibold uppercase text-navy-800 block">
                WHY CHOOSE
              </span>
              <h2 className="text-[1.6vw] font-bold text-navy-950">
                SRI MATHURAMS
              </h2>
              <div className="w-[3.5vw] h-[0.4vh] bg-orange-500 rounded-full mt-[0.5vh]" />
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1.5vw]">
              {/* Feature 1 */}
              <FadeIn direction="up" delay={0.1} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Award className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-navy-900" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  25+ Years of Industry Experience
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  Decades of expertise in medical engineering and healthcare solutions.
                </p>
              </FadeIn>

              {/* Feature 2 */}
              <FadeIn direction="up" delay={0.2} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-orange-50 text-orange-600 border border-orange-200/80 flex items-center justify-center">
                  <ShieldCheck className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-600" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  Certified Quality Standards
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  ISO 9001:2015 certified manufacturing with rigorous multi-stage QA.
                </p>
              </FadeIn>

              {/* Feature 3 */}
              <FadeIn direction="up" delay={0.3} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Factory className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-navy-900" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  In-House Manufacturing Facility
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  25,000+ sq. ft. modern production plant in Peelamedu, Coimbatore.
                </p>
              </FadeIn>

              {/* Feature 4 */}
              <FadeIn direction="up" delay={0.4} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-orange-50 text-orange-600 border border-orange-200/80 flex items-center justify-center">
                  <Users className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-600" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  Customization Support
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  Tailored dimension, castor, and color options for hospital needs.
                </p>
              </FadeIn>

              {/* Feature 5 */}
              <FadeIn direction="up" delay={0.5} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Truck className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-navy-900" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  Prompt Delivery Across Tamil Nadu
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  Dedicated logistics setup for quick dispatch to all districts.
                </p>
              </FadeIn>

              {/* Feature 6 */}
              <FadeIn direction="up" delay={0.6} className="space-y-[0.8vh]">
                <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.6vw] bg-orange-50 text-orange-600 border border-orange-200/80 flex items-center justify-center">
                  <Sparkles className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-600" />
                </div>
                <h3 className="text-[0.9vw] font-semibold text-navy-950">
                  Reliable After-Sales Service
                </h3>
                <p className="text-[0.85vw] text-slate-600 font-medium leading-relaxed">
                  Factory-backed warranty and resident service engineers in TN.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Column Image Banner */}
          <div className="lg:col-span-5 relative flex items-center">
            <FadeIn direction="left" delay={0.2} className="w-full">
              <div className="relative aspect-[4/3] rounded-[1.2vw] overflow-hidden glass-panel border border-slate-200 bg-white p-[0.6vw] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80"
                  alt="Sri Mathurams Medical Engineering Hospital Furniture Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="rounded-[0.8vw] object-cover"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES SECTION */}
      <section className="w-full px-[3vw]">
        <FadeIn direction="up" delay={0.1} className="text-center space-y-[1vh] mb-[2vh]">
          <h2 className="text-[1vw] font-bold text-navy-950 uppercase">
            FEATURED PRODUCT CATEGORIES
          </h2>
          <div className="w-[4vw] h-[0.4vh] bg-orange-500 mx-auto rounded-full" />
        </FadeIn>

        {/* Curated Category Highlight Cards Grid (1 per Category) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5vw]">
          {categoryHighlights.map(({ category, product }, idx) => (
            <FadeIn
              key={category.id}
              direction="up"
              delay={0.1 * (idx % 3)}
              className="bg-white rounded-[1vw] p-[1.2vw] shadow-xs border border-slate-200 text-left space-y-[1.2vh] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full rounded-[0.8vw] bg-white overflow-hidden flex items-center justify-center p-[0.6vw] border border-slate-100">
                <Image
                  src={product.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-[0.8vw] group-hover:scale-105 transition-transform duration-500"
                />
            
              </div>

              <div className="space-y-[0.4vh]">
                <h3 className="text-[1vw] font-bold text-navy-950 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-[0.85vw] text-slate-500 font-medium line-clamp-1">
                  {category.description}
                </p>
              </div>

              <Link href="/products" className="pt-[0.5vh] inline-block">
                <span className="inline-flex items-center gap-[0.3vw] text-[0.9vw] font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Explore Category <ArrowRight className="w-[0.9vw] h-[0.9vw] min-w-[12px] min-h-[12px]" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* View All Products Center Button */}
        <FadeIn direction="up" delay={0.2} className="mt-[2vh] text-center">
          <Link href="/products">
            <button className="bg-navy-950 hover:bg-navy-900 text-white font-semibold text-[0.9vw] px-[1.5vw] py-[1.2vh] rounded-full uppercase shadow-md hover:shadow-lg transition-all inline-flex items-center gap-[0.4vw]">
              VIEW ALL PRODUCTS <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
            </button>
          </Link>
        </FadeIn>
      </section>

      {/* 4. ABOUT US (SHORT) SECTION */}
      <section className="w-full px-[3vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-center">
          
          {/* Left Text & 4 Icons */}
          <div className="lg:col-span-6 space-y-[2vh]">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-[0.9vw] font-semibold uppercase text-navy-800 block mb-[0.5vh]">
                ABOUT US
              </span>
              <h2 className="text-[1vw] font-bold text-navy-950">
                Trusted Medical Engineering Partner Since 1997
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-slate-700 text-[0.85vw] font-medium leading-relaxed">
                Sri Mathurams Medical Engineering is a premier manufacturer of hospital furniture and medical equipment operating from Peelamedu, Coimbatore. Since 1997, we have been engineering patient-centric solutions designed for durability, ease of maintenance, and safety.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-[1vw] pt-[1vh]">
              <FadeIn direction="up" delay={0.1} className="flex items-center gap-[0.6vw] bg-white p-[0.8vw] rounded-[0.6vw] border border-slate-200">
                <Award className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500 flex-shrink-0" />
                <span className="text-[0.85vw] font-semibold text-navy-950">ISO 9001 Quality Certified</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="flex items-center gap-[0.6vw] bg-white p-[0.8vw] rounded-[0.6vw] border border-slate-200">
                <Building2 className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500 flex-shrink-0" />
                <span className="text-[0.85vw] font-semibold text-navy-950">25,000+ sq. ft. Plant</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="flex items-center gap-[0.6vw] bg-white p-[0.8vw] rounded-[0.6vw] border border-slate-200">
                <Users className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500 flex-shrink-0" />
                <span className="text-[0.85vw] font-semibold text-navy-950">500+ Hospital Projects</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.4} className="flex items-center gap-[0.6vw] bg-white p-[0.8vw] rounded-[0.6vw] border border-slate-200">
                <Truck className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500 flex-shrink-0" />
                <span className="text-[0.85vw] font-semibold text-navy-950">Tamil Nadu Service</span>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.3} className="pt-[1vh]">
              <Link href="/about">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[0.9vw] px-[1.2vw] py-[1.2vh] rounded-full uppercase shadow-md hover:shadow-lg transition-all inline-flex items-center gap-[0.4vw]">
                  READ OUR STORY <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
                </button>
              </Link>
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[1.2vw] overflow-hidden glass-panel border border-slate-200 bg-white p-[0.6vw] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Sri Mathurams Medical Engineering Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-[0.8vw] object-cover"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="relative rounded-[1.2vw] overflow-hidden glass-panel border border-slate-800 py-[3vh] shadow-2xl mx-[3vw]">
        {/* Dark Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80"
            alt="Sri Mathurams Medical Equipment Manufacturing Background"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-50 contrast-125"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/90" />
        </div>

        <div className="relative z-10 w-full px-[3vw] flex flex-col lg:flex-row items-center justify-between gap-[2vw]">
          <FadeIn direction="up" delay={0.1} className="space-y-[1vh] text-center lg:text-left">
            <h2 className="text-[1vw] font-bold text-white">
              Looking for Reliable<br className="hidden sm:inline" /> Hospital Furniture?
            </h2>
            <p className="text-slate-300 text-[0.85vw] font-normal max-w-[35vw]">
              Get customized medical engineering solutions designed for hospitals, clinics, and healthcare institutions.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="flex flex-wrap gap-[1vw] flex-shrink-0 justify-center">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[0.9vw] px-[1.5vw] py-[1.2vh] rounded-full uppercase shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-[0.4vw]">
                REQUEST A QUOTE <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-transparent hover:bg-white/10 text-white border border-slate-400 font-semibold text-[0.9vw] px-[1.5vw] py-[1.2vh] rounded-full uppercase transition-all inline-flex items-center gap-[0.4vw]">
                CONTACT US <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
