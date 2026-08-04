import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, MedicalProduct } from '@/lib/data';
import { constructMetadata, generateProductSchema } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, Send, Package, Layers } from 'lucide-react';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return constructMetadata({ title: 'Product Not Found', noIndex: true });
  }

  return constructMetadata({
    title: `${product.name} | Hospital Equipment`,
    description: product.description,
    canonical: `/products/${product.slug}`,
    ogImage: product.image,
  });
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) as MedicalProduct | undefined;

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug && (product.relatedProductSlugs?.includes(p.slug) || p.category === product.category)
  ).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <Breadcrumb
          items={[
            { label: 'Products', url: '/products' },
            { label: product.name, url: `/products/${product.slug}` },
          ]}
        />

        {/* Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Gallery Left */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-slate-800">
              <Image
                src={product.image}
                alt={`${product.name} - Sri Mathurams Medical Equipment`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </div>
            </div>

            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden glass-card border border-slate-800">
                    <Image
                      src={img}
                      alt={`${product.name} View ${i + 1}`}
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Right */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> ISO 9001 Certified Medical Grade
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                {product.name}
              </h1>
              <p className="text-amber-400 text-base font-semibold mt-2">
                {product.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-4">
              {product.fullDescription}
            </p>

            {/* Material Details & Available Sizes */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <Layers className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950 font-bold block">Material Details:</strong>
                  <span>{product.materialDetails}</span>
                </div>
              </div>
              {product.availableSizes && (
                <div className="flex items-start gap-3 text-sm text-slate-700 pt-2 border-t border-slate-200">
                  <Package className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 font-bold block">Available Sizes & Dimensions:</strong>
                    <span>{product.availableSizes}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Enquiry Box */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-lg">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-600 font-medium">Delivery Region</span>
                <span className="text-navy-900 font-extrabold">Fast Delivery Across Tamil Nadu Only</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="flex-1">
                  <Button variant="primary" size="lg" className="w-full font-bold bg-navy-900 hover:bg-slate-950 text-white">
                    Submit Enquiry <Send className="w-4 h-4 ml-2 text-orange-400" />
                  </Button>
                </Link>
                <a href="tel:+919842212345" className="flex-1">
                  <Button variant="secondary" size="lg" className="w-full bg-slate-100 hover:bg-slate-200 border-slate-300 text-navy-950 font-bold">
                    <PhoneCall className="w-4 h-4 mr-1 text-orange-600" /> Call Sales
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Key Features Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-200">
          
          {/* Specifications Table */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-navy-950 flex items-center gap-2">
              Product Specifications
            </h2>
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <table className="w-full text-left text-sm text-slate-700 font-medium">
                <tbody className="divide-y divide-slate-200">
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-3.5 font-semibold text-slate-600 w-1/2">{spec.label}</td>
                      <td className="px-6 py-3.5 font-bold text-navy-950">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features & Applications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-950">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-950">Applications</h2>
              <ul className="space-y-2">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-navy-900 font-bold bg-white px-4 py-2.5 rounded-xl border border-slate-200">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-slate-800">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Related Medical Products</h2>
              <Link href="/products" className="text-sm text-amber-400 hover:underline">
                View All Catalogue →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
