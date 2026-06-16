/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // Default first FAQ open

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
            <LucideIcon name="Headphones" className="w-3.5 h-3.5" />
            <span>COMMON ENQUIRIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 font-sans font-light max-w-2xl mx-auto">
            Find immediate answers on onboarding schedules, performance guarantees, standard costs, and agency timelines:
          </p>
        </div>

        {/* Accordion Layout block */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary bg-navy shadow-md'
                    : 'border-white/10 bg-navy-light/60 hover:bg-navy-light hover:border-white/20'
                }`}
              >
                {/* Trigger Row Button */}
                <button
                   type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-white text-sm sm:text-base cursor-pointer overlay-none select-none"
                >
                  <span>{faq.question}</span>
                  
                  <div className={`p-1 rounded-full transition-transform duration-250 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-white/5 text-slate-400'}`}>
                    <LucideIcon name="ChevronDown" className="w-4 h-4" />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-slate-300 text-xs sm:text-sm font-sans leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Link Consultation Accent */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-light border border-white/5 text-center max-w-lg mx-auto shadow-md">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a different question not listed here?{' '}
            <a href="#contact" className="text-primary hover:underline font-semibold underline-offset-4">
              Send us a direct message
            </a>{' '}
            or call our Perinthalmanna office.
          </p>
        </div>

      </div>
    </section>
  );
}
