'use client';

import React, { createContext, useContext, useState } from 'react';
import Image from 'next/image';
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall, Building2 } from 'lucide-react';
import { MedicalProduct } from '@/lib/data';

interface InquiryModalContextType {
  openInquiryModal: (product: { name: string; image?: string; category?: string; price?: string }) => void;
  closeInquiryModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image?: string; category?: string; price?: string } | null>(null);
  
  // Form State
  const [quantity, setQuantity] = useState('1');
  const [unit, setUnit] = useState('Unit/Units');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openInquiryModal = (product: { name: string; image?: string; category?: string; price?: string }) => {
    setSelectedProduct(product);
    setIsSubmitted(false);
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeInquiryModal();
    }, 2800);
  };

  return (
    <InquiryModalContext.Provider value={{ openInquiryModal, closeInquiryModal }}>
      {children}

      {/* Inquiry Modal Popup Overlay */}
      {isOpen && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-[1.5vw] bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div 
            className="bg-white w-full max-w-[32vw] min-w-[340px] rounded-[1.2vw] shadow-2xl border border-slate-200/90 overflow-hidden relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B3C83] via-blue-900 to-[#0B3C83] px-[1.5vw] py-[1.8vh] text-white flex items-center justify-between relative">
              <div>
                <h3 className="text-[1.15vw] min-text-[17px] font-bold text-white tracking-tight leading-tight">Tell us about your requirement</h3>
                <p className="text-[0.72vw] min-text-[10px] text-blue-200 font-medium">Sri Mathurams Direct Factory Inquiry</p>
              </div>
              <button 
                onClick={closeInquiryModal}
                className="w-[2vw] h-[2vw] min-w-[28px] min-h-[28px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shrink-0"
                aria-label="Close modal"
              >
                <X className="w-[1.1vw] h-[1.1vw] min-w-[16px] min-h-[16px]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-[1.5vw] space-y-[1.5vh]">
              {/* Product Preview Card Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-[0.8vw] p-[0.8vw] flex items-center gap-[1vw]">
                <div className="w-[4.2vw] h-[4.2vw] min-w-[54px] min-h-[54px] relative bg-white rounded-[0.6vw] border border-slate-200 p-[0.3vw] shrink-0 flex items-center justify-center overflow-hidden shadow-2xs">
                  <Image 
                    src={selectedProduct.image || '/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp'} 
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-[0.2vw]"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-[0.4vw]">
                    <span className="text-[0.68vw] min-text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                      {selectedProduct.category || 'Hospital Furniture'}
                    </span>
                  </div>
                  <h4 className="text-[0.98vw] min-text-[14px] font-bold text-[#0B3C83] truncate mt-[0.1vh]">
                    {selectedProduct.name}
                  </h4>
                  <span className="text-[0.75vw] min-text-[11px] font-medium text-slate-600 mt-[0.2vh]">
                    Request Custom Quote & Delivery Lead Time
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                /* Success Message View */
                <div className="py-[3vh] px-[1vw] text-center space-y-[1.2vh]">
                  <div className="w-[3.5vw] h-[3.5vw] min-w-[48px] min-h-[48px] rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-[2vw] h-[2vw] min-w-[28px] min-h-[28px]" />
                  </div>
                  <h4 className="text-[1.2vw] min-text-[17px] font-bold text-slate-900">Inquiry Submitted Successfully!</h4>
                  <p className="text-[0.82vw] min-text-[12px] text-slate-600 max-w-[85%] mx-auto">
                    Thank you! Our Tamil Nadu sales engineering team will call you back shortly with official factory pricing.
                  </p>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-[1.2vh]">
                  {/* Quantity & Unit Row */}
                  <div className="grid grid-cols-12 gap-[0.8vw]">
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[0.72vw] min-text-[11px] font-bold text-slate-700">Quantity</label>
                      <input 
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.8vw] py-[0.8vh] text-[0.85vw] min-text-[13px] font-semibold text-slate-900 outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="col-span-6 space-y-[0.3vh]">
                      <label className="text-[0.72vw] min-text-[11px] font-bold text-slate-700">Select Unit</label>
                      <select 
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.8vw] py-[0.8vh] text-[0.85vw] min-text-[13px] font-semibold text-slate-900 outline-none transition-all"
                      >
                        <option value="Unit/Units">Unit/Units</option>
                        <option value="Set/Sets">Set/Sets</option>
                        <option value="Bulk Order">Bulk Hospital Order</option>
                      </select>
                    </div>
                  </div>

                  {/* Hospital / Organization Name */}
                  <div className="space-y-[0.3vh]">
                    <label className="text-[0.72vw] min-text-[11px] font-bold text-slate-700">Hospital / Institution Name (Optional)</label>
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="e.g. Apollo Hospital, KMCH, Clinic"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.8vw] py-[0.8vh] text-[0.85vw] min-text-[13px] text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Requirement Detail */}
                  <div className="space-y-[0.3vh]">
                    <label className="text-[0.72vw] min-text-[11px] font-bold text-slate-700">Additional Detail / Specification</label>
                    <textarea 
                      rows={2}
                      placeholder="Specify dimensions, mattress option, custom color, or delivery location..."
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.8vw] py-[0.8vh] text-[0.82vw] min-text-[12px] text-slate-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Country Code & Mobile Number Row */}
                  <div className="space-y-[0.3vh]">
                    <label className="text-[0.72vw] min-text-[11px] font-bold text-slate-700">Mobile Number (For Quotation Call)</label>
                    <div className="flex gap-[0.5vw]">
                      <select 
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-[35%] bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.6vw] py-[0.8vh] text-[0.82vw] min-text-[12px] font-bold text-slate-900 outline-none"
                      >
                        <option value="+91">🇮🇳 +91 (IN)</option>
                      </select>
                      <input 
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-300 focus:border-[#0B3C83] rounded-[0.6vw] px-[0.8vw] py-[0.8vh] text-[0.85vw] min-text-[13px] font-semibold text-slate-900 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold text-[0.95vw] min-text-[14px] py-[1.2vh] px-[1.2vw] rounded-[0.7vw] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-[0.5vw] mt-[1.5vh]"
                  >
                    <span>Submit Request</span>
                    <Send className="w-[1vw] h-[1vw] min-w-[14px] min-h-[14px]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error('useInquiryModal must be used within an InquiryModalProvider');
  }
  return context;
}
