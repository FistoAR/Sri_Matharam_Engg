import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProductCard } from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { constructMetadata } from '@/lib/seo';
import { ShieldCheck, HeartPulse } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Products | Hospital Furniture & Medical Equipment Catalogue',
  description: 'Explore Sri Mathurams Medical Engineering product catalogue: Electric ICU Beds, Stretchers, Wheelchairs, Donor Chairs, Surgical Scrub Sinks, IV Stands, and Bedside Lockers.',
  canonical: '/products',
});

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: 'Products', url: '/products' }]} />

      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> ISO 9001 Certified Medical Equipment
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950">
          Hospital Furniture & <span className="text-orange-500">Medical Equipment</span>
        </h1>
        <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
          Premium hospital beds, stretchers, wheelchairs, trolleys, donor chairs, surgical sinks, IV stands, and bedside lockers manufactured in Coimbatore, Tamil Nadu.
        </p>
      </div>

      {/* Product Categories Cards */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navy-950 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card p-6 rounded-2xl border border-slate-200 space-y-3 bg-white hover:border-orange-500 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-600">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">{cat.name}</h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Product Grid */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-navy-950">All Medical Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
