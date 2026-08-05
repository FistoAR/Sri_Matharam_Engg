import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center max-w-xl w-full border border-slate-800 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto font-heading font-semibold text-2xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-white">Page Not Found</h1>
          <p className="text-slate-400 text-sm">
            The engineering page or product specification you are searching for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary" size="md">
              <Home className="w-4 h-4 mr-1" /> Return to Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="md">
              <ArrowLeft className="w-4 h-4 mr-1" /> View Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
