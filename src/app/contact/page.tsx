import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContactForm } from '@/components/sections/ContactForm';
import { COMPANY_INFO } from '@/lib/data';
import { constructMetadata } from '@/lib/seo';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Map } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Contact Us | Sri Mathurams Medical Engineering Coimbatore',
  description: `Contact ${COMPANY_INFO.name} in Peelamedu, Coimbatore, Tamil Nadu. Phone: ${COMPANY_INFO.phone}, Email: ${COMPANY_INFO.email}.`,
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <div className="w-full px-[3vw] py-[2vh] space-y-[4vh]">
      <Breadcrumb items={[{ label: 'Contact Us', url: '/contact' }]} />

      {/* Header Banner */}
      <div className="space-y-[1.5vh] text-center max-w-[50vw] mx-auto">
        <div className="inline-flex items-center gap-[0.4vw] px-[0.8vw] py-[0.5vh] rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-[0.75vw] font-bold uppercase tracking-wider">
          <ShieldCheck className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-orange-500" /> Service Area: Tamil Nadu Only
        </div>
        <h1 className="text-[2.8vw] font-semibold text-navy-950">
          Contact <span className="text-orange-500">Sri Mathurams</span>
        </h1>
        <p className="text-slate-700 font-medium text-[1vw] leading-relaxed">
          Reach out to our Coimbatore plant for hospital furniture inquiries, bulk procurement quotes, and product customization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2vw] items-start">
        {/* Left Column Contact Info */}
        <div className="lg:col-span-5 space-y-[2vh]">
          <div className="glass-panel p-[1.8vw] rounded-[1.2vw] space-y-[2vh] border border-slate-200 bg-white">
            <h2 className="text-[1.4vw] font-semibold text-navy-950">Company & Plant Information</h2>

            <div className="space-y-[2vh] text-[0.85vw] text-slate-700 font-medium">
              <div className="flex items-start gap-[0.8vw]">
                <div className="p-[0.6vw] bg-orange-50 text-orange-600 rounded-[0.6vw] border border-orange-200">
                  <MapPin className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
                </div>
                <div>
                  <div className="font-semibold text-navy-950 mb-[0.3vh]">Company Address</div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {COMPANY_INFO.legalName}<br />
                    {COMPANY_INFO.address.street},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.postalCode},<br />
                    {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[0.8vw]">
                <div className="p-[0.6vw] bg-orange-50 text-orange-600 rounded-[0.6vw] border border-orange-200">
                  <Phone className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
                </div>
                <div>
                  <div className="font-semibold text-navy-950 mb-[0.3vh]">Phone Number</div>
                  <p className="text-slate-700 font-medium">
                    Phone: <a href={`tel:${COMPANY_INFO.phone}`} className="text-orange-600 font-bold hover:underline">{COMPANY_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[0.8vw]">
                <div className="p-[0.6vw] bg-orange-50 text-orange-600 rounded-[0.6vw] border border-orange-200">
                  <Mail className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
                </div>
                <div>
                  <div className="font-semibold text-navy-950 mb-[0.3vh]">Email Address</div>
                  <p className="text-slate-700 font-medium">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-orange-600 font-bold hover:underline">{COMPANY_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[0.8vw]">
                <div className="p-[0.6vw] bg-orange-50 text-orange-600 rounded-[0.6vw] border border-orange-200">
                  <Clock className="w-[1.4vw] h-[1.4vw] min-w-[18px] min-h-[18px]" />
                </div>
                <div>
                  <div className="font-semibold text-navy-950 mb-[0.3vh]">Working Hours</div>
                  <p className="text-slate-700 font-medium">
                    Monday – Saturday: 9:00 AM – 6:30 PM IST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed Placeholder */}
          <div className="glass-panel p-[1vw] rounded-[1.2vw] border border-slate-200 bg-white space-y-[1vh]">
            <div className="flex items-center gap-[0.4vw] text-[0.75vw] font-semibold text-navy-950 uppercase tracking-wider px-[0.4vw]">
              <Map className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] text-orange-500" /> Plant Location Map (Coimbatore)
            </div>
            <div className="relative aspect-video rounded-[0.8vw] overflow-hidden bg-slate-900 border border-slate-800">
              <iframe
                title="Sri Mathurams Medical Engineering Coimbatore Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.323566191763!2d76.9942!3d11.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzM1LjAiTiA3NsKwNTknMzkuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
erviner veorin verinv oernvoer v e