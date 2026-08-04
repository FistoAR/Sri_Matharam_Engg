import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Main header navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Orange Double-M Icon */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex items-center gap-2">
              <svg className="w-10 h-10 text-orange-500" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 85 L10 25 L35 55 L50 35 L65 55 L90 25 L90 85 L72 85 L72 50 L58 70 L50 58 L42 70 L28 50 L28 85 Z" />
              </svg>
              <div>
                <span className="font-heading font-black text-xl tracking-tight text-navy-950 block leading-tight">
                  SRI MATHURAMS
                </span>
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-500 block">
                  MEDICAL ENGINEERING
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-9">
            <Link href="/" className="text-xs font-bold uppercase tracking-wider text-orange-600 border-b-2 border-orange-500 pb-1">
              HOME
            </Link>
            <Link href="/about" className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-orange-600 transition-colors pb-1">
              ABOUT US
            </Link>
            <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-orange-600 transition-colors pb-1">
              PRODUCTS
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-orange-600 transition-colors pb-1">
              CONTACT US
            </Link>
          </nav>

          {/* Right Orange Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-full uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-1.5">
                REQUEST A QUOTE <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
