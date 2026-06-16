/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Info content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
              <LucideIcon name="Briefcase" className="w-3.5 h-3.5" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Your Trusted Digital Marketing Partner in Perinthalmanna
            </h2>

            <div className="h-1 w-20 bg-primary rounded-full" />

            <div className="space-y-4 text-slate-300 font-sans leading-relaxed">
              <p>
                Vinayak Marketing is a professional digital marketing agency based in Perinthalmanna, Kerala. We specialize in helping startups, local businesses, educational institutions, healthcare providers, and e-commerce brands achieve their business goals through effective digital marketing strategies.
              </p>
              <p>
                Our mission is to empower businesses with innovative marketing solutions that drive measurable growth and long-term success. We stand for transparency, execution excellence, and localized insights that turn simple traffic into high-converting revenue channels.
              </p>
            </div>

            {/* Quick credentials bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <LucideIcon name="Award" className="text-primary w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-semibold text-white text-sm">Industry Experts</h4>
                  <p className="text-xs text-slate-400">Qualified digital experts.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-teal/5 border border-accent-teal/10 flex items-center justify-center shrink-0">
                  <LucideIcon name="Target" className="text-accent-teal w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-semibold text-white text-sm">ROI-Centered focus</h4>
                  <p className="text-xs text-slate-400">Driving concrete results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards: Vision & Mission */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-navy-dark to-navy border border-white/5 text-white shadow-xl text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <LucideIcon name="Eye" className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-display font-bold mb-3 tracking-tight">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                To become one of Kerala's most trusted and result-oriented digital marketing agencies, setting benchmarks for excellence in business storytelling and customer acquisition.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy-dark border border-white/5 text-slate-100 shadow-xl text-left relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <LucideIcon name="Rocket" className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-display font-bold mb-3 tracking-tight text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                To provide affordable, innovative, and performance-driven digital marketing services that help businesses grow online, create sustainable local livelihoods, and champion digital literacy in business operations.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
