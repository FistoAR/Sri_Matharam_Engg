'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ContactFormData } from '@/types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6">
      <h2 className="text-2xl font-bold text-navy-950">Send Message / Request Quote</h2>
      <p className="text-sm text-slate-600">
        Fill in your requirements below. Our medical sales team in Coimbatore will get in touch with you shortly.
      </p>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98422 12345"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@hospital.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="product" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Product / Category
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">Select Category</option>
            <option value="Hospital Beds">Hospital Beds (ICU / Electric / Fowler)</option>
            <option value="Stretchers">Stretchers & Patient Transfer</option>
            <option value="Wheelchairs">Wheelchairs</option>
            <option value="Medical Trolleys">Medical Trolleys & Crash Carts</option>
            <option value="Donor Chairs">Blood Donor Recliner Chairs</option>
            <option value="Surgical Sinks">Surgical Scrub Sinks</option>
            <option value="IV Stands">IV Stands</option>
            <option value="Hospital Furniture">Hospital Furniture (Lockers / Overbed Tables)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify required quantity, hospital location in Tamil Nadu, or custom specifications..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" isLoading={status === 'loading'} className="w-full bg-navy-800 hover:bg-slate-900 text-white font-bold shadow-md">
        Send Message <Send className="w-4 h-4 ml-2 text-orange-400" />
      </Button>
    </form>
  );
}
