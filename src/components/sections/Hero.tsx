'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Building2, Package, Users } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 border-b border-slate-200 min-h-[91.5vh] flex flex-col justify-between">
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
      <div className="relative z-10 w-full px-[3vw] py-[4vh] my-auto flex flex-col justify-center">
        <div className="max-w-[45vw] space-y-[3.5vh]">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-[3vw] font-semibold text-navy-950 leading-snug">
              Engineering Healthcare.<br />
              <span className="text-orange-500 block mt-[1.5vh]">Delivering Excellence Since 1997.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-slate-700 text-[1.1vw] font-medium leading-relaxed max-w-[38vw]">
              Premium Hospital Furniture & Medical Equipment Manufacturer trusted by hospitals, clinics, and healthcare institutions across Tamil Nadu.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-[1vw] pt-[2vh]">
              <Link href="/products">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[0.8vw] px-[1.2vw] py-[1.2vh] rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-[0.4vw]">
                  EXPLORE PRODUCTS <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="bg-navy-950 hover:bg-navy-900 text-white font-semibold text-[0.8vw] px-[1.2vw] py-[1.2vh] rounded-full uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-[0.4vw]">
                  REQUEST A QUOTE <ArrowRight className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Metrics Row Bar */}
      <div className="relative z-10 bg-white border-t border-slate-200 py-[1.5vh]">
        <div className="w-full px-[3vw]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5vw] items-center">
            
            {/* Stat 1 */}
            <FadeIn direction="up" delay={0.1} className="flex items-center gap-[0.8vw] border-r border-slate-200 last:border-none pr-[1vw]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Award className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
              </div>
              <div>
                <div className="text-[1.6vw] font-semibold text-orange-500 font-heading">25+</div>
                <div className="text-[0.75vw] font-bold text-slate-700">Years of Experience</div>
              </div>
            </FadeIn>

            {/* Stat 2 */}
            <FadeIn direction="up" delay={0.2} className="flex items-center gap-[0.8vw] border-r border-slate-200 last:border-none pr-[1vw]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-blue-50 text-navy-900 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
              </div>
              <div>
                <div className="text-[1.6vw] font-semibold text-orange-500 font-heading">500+</div>
                <div className="text-[0.75vw] font-bold text-slate-700">Healthcare Projects</div>
              </div>
            </FadeIn>

            {/* Stat 3 */}
            <FadeIn direction="up" delay={0.3} className="flex items-center gap-[0.8vw] border-r border-slate-200 last:border-none pr-[1vw]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Package className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
              </div>
              <div>
                <div className="text-[1.6vw] font-semibold text-orange-500 font-heading">100+</div>
                <div className="text-[0.75vw] font-bold text-slate-700">Products</div>
              </div>
            </FadeIn>

            {/* Stat 4 */}
            <FadeIn direction="up" delay={0.4} className="flex items-center gap-[0.8vw]">
              <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-blue-50 text-navy-900 flex items-center justify-center flex-shrink-0">
                <Users className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
              </div>
              <div>
                <div className="text-[1.6vw] font-semibold text-orange-500 font-heading">1000+</div>
                <div className="text-[0.75vw] font-bold text-slate-700">Satisfied Customers</div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
