/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BENEFITS } from '../data';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Visual background widgets */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-accent-teal/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Sticky Panel */}
          <div className="lg:col-span-4 space-y-6 text-left lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
              <LucideIcon name="Sparkle" className="w-3.5 h-3.5" />
              <span>MARKET REALITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Why Digital Marketing Matters
            </h2>

            <div className="h-1.5 w-16 bg-primary rounded-full" />

            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base font-light">
              Traditional local channels are declining in retention. Modern consumers search and buy online. Connecting digitally isn't just an option—it is the lifeblood of current commercial success.
            </p>

            {/* Quick value proposition block */}
            <div className="p-4 rounded-xl bg-navy-light border border-white/5 shadow-md space-y-2">
              <span className="text-xs font-mono font-bold text-accent-teal uppercase block">Global Reach, Local Depth</span>
              <p className="text-xs text-slate-400 leading-normal">
                Command local Kerala customer attention, scale easily to major GCC hubs like Dubai & Jeddah, and operate with maximum transaction precision.
              </p>
            </div>
          </div>

          {/* Right Bento Grid of Benefits */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((ben) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={ben.id}
                className="p-6 rounded-2xl bg-navy-light/60 border border-white/5 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all text-left space-y-4"
              >
                {/* Custom Icon circle */}
                <div className="w-10 h-10 rounded-lg bg-navy-dark border border-white/10 flex items-center justify-center text-primary">
                  <LucideIcon name={ben.iconName} className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
                    {ben.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {ben.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
