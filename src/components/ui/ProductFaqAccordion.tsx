'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFaqAccordionProps {
  items: FAQItem[];
}

export function ProductFaqAccordion({ items }: ProductFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-[1vh]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-[0.6vw] overflow-hidden bg-slate-50/50 transition-all duration-300 shadow-2xs hover:border-slate-300"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between px-[1.2vw] py-[1.5vh] text-left font-bold text-[0.95vw] text-slate-950 focus:outline-none cursor-pointer select-none"
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex-shrink-0 ml-[0.5vw]"
              >
                <ChevronDown className="w-[1.2vw] h-[1.2vw] min-w-[16px] min-h-[16px] text-orange-500" />
              </motion.div>
            </button>

            {/* Accordion Content with Smooth Animated Height Expansion */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="overflow-hidden"
                >
                  <p className="px-[1.2vw] pb-[1.5vh] text-slate-900 text-[0.9vw] leading-relaxed font-medium pt-[0.8vh] border-t border-slate-200/60">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
