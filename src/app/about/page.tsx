import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, TIMELINE_EVENTS } from '@/lib/data';
import { constructMetadata } from '@/lib/seo';
import { Award, CheckCircle2, ShieldCheck, Target, Factory, Users, Truck, Sparkles, Building2, Handshake } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About Us | Sri Mathurams Medical Engineering Profile',
  description: `Learn about ${COMPANY_INFO.name}, a premier hospital furniture and medical equipment manufacturer operating since 1997 in Coimbatore, Tamil Nadu.`,
  canonical: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumb items={[{ label: 'About Us', url: '/about' }]} />

      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          Engineering Healthcare Since 1997
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950">
          About <span className="text-orange-500">Sri Mathurams Medical Engineering</span>
        </h1>
        <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
          Premium hospital furniture & medical equipment manufacturer serving hospitals, clinics, and healthcare institutions across Tamil Nadu.
        </p>
      </div>

      {/* Company Overview (History Since 1997, Vision, Mission) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-950">
            Company Overview & History Since 1997
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
            Sri Mathurams Medical Engineering was established in 1997 in Coimbatore, Tamil Nadu, with a commitment to manufacturing sturdy, patient-centric hospital furniture and medical equipment.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed text-sm">
            Over the past two decades, we have grown into one of Tamil Nadu's most trusted medical equipment suppliers. Combining high-grade raw materials, automated tube bending, and anti-bacterial epoxy coating, we deliver solutions engineered for clinical durability.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-navy-900">ISO 9001 Certified Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-navy-900">Coimbatore Manufacturing</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-4 overflow-hidden border border-slate-800 relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
              alt="Sri Mathurams Medical Engineering Hospital Furniture Manufacturing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl space-y-4 bg-white border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-600">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-navy-950">Our Vision</h3>
          <p className="text-slate-700 font-medium text-sm leading-relaxed">
            To be Tamil Nadu's foremost and most reliable manufacturer of hospital furniture, empowering healthcare institutions with ergonomic, durable, and affordable medical engineering products.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl space-y-4 bg-white border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-navy-800/10 border border-navy-500/30 flex items-center justify-center text-navy-800">
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-navy-950">Our Mission</h3>
          <p className="text-slate-700 font-medium text-sm leading-relaxed">
            To continuously innovate patient care equipment by maintaining strict quality standards, using premium raw materials, and delivering dependable after-sales service across all districts of Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-navy-950">Our Journey</h2>
          <p className="text-slate-700 font-medium text-sm">Key milestones of Sri Mathurams Medical Engineering since 1997.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {TIMELINE_EVENTS.map((evt, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-200 space-y-3 relative bg-white">
              <span className="text-2xl font-extrabold text-orange-500 font-heading block">{evt.year}</span>
              <h3 className="text-lg font-bold text-navy-950">{evt.title}</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">{evt.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 bg-white">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-950">Our Team</h2>
          <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
            Our backbone is our dedicated workforce of skilled technicians, welder-fabricators, quality inspectors, and customer support engineers in Coimbatore. Every member of Sri Mathurams is committed to technical excellence and prompt customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="glass-card p-5 rounded-2xl flex items-center gap-3 bg-white border border-slate-200">
            <Users className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-extrabold text-navy-950 text-sm">Skilled Professionals</div>
              <div className="text-xs text-slate-700 font-medium">Certified Medical Engineers</div>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex items-center gap-3 bg-white border border-slate-200">
            <Factory className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-extrabold text-navy-950 text-sm">Experienced Workforce</div>
              <div className="text-xs text-slate-700 font-medium">Decades of Manufacturing Skill</div>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl flex items-center gap-3 bg-white border border-slate-200">
            <ShieldCheck className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-extrabold text-navy-950 text-sm">Customer Support</div>
              <div className="text-xs text-slate-700 font-medium">Prompt After-Sales Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure & Quality Policy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Infrastructure */}
        <div className="glass-card p-8 rounded-3xl space-y-6 bg-white border border-slate-200">
          <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-3">
            <Factory className="w-6 h-6 text-orange-500" /> Infrastructure
          </h2>
          <ul className="space-y-4 text-sm text-slate-700 font-medium">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Manufacturing Unit:</strong> 25,000+ sq. ft. dedicated production plant located in Peelamedu, Coimbatore.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Modern Machinery:</strong> Hydraulic pipe benders, TIG/MIG welding bays, power presses, and 7-tank anti-bacterial powder coating plants.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Quality Testing:</strong> Dedicated load testing, castor endurance rigs, and coating adhesion testing setups.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Storage Facility:</strong> Spacious finished goods warehouse ensuring immediate dispatch for urgent hospital orders.
              </div>
            </li>
          </ul>
        </div>

        {/* Quality Policy */}
        <div className="glass-card p-8 rounded-3xl space-y-6 bg-white border border-slate-200">
          <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-3">
            <Award className="w-6 h-6 text-orange-500" /> Quality Policy
          </h2>
          <ul className="space-y-4 text-sm text-slate-700 font-medium">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Premium Raw Materials:</strong> High-tensile ERW steel tubes, 304 grade stainless steel, and prime grade ABS polymers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Strict Quality Inspection:</strong> 100% dimensional and weld integrity checks prior to surface treatment.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Latest Manufacturing Standards:</strong> Built to ISO 9001:2015 and international medical furniture safety guidelines.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 font-bold">Reliable Products:</strong> Designed for continuous heavy hospital usage with low maintenance requirements.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Vendor Network & Business Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl space-y-4 bg-white border border-slate-200">
          <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-3">
            <Handshake className="w-6 h-6 text-orange-500" /> Vendor Network
          </h2>
          <p className="text-slate-700 font-medium text-sm leading-relaxed">
            We maintain long-standing relationships with certified steel mills, electric motor actuator manufacturers, and medical vinyl suppliers. This trusted vendor network guarantees consistent material quality, uncompromised safety, and uninterrupted manufacturing timelines.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-slate-200 bg-white space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-950 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-orange-500" /> Business Information
          </h2>
          <div className="space-y-2 text-sm text-slate-700 font-medium">
            <div><strong className="text-navy-950 font-bold">Location:</strong> Peelamedu, Coimbatore, Tamil Nadu, India</div>
            <div><strong className="text-navy-950 font-bold">Service Area:</strong> Tamil Nadu Only</div>
            <div><strong className="text-navy-950 font-bold">Target Clients:</strong> Hospitals, Clinics, Nursing Homes, Medical Colleges, Blood Banks & Institutions</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl text-center max-w-4xl mx-auto space-y-6 bg-white border border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
          Require Hospital Furniture for Your Institution in Tamil Nadu?
        </h2>
        <p className="text-slate-700 font-medium text-sm max-w-xl mx-auto">
          Contact Sri Mathurams Medical Engineering team today for factory direct pricing and custom hospital solutions.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-navy-900 hover:bg-slate-950 text-white font-bold shadow-lg">
              Contact Sales Team <Truck className="w-5 h-5 ml-2 text-orange-400" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
