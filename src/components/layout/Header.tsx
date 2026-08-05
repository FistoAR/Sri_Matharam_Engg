'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Main header navbar */}
      <div className="px-[3vw]">
        <div className="flex items-center justify-between h-[8vh]">
          
          {/* Logo using /images/logo.png */}
          <Link href="/" className="flex items-center gap-[0.8vw] group focus:outline-none">
            <div className="relative h-[10vh] mt-[01vh] w-auto sm:w-[15vw] overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Sri Mathurams Medical Engineering Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-[2vw]">
            <Link
              href="/"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/') && pathname === '/'
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/about')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/products')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/contact"
              className={`text-[0.8vw] font-bold uppercase transition-colors pb-[0.3vh] ${
                isActive('/contact')
                  ? 'text-orange-600 border-b-2 border-orange-500'
                  : 'text-slate-800 hover:text-orange-600'
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Right Button with Smooth Silver Shimmer & Infinite Arrow Animation */}
          <div>
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-[0.5vw] bg-slate-900/80 backdrop-blur-sm text-white text-[0.8vw] font-semibold px-[1.2vw] py-[1vh] rounded-[0.6vw] shadow-md hover:bg-orange-600 hover:shadow-orange-500/25 hover:shadow-lg active:scale-95 transition-all duration-300 border border-slate-800 hover:border-orange-500 overflow-hidden">
                {/* Silver running shine beam effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-slate-100/40 to-transparent pointer-events-none animate-silver-shine" />

                <span className="relative z-10">Request a quote</span>
                <ChevronRight className="relative z-10 w-[1vw] h-[1vw] min-w-[14px] min-h-[14px] bg-white/20 rounded-full p-[0.1vw] group-hover:bg-white group-hover:text-orange-600 transition-all duration-300 animate-move-right-infinite" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
