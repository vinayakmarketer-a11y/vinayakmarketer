/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-10 left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-primary/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
            <LucideIcon name="MessageSquareText" className="w-3.5 h-3.5" />
            <span>CLIENT VOICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Loved By Local & Regional Leaders
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light">
            Don't just take our word for it. Hear from leading doctors, academia administrators, and business directors across Malappuram who trust us with their revenue:
          </p>
        </div>

        {/* Testimonials Grid representation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={test.id}
              className="p-8 rounded-2xl bg-navy-light/60 border border-white/5 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between text-left relative group overflow-hidden"
            >
              {/* Giant quote mark back indicator */}
              <div className="absolute top-4 right-6 text-white/5 group-hover:text-primary/10 transition-colors font-serif font-black text-7xl select-none">
                “
              </div>

              <div className="space-y-6 relative z-10">
                {/* Visual Stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <LucideIcon key={i} name="Star" className="w-4 h-4 fill-[#ffb11a] text-[#ffb11a]" />
                  ))}
                </div>

                {/* Literal Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-light">
                  "{test.quote}"
                </p>
              </div>

              {/* Client Profile and metadata */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 relative z-10">
                <img
                  src={test.imageUrl}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shrink-0"
                />
                
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base truncate">
                    {test.name}
                  </h4>
                  
                  <p className="text-xs text-slate-400 font-mono truncate">
                    {test.role}
                  </p>
                  
                  <p className="text-[10px] text-primary font-semibold tracking-wider uppercase truncate mt-0.5">
                    {test.company}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
