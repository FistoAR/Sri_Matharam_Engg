import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy-950 text-slate-400 border-t border-slate-800 pt-[3vh] pb-[2vh]">
      <div className="w-full px-[3vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[2vw] mb-[2vh]">
          
          {/* Col 1 Logo & Description */}
          <div className="lg:col-span-1 space-y-[1vh]">
            <div className="flex items-center gap-[0.5vw]">
              <svg className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px] text-orange-500" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 85 L10 25 L35 55 L50 35 L65 55 L90 25 L90 85 L72 85 L72 50 L58 70 L50 58 L42 70 L28 50 L28 85 Z" />
              </svg>
              <div>
                <span className="font-heading font-semibold text-[0.9vw] text-white block">MATHURAMS</span>
              </div>
            </div>
            <p className="text-[0.75vw] text-slate-400 leading-relaxed">
              Sri Mathurams Medical Engineering is a leading manufacturer of hospital furniture and medical equipment committed to quality, innovation, and customer satisfaction.
            </p>
            <div className="flex space-x-[0.5vw] text-slate-400">
              <span className="p-[0.4vw] bg-slate-900 rounded-full hover:text-white cursor-pointer"><Facebook className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" /></span>
              <span className="p-[0.4vw] bg-slate-900 rounded-full hover:text-white cursor-pointer"><Instagram className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" /></span>
              <span className="p-[0.4vw] bg-slate-900 rounded-full hover:text-white cursor-pointer"><Linkedin className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" /></span>
              <span className="p-[0.4vw] bg-slate-900 rounded-full hover:text-white cursor-pointer"><Youtube className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" /></span>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div>
            <h3 className="text-[0.75vw] font-bold text-white uppercase mb-[1vh]">QUICK LINKS</h3>
            <ul className="space-y-[0.6vh] text-[0.75vw]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 Products */}
          <div>
            <h3 className="text-[0.75vw] font-bold text-white uppercase mb-[1vh]">PRODUCTS</h3>
            <ul className="space-y-[0.6vh] text-[0.75vw]">
              <li><Link href="/products" className="hover:text-white">Hospital Beds</Link></li>
              <li><Link href="/products" className="hover:text-white">Stretchers</Link></li>
              <li><Link href="/products" className="hover:text-white">Wheelchairs</Link></li>
              <li><Link href="/products" className="hover:text-white">Medical Trolleys</Link></li>
              <li><Link href="/products" className="hover:text-white">Donor Chairs</Link></li>
              <li><Link href="/products" className="hover:text-white">Surgical Sinks</Link></li>
              <li><Link href="/products" className="hover:text-white">IV Stands</Link></li>
              <li><Link href="/products" className="hover:text-white">Hospital Furniture</Link></li>
            </ul>
          </div>

          {/* Col 4 Services */}
          <div>
            <h3 className="text-[0.75vw] font-bold text-white uppercase mb-[1vh]">SERVICES</h3>
            <ul className="space-y-[0.6vh] text-[0.75vw]">
              <li>Custom Manufacturing</li>
              <li>Installation & Setup</li>
              <li>AMC & Maintenance</li>
              <li>Repair & Servicing</li>
              <li>Project Consultation</li>
            </ul>
          </div>

          {/* Col 5 Contact Info */}
          <div>
            <h3 className="text-[0.75vw] font-bold text-white uppercase mb-[1vh]">CONTACT INFO</h3>
            <ul className="space-y-[0.8vh] text-[0.75vw]">
              <li className="flex items-center gap-[0.4vw]">
                <span className="text-orange-400 font-bold">📞</span> +91 98422 12345
              </li>
              <li className="flex items-center gap-[0.4vw]">
                <span className="text-orange-400 font-bold">✉️</span> info@srimathuramsmedical.com
              </li>
              <li className="flex items-start gap-[0.4vw]">
                <span className="text-orange-400 font-bold mt-[0.2vh]">📍</span>
                <span>Peelamedu, Coimbatore - 641 004, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-[1.5vh] border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[0.7vw] text-slate-500 gap-[1vw]">
          <p>© {currentYear} Sri Mathurams Medical Engineering. All Rights Reserved.</p>
          <div className="flex space-x-[1vw]">
            <Link href="/contact" className="hover:text-slate-400">Contact Us</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-slate-400">About Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
