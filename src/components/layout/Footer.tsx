import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-navy-950 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 Logo & Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 85 L10 25 L35 55 L50 35 L65 55 L90 25 L90 85 L72 85 L72 50 L58 70 L50 58 L42 70 L28 50 L28 85 Z" />
              </svg>
              <div>
                <span className="font-heading font-black text-base text-white block">MATHURAMS</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sri Mathurams Medical Engineering is a leading manufacturer of hospital furniture and medical equipment committed to quality, innovation, and customer satisfaction.
            </p>
            <div className="flex space-x-3 text-slate-400">
              <span className="p-2 bg-slate-900 rounded-full hover:text-white cursor-pointer"><Facebook className="w-4 h-4" /></span>
              <span className="p-2 bg-slate-900 rounded-full hover:text-white cursor-pointer"><Instagram className="w-4 h-4" /></span>
              <span className="p-2 bg-slate-900 rounded-full hover:text-white cursor-pointer"><Linkedin className="w-4 h-4" /></span>
              <span className="p-2 bg-slate-900 rounded-full hover:text-white cursor-pointer"><Youtube className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 Products */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-xs">
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
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">SERVICES</h3>
            <ul className="space-y-2 text-xs">
              <li>Custom Manufacturing</li>
              <li>Installation & Setup</li>
              <li>AMC & Maintenance</li>
              <li>Repair & Servicing</li>
              <li>Project Consultation</li>
            </ul>
          </div>

          {/* Col 5 Contact Info */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">CONTACT INFO</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">📞</span> +91 94433 77755
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">✉️</span> info@mathuramsindia.com
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold mt-0.5">📍</span>
                <span>No. 45, Industrial Estate, Coimbatore - 641 021, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <p>© {currentYear} Sri Mathurams Medical Engineering. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-400">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
