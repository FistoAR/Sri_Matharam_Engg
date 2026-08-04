'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { PRODUCTS, CATEGORIES, WHY_CHOOSE_ITEMS } from '@/lib/data';
import { Award, CheckCircle2, ShieldCheck, HeartPulse, Truck, Headphones, Wrench, ArrowRight, Facebook, Instagram, Linkedin, Youtube, Users } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function HomePage() {
  return (
    <div className="space-y-20 bg-slate-50">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHY CHOOSE SRI MATHURAMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column Text & 3x2 Grid Features */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <FadeIn direction="up" delay={0.1} className="space-y-2 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-navy-800 block">
                WHY CHOOSE
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-navy-950 tracking-tight">
                SRI MATHURAMS
              </h2>
              <div className="w-14 h-1.5 bg-orange-500 rounded-full mt-2" />
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <FadeIn direction="up" delay={0.1} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Award className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  25+ Years of Industry Experience
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Decades of expertise in medical engineering and healthcare solutions.
                </p>
              </FadeIn>

              {/* Feature 2 */}
              <FadeIn direction="up" delay={0.2} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  Quality Manufacturing
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Precision engineered products using premium materials and technology.
                </p>
              </FadeIn>

              {/* Feature 3 */}
              <FadeIn direction="up" delay={0.3} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  ISO Certified Products
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  All our products are manufactured as per ISO standards.
                </p>
              </FadeIn>

              {/* Feature 4 */}
              <FadeIn direction="up" delay={0.4} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  Custom Hospital Solutions
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Tailored solutions designed to meet unique hospital requirements.
                </p>
              </FadeIn>

              {/* Feature 5 */}
              <FadeIn direction="up" delay={0.5} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  Reliable After-Sales Support
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Dedicated support and service to ensure long-term product performance.
                </p>
              </FadeIn>

              {/* Feature 6 */}
              <FadeIn direction="up" delay={0.6} className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-900 border border-blue-200/80 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="text-sm font-extrabold text-navy-950 leading-tight">
                  Fast Delivery Across Tamil Nadu
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Timely delivery and efficient logistics across the region.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Column 3 Photo Collage */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {/* Top Large Photo */}
            <FadeIn direction="left" delay={0.2} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Hospital OT Operating Room"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </FadeIn>
            {/* Bottom 2 Smaller Photos */}
            <div className="grid grid-cols-2 gap-3">
              <FadeIn direction="up" delay={0.3} className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  alt="Sri Mathurams Medical Equipment Manufacturing Line"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.4} className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
                  alt="Quality Inspection and Welding Bay"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.1} className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight uppercase">
            FEATURED PRODUCT CATEGORIES
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </FadeIn>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, idx) => (
            <FadeIn
              key={product.id}
              direction="up"
              delay={0.1 * (idx % 4)}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-extrabold text-navy-950 group-hover:text-orange-600 transition-colors">
                <Link href={`/products/${product.slug}`}>
                  {product.category}
                </Link>
              </h3>
            </FadeIn>
          ))}
        </div>

        {/* View All Products Center Button */}
        <FadeIn direction="up" delay={0.2} className="mt-10 text-center">
          <Link href="/products">
            <button className="bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2">
              VIEW ALL PRODUCTS <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </FadeIn>
      </section>

      {/* 4. ABOUT US (SHORT) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & 4 Icons */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-black uppercase tracking-widest text-navy-800 block mb-1">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
                Trusted Medical Engineering Partner Since 1997
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sri Mathurams Medical Engineering has been manufacturing high-quality hospital furniture and medical equipment for over two decades. We combine durable engineering, premium materials, and practical healthcare design to deliver reliable solutions for hospitals, clinics, laboratories, and healthcare institutions.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <FadeIn direction="up" delay={0.1} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-navy-950">Quality Assurance</div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center mx-auto">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-navy-950">Advanced Technology</div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-navy-950">Skilled Workforce</div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-navy-950">Customer Satisfaction</div>
              </FadeIn>
            </div>
          </div>

          {/* Right Factory Headquarters Photo */}
          <FadeIn direction="left" delay={0.3} className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Sri Mathurams Medical Engineering Factory Building Headquarters"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER (HOSPITAL BACKGROUND OVERLAY) */}
      <section className="relative w-full overflow-hidden bg-navy-950 py-16 text-white border-t border-slate-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=90"
            alt="Hospital Equipment Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn direction="up" delay={0.1} className="space-y-3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Looking for Reliable<br className="hidden sm:inline" /> Hospital Furniture?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              Get customized medical engineering solutions designed for hospitals, clinics, and healthcare institutions.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="flex flex-wrap gap-4 flex-shrink-0 justify-center">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-8 py-4 rounded-full uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-transparent hover:bg-white/10 text-white border border-slate-400 font-extrabold text-xs px-8 py-4 rounded-full uppercase tracking-wider transition-all inline-flex items-center gap-2">
                CONTACT US <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
