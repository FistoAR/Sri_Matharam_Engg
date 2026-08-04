'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center max-w-xl w-full border border-rose-500/30 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Something Went Wrong</h1>
          <p className="text-slate-400 text-sm">
            An unforeseen application exception occurred while rendering this page.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Button variant="primary" size="md" onClick={() => reset()}>
            <RefreshCw className="w-4 h-4 mr-1" /> Try Reloading Page
          </Button>
        </div>
      </div>
    </div>
  );
}
