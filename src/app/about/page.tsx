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
    <div className="w-full px-[3vw] py-[2vh] space-y-[6vh]">
      <Breadcrumb items={[{ label: 'About Us', url: '/about' }]} />

      {/* Header Banner */}
      <div className="space-y-[1.5vh] text-center max-w-[50vw] mx-auto">
        <div className="inline-flex items-center gap-[0.4vw] px-[0.8vw] py-[0.5vh] rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-500 text-[0.75vw] font-semibold uppercase tracking-wider">
          Engineering Healthcare Since 1997
        </div>
        <h1 className="text-[2.8vw] font-semibold text-navy-950">
          About <span className="text-orange-500">Sri Mathurams Medical Engineering</span>
        </h1>
        <p className="text-slate-700 font-medium text-[1vw] leading-relaxed">
          Premium hospital furniture & medical equipment manufacturer serving hospitals, clinics, and healthcare institutions across Tamil Nadu.
        </p>
      </div>

      {/* Company Overview (History Since 1997, Vision, Mission) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-center">
        <div className="lg:col-span-6 space-y-[2vh]">
          <h2 className="text-[1.8vw] font-semibold text-navy-950">
            Company Overview & History Since 1997
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed text-[0.9vw]">
            Sri Mathurams Medical Engineering was established in 1997 in Coimbatore, Tamil Nadu, with a commitment to manufacturing sturdy, patient-centric hospital furniture and medical equipment.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed text-[0.85vw]">
            Over the past two decades, we have grown into one of Tamil Nadu's most trusted medical equipment suppliers. Combining high-grade raw materials, automated tube bending, and anti-bacterial epoxy coating, we deliver solutions engineered for clinical durability.
          </p>

          <div className="grid grid-cols-2 gap-[1vw] pt-[1.5vh] border-t border-slate-200">
            <div className="flex items-center gap-[0.5vw]">
              <ShieldCheck className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-500" />
              <span className="text-[0.85vw] font-bold text-navy-900">ISO 9001 Certified Quality</span>
            </div>
            <div className="flex items-center gap-[0.5vw]">
              <Building2 className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-500" />
              <span className="text-[0.85vw] font-bold text-navy-900">Coimbatore Manufacturing</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="glass-panel rounded-[1.2vw] p-[0.6vw] overflow-hidden border border-slate-800 relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
              alt="Sri Mathurams Medical Engineering Hospital Furniture Manufacturing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-[0.8vw] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
        <div className="glass-card p-[1.8vw] rounded-[1.2vw] space-y-[1.2vh] bg-white border border-slate-200">
          <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-600">
            <Target className="w-[1.3vw] h-[1.3vw] min-w-[16px] min-h-[16px]" />
          </div>
          <h3 className="text-[1.5vw] font-bold text-navy-950">Our Vision</h3>
          <p className="text-slate-700 font-medium text-[0.85vw] leading-relaxed">
            To be Tamil Nadu's foremost and most reliable manufacturer of hospital furniture, empowering healthcare institutions with ergonomic, durable, and affordable medical engineering products.
          </p>
        </div>

        <div className="glass-card p-[1.8vw] rounded-[1.2vw] space-y-[1.2vh] bg-white border border-slate-200">
          <div className="w-[2.5vw] h-[2.5vw] min-w-[32px] min-h-[32px] rounded-[0.8vw] bg-navy-800/10 border border-navy-500/30 flex items-center justify-center text-navy-800">
            <Sparkles className="w-[1.3vw] h-[1.3vw] min-w-[16px] min-h-[16px] text-orange-500" />
          </div>
          <h3 className="text-[1.5vw] font-bold text-navy-950">Our Mission</h3>
          <p className="text-slate-700 font-medium text-[0.85vw] leading-relaxed">
            To continuously innovate patient care equipment by maintaining strict quality standards, using premium raw materials, and delivering dependable after-sales service across all districts of Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="space-y-[3vh]">
        <div className="text-center max-w-[40vw] mx-auto space-y-[0.8vh]">
          <h2 className="text-[1.8vw] font-semibold text-navy-950">Our Journey</h2>
          <p className="text-slate-700 font-medium text-[0.85vw]">Key milestones of Sri Mathurams Medical Engineering since 1997.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1.5vw]">
          {TIMELINE_EVENTS.map((evt, idx) => (
            <div key={idx} className="glass-card p-[1.2vw] rounded-[1vw] border border-slate-200 space-y-[0.8vh] relative bg-white">
              <span className="text-[1.6vw] font-semibold text-orange-500 font-heading block">{evt.year}</span>
              <h3 className="text-[1.1vw] font-bold text-navy-950">{evt.title}</h3>
              <p className="text-[0.8vw] text-slate-700 font-medium leading-relaxed">{evt.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="glass-panel p-[2vw] rounded-[1.2vw] border border-slate-200 space-y-[2vh] bg-white">
        <div className="max-w-[45vw] space-y-[1vh]">
          <h2 className="text-[1.8vw] font-semibold text-navy-950">Our Team</h2>
          <p className="text-slate-700 font-medium text-[0.9vw] leading-relaxed">
            Our backbone is our dedicated workforce of skilled technicians, welder-fabricators, quality inspectors, and customer support engineers in Coimbatore. Every member of Sri Mathurams is committed to technical excellence and prompt customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1.5vw] pt-[1vh]">
          <div className="glass-card p-[1vw] rounded-[0.8vw] flex items-center gap-[0.8vw] bg-white border border-slate-200">
            <Users className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px] text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-semibold text-navy-950 text-[0.85vw]">Skilled Professionals</div>
              <div className="text-[0.75vw] text-slate-700 font-medium">Certified Medical Engineers</div>
            </div>
          </div>
          <div className="glass-card p-[1vw] rounded-[0.8vw] flex items-center gap-[0.8vw] bg-white border border-slate-200">
            <Factory className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px] text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-semibold text-navy-950 text-[0.85vw]">Experienced Workforce</div>
              <div className="text-[0.75vw] text-slate-700 font-medium">Decades of Manufacturing Skill</div>
            </div>
          </div>
          <div className="glass-card p-[1vw] rounded-[0.8vw] flex items-center gap-[0.8vw] bg-white border border-slate-200">
            <ShieldCheck className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px] text-orange-500 flex-shrink-0" />
            <div>
              <div className="font-semibold text-navy-950 text-[0.85vw]">Customer Support</div>
              <div className="text-[0.75vw] text-slate-700 font-medium">Prompt After-Sales Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure & Quality Policy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw]">
        {/* Infrastructure */}
        <div className="glass-card p-[1.8vw] rounded-[1.2vw] space-y-[1.8vh] bg-white border border-slate-200">
          <h2 className="text-[1.5vw] font-semibold text-navy-950 flex items-center gap-[0.6vw]">
            <Factory className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500" /> Infrastructure
          </h2>
          <ul className="space-y-[1.2vh] text-[0.85vw] text-slate-700 font-medium">
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Manufacturing Unit:</strong> 25,000+ sq. ft. dedicated production plant located in Peelamedu, Coimbatore.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Modern Machinery:</strong> Hydraulic pipe benders, TIG/MIG welding bays, power presses, and 7-tank anti-bacterial powder coating plants.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Quality Testing:</strong> Dedicated load testing, castor endurance rigs, and coating adhesion testing setups.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Storage Facility:</strong> Spacious finished goods warehouse ensuring immediate dispatch for urgent hospital orders.
              </div>
            </li>
          </ul>
        </div>

        {/* Quality Policy */}
        <div className="glass-card p-[1.8vw] rounded-[1.2vw] space-y-[1.8vh] bg-white border border-slate-200">
          <h2 className="text-[1.5vw] font-semibold text-navy-950 flex items-center gap-[0.6vw]">
            <Award className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500" /> Quality Policy
          </h2>
          <ul className="space-y-[1.2vh] text-[0.85vw] text-slate-700 font-medium">
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Premium Raw Materials:</strong> High-tensile ERW steel tubes, 304 grade stainless steel, and prime grade ABS polymers.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Strict Quality Inspection:</strong> 100% dimensional and weld integrity checks prior to surface treatment.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Latest Manufacturing Standards:</strong> Built to ISO 9001:2015 and international medical furniture safety guidelines.
              </div>
            </li>
            <li className="flex items-start gap-[0.6vw]">
              <CheckCircle2 className="w-[1.1vw] h-[1.1vw] min-w-[14px] min-h-[14px] text-orange-500 flex-shrink-0 mt-[0.3vh]" />
              <div>
                <strong className="text-navy-950 font-bold">Reliable Products:</strong> Designed for continuous heavy hospital usage with low maintenance requirements.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Vendor Network & Business Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw]">
        <div className="glass-card p-[1.8vw] rounded-[1.2vw] space-y-[1.2vh] bg-white border border-slate-200">
          <h2 className="text-[1.5vw] font-semibold text-navy-950 flex items-center gap-[0.6vw]">
            <Handshake className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500" /> Vendor Network
          </h2>
          <p className="text-slate-700 font-medium text-[0.85vw] leading-relaxed">
            We maintain long-standing relationships with certified steel mills, electric motor actuator manufacturers, and medical vinyl suppliers. This trusted vendor network guarantees consistent material quality, uncompromised safety, and uninterrupted manufacturing timelines.
          </p>
        </div>

        <div className="glass-panel p-[1.8vw] rounded-[1.2vw] border border-slate-200 bg-white space-y-[1.2vh]">
          <h2 className="text-[1.5vw] font-semibold text-navy-950 flex items-center gap-[0.6vw]">
            <Building2 className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px] text-orange-500" /> Business Information
          </h2>
          <div className="space-y-[0.8vh] text-[0.85vw] text-slate-700 font-medium">
            <div><strong className="text-navy-950 font-bold">Location:</strong> Peelamedu, Coimbatore, Tamil Nadu, India</div>
            <div><strong className="text-navy-950 font-bold">Service Area:</strong> Tamil Nadu Only</div>
            <div><strong className="text-navy-950 font-bold">Target Clients:</strong> Hospitals, Clinics, Nursing Homes, Medical Colleges, Blood Banks & Institutions</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="glass-panel p-[2vw] rounded-[1.2vw] text-center max-w-[50vw] mx-auto space-y-[1.8vh] bg-white border border-slate-200">
        <h2 className="text-[1.8vw] font-semibold text-navy-950">
          Require Hospital Furniture for Your Institution in Tamil Nadu?
        </h2>
        <p className="text-slate-700 font-medium text-[0.85vw] max-w-[35vw] mx-auto">
          Contact Sri Mathurams Medical Engineering team today for factory direct pricing and custom hospital solutions.
        </p>
        <div className="pt-[0.8vh]">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-navy-900 hover:bg-slate-950 text-white font-bold shadow-lg px-[1.5vw] py-[1.2vh] text-[0.9vw] rounded-[0.8vw]">
              Contact Sales Team <Truck className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] ml-[0.5vw] text-orange-400" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
