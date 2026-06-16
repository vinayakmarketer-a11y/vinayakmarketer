/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { INDUSTRIES } from '../data';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-navy relative overflow-hidden">
      {/* Visual curves */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-white/5" />
      <div className="absolute top-2/3 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
            <LucideIcon name="Target" className="w-3.5 h-3.5" />
            <span>EXPERT SECTOR MATCHING</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Tailored Industry Specializations
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light">
            We adapt our advertising engines to suit the core transactional nuances of your specific ecosystem. Our primary focus areas:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={ind.id}
              className="p-6 rounded-2xl bg-navy-light/60 border border-white/5 hover:border-primary/40 hover:bg-navy-light text-left transition-all h-full flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Sector Specific Icon */}
                <div className="w-10 h-10 rounded-lg bg-navy-dark shadow-md flex items-center justify-center text-primary border border-white/10 mb-5">
                  <LucideIcon name={ind.iconName} className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-display font-semibold text-white mb-2 tracking-tight">
                  {ind.name}
                </h3>
                
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {ind.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-primary font-semibold">
                <span>View Niche Case Study</span>
                <LucideIcon name="ChevronDown" className="w-3 h-3 -rotate-90" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
