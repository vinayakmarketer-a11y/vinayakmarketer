/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STATS } from '../data';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-navy-dark via-navy to-navy-dark text-white overflow-hidden">
      {/* Decorative details */}
      <div className="absolute inset-0 bg-primary/2 opacity-40 mix-blend-color-dodge" />
      <div className="absolute -top-10 left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-6 justify-center text-center">
          
          {STATS.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={stat.id}
              className="space-y-3 p-4 relative group"
            >
              {/* Central Floating icon */}
              <div className="mx-auto w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <LucideIcon name={stat.iconName} className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                {/* Big Value Display */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-primary">
                    {stat.value}
                  </span>
                  <span className="text-primary font-bold">{stat.suffix}</span>
                </div>

                {/* Metric Label */}
                <p className="text-xs sm:text-sm font-medium tracking-wider text-slate-300 uppercase font-sans">
                  {stat.label}
                </p>
              </div>

              {/* Backside marker block */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
