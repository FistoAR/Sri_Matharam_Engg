import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-[4vh] pb-[2.5vh]">
      <div className="w-full px-[3vw]">
        {/* Full width 5-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[2.5vw] mb-[4vh] items-start">
          
          {/* Column 1: Brand & Logo (3 cols) */}
          <div className="lg:col-span-3 space-y-[1.5vh]">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-[8vh] w-[14vw] min-w-[160px] overflow-hidden bg-white/95 rounded-[0.6vw] p-[0.4vw]">
                <Image
                  src="/images/logo.png"
                  alt="Sri Mathurams Medical Engineering Logo"
                  fill
                  priority
                  className="object-contain object-left p-[0.3vw]"
                />
              </div>
            </Link>
            <p className="text-[0.85vw] text-slate-400 leading-relaxed font-medium">
              Sri Mathurams Medical Engineering is a premier manufacturer of hospital furniture and medical equipment operating from Coimbatore since 1997.
            </p>
            <div className="flex items-center space-x-[0.6vw] pt-[0.5vh]">
              <a href="#" aria-label="Facebook" className="p-[0.5vw] bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800">
                <Facebook className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </a>
              <a href="#" aria-label="Instagram" className="p-[0.5vw] bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800">
                <Instagram className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-[0.5vw] bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800">
                <Linkedin className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </a>
              <a href="#" aria-label="YouTube" className="p-[0.5vw] bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800">
                <Youtube className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-[1.2vh]">
            <h3 className="text-[0.9vw] font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-[0.6vh] inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-[0.8vh] text-[0.85vw] font-medium">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Products Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Medical Products (3 cols) */}
          <div className="lg:col-span-3 space-y-[1.2vh]">
            <h3 className="text-[0.9vw] font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-[0.6vh] inline-block">
              PRODUCTS
            </h3>
            <ul className="grid grid-cols-2 gap-x-[1vw] gap-y-[0.8vh] text-[0.85vw] font-medium">
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Hospital Beds</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">ICU Cots</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Stretchers</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Medical Trolleys</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Wheelchairs</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Donor Chairs</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">Surgical Sinks</Link></li>
              <li><Link href="/products" className="hover:text-orange-400 transition-colors">IV Stands</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-[1.2vh]">
            <h3 className="text-[0.9vw] font-bold text-white uppercase tracking-wider border-b border-orange-500/40 pb-[0.6vh] inline-block">
              CONTACT INFO
            </h3>
            <ul className="space-y-[1vh] text-[0.85vw] font-medium">
              <li className="flex items-center gap-[0.6vw]">
                <div className="w-[1.8vw] h-[1.8vw] min-w-[24px] min-h-[24px] rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 shrink-0">
                  <Phone className="w-[0.9vw] h-[0.9vw] min-w-[12px] min-h-[12px]" />
                </div>
                <a href="tel:+919842212345" className="hover:text-orange-400 transition-colors">+91 98422 12345 / +91 422 2571234</a>
              </li>
              <li className="flex items-center gap-[0.6vw]">
                <div className="w-[1.8vw] h-[1.8vw] min-w-[24px] min-h-[24px] rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 shrink-0">
                  <Mail className="w-[0.9vw] h-[0.9vw] min-w-[12px] min-h-[12px]" />
                </div>
                <a href="mailto:info@srimathuramsmedical.com" className="hover:text-orange-400 transition-colors">info@srimathuramsmedical.com</a>
              </li>
              <li className="flex items-start gap-[0.6vw]">
                <div className="w-[1.8vw] h-[1.8vw] min-w-[24px] min-h-[24px] rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 shrink-0 mt-[0.2vh]">
                  <MapPin className="w-[0.9vw] h-[0.9vw] min-w-[12px] min-h-[12px]" />
                </div>
                <span>Peelamedu, Coimbatore - 641 004, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & links bar */}
        <div className="pt-[2vh] border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-[0.8vw] text-slate-400 gap-[1vw] font-medium">
          <p>© {currentYear} Sri Mathurams Medical Engineering. All Rights Reserved.</p>
          <div className="flex items-center space-x-[1vw]">
            <Link href="/products" className="hover:text-orange-400 transition-colors">Products</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
