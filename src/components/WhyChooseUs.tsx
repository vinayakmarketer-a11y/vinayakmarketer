/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FEATURES } from '../data';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
              <LucideIcon name="ThumbsUp" className="w-3.5 h-3.5" />
              <span>THE VINAYAK ADVANTAGE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
              Why Kerala's Elite Brands Choose Vinayak Marketing
            </h2>
          </div>
          
          <div className="lg:col-span-5 text-left">
            <p className="text-base text-slate-300 font-sans font-light leading-relaxed">
              We separate ourselves from standard marketing groups by prioritizing concrete conversions and data fidelity over empty visual metrics and complex vanity logs.
            </p>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat) => (
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(45, 112, 255, 0.4)' }}
              key={feat.id}
              className="p-6 rounded-2xl bg-navy-light/40 border border-white/5 shadow-lg text-left h-full flex flex-col justify-between transition-colors relative group"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-5 -mt-5 group-hover:scale-125 transition-transform" />
              
              <div>
                {/* Icon box representing features */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6">
                  <LucideIcon name={feat.iconName} className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-display font-semibold mb-3 text-white tracking-tight">
                  {feat.title}
                </h3>
                
                <p className="text-slate-350 text-sm font-sans leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.03] text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                VERIFIED FRAMEWORK
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
