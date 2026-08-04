'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Building2, Package, Users } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 border-b border-slate-200">
      {/* Full-width Background Image (right-aligned) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=90"
          alt="Modern Hospital Room & ICU Bed"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-40 md:opacity-100"
        />
        {/* Solid white/slate side block fading cleanly to text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/95 to-slate-100/10 w-full md:w-[70%]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 leading-[1.15] tracking-tight">
              Engineering Healthcare.<br />
              <span className="text-orange-500 block mt-2">Delivering Excellence Since 1997.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Premium Hospital Furniture & Medical Equipment Manufacturer trusted by hospitals, clinics, and healthcare institutions across Tamil Nadu.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-7 py-4 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                  EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs px-7 py-4 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                  REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Metrics Row Bar */}
      <div className="relative z-10 bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            
            {/* Stat 1 */}
            <FadeIn direction="up" delay={0.1} className="flex items-center gap-4 border-r border-slate-200 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-orange-500 font-heading">25+</div>
                <div className="text-xs font-bold text-slate-700">Years of Experience</div>
              </div>
            </FadeIn>

            {/* Stat 2 */}
            <FadeIn direction="up" delay={0.2} className="flex items-center gap-4 border-r border-slate-200 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-900 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-orange-500 font-heading">500+</div>
                <div className="text-xs font-bold text-slate-700">Healthcare Projects</div>
              </div>
            </FadeIn>

            {/* Stat 3 */}
            <FadeIn direction="up" delay={0.3} className="flex items-center gap-4 border-r border-slate-200 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-orange-500 font-heading">100+</div>
                <div className="text-xs font-bold text-slate-700">Products</div>
              </div>
            </FadeIn>

            {/* Stat 4 */}
            <FadeIn direction="up" delay={0.4} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-900 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-orange-500 font-heading">1000+</div>
                <div className="text-xs font-bold text-slate-700">Satisfied Customers</div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
