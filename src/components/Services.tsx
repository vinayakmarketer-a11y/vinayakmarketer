/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data';
import LucideIcon from './LucideIcon';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'growth' | 'advertising' | 'web' | 'design'>('all');

  const categories = [
    { label: 'All Services', value: 'all' },
    { label: 'Growth & SEO', value: 'growth' },
    { label: 'Paid Advertising', value: 'advertising' },
    { label: 'Web Solutions', value: 'web' },
    { label: 'Creative & Design', value: 'design' }
  ];

  const filteredServices = SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-accent-teal/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
            <LucideIcon name="Settings" className="w-3.5 h-3.5" />
            <span>WHAT WE DELIVER</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our Digital Core Capabilities
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light">
            We build responsive, revenue-focused pipelines that unlock sustainable online demand. Here is how we scale your digital operations:
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium font-display transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-navy border border-white/15 text-slate-300 hover:border-white/30 hover:text-white hover:bg-navy-light'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Services Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="group relative p-8 rounded-2xl bg-navy-light border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-primary/40 transition-all text-left flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative border accent */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-navy-dark group-hover:bg-primary/20 text-white group-hover:text-primary flex items-center justify-center mb-6 transition-colors shadow-sm border border-white/5">
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-primary transition-colors">
                  <span className="font-mono uppercase tracking-wider text-[10px]">
                    {service.category === 'growth' && 'Organic Growth'}
                    {service.category === 'advertising' && 'Paid Acquisition'}
                    {service.category === 'web' && 'Technical Engineering'}
                    {service.category === 'design' && 'Visual Branding'}
                  </span>
                  
                  <span className="flex items-center gap-1 font-semibold text-xs group-hover:translate-x-1 transition-transform">
                    Inquire Blueprint <LucideIcon name="ChevronDown" className="w-3 h-3 -rotate-90" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating conversion encouragement */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-sans text-sm">
            Need a custom package for your enterprise?{' '}
            <a href="#contact" className="text-primary hover:underline font-semibold underline-offset-4">
              Get in touch for custom SLA arrangements
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
