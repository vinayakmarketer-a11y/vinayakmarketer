/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const highlights = [
    'SEO Experts',
    'Google Ads Specialists',
    'Social Media Marketing',
    'Website Development',
    'Lead Generation'
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center bg-gradient-to-b from-navy-dark via-navy to-navy-dark overflow-hidden"
    >
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,112,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
            >
              <LucideIcon name="Sparkles" className="w-3.5 h-3.5 text-primary" />
              <span>Result-Oriented Local Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
            >
              Leading Digital Marketing Agency in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
                Perinthalmanna
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed font-light"
            >
              Grow your business with result-driven digital marketing solutions. We help businesses build a strong online presence, generate quality leads, and increase revenue through innovative marketing strategies.
            </motion.p>

            {/* Checklists */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <LucideIcon name="CheckCircle" className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-display font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-base"
              >
                <LucideIcon name="Rocket" className="w-5 h-5" />
                Get Free Consultation
              </button>
              
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-600 hover:border-white text-slate-300 hover:text-white font-display font-bold transition-colors flex items-center justify-center gap-2 text-base"
              >
                <LucideIcon name="MapPin" className="w-5 h-5" />
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right Hero Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-10 lg:mt-0"
          >
            <div className="relative mx-auto max-w-[450px] aspect-[4/5] rounded-3xl bg-gradient-to-br from-navy-light/90 to-navy-dark/95 border border-white/10 p-6 shadow-2xl overflow-hidden group">
              {/* Internal glow line */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

              {/* Mockup Header tab */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                  vinayak_growth_cube.io
                </div>
              </div>

              {/* Dynamic Content representation */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span className="font-mono">CAMPAIGN ROI ANALYSIS</span>
                    <span className="text-primary font-bold">+342%</span>
                  </div>
                  <div className="h-12 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 px-2 rounded bg-primary/20 text-primary text-[10px] font-mono">META ADS</div>
                      <span className="text-white text-xs font-semibold">Dental Implant Inquiries</span>
                    </div>
                    <LucideIcon name="TrendingUp" className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span className="font-mono">GOOGLE SEO KEYWORDS</span>
                    <span className="text-accent-teal font-bold">POS #1</span>
                  </div>
                  <div className="h-12 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 px-2 rounded bg-accent-teal/20 text-accent-teal text-[10px] font-mono">LOCAL SEO</div>
                      <span className="text-white text-xs font-semibold">Admissions Academies Malappuram</span>
                    </div>
                    <LucideIcon name="Search" className="w-4 h-4 text-accent-teal shrink-0" />
                  </div>
                </div>

                {/* Simulated Chart visual bar details */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 space-y-3">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Conversion Funnel Activity</span>
                  
                  <div className="grid grid-cols-12 gap-1 items-end h-28 pt-2">
                    {[30, 45, 38, 55, 75, 62, 85, 95, 80, 110, 125, 140].map((val, i) => (
                      <div key={i} className="col-span-1 h-full flex flex-col justify-end">
                        <div 
                          className="w-full rounded-t bg-gradient-to-t from-primary to-accent-teal"
                          style={{ height: `${(val / 140) * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                    <span>JAN</span>
                    <span>MAY</span>
                    <span>JUN (CURRENT)</span>
                  </div>
                </div>

                {/* Growth indicator bubble */}
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl p-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <LucideIcon name="Zap" className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold text-white block">Conversion Specialists At Work</span>
                    <span className="text-[10px] text-slate-300">Building scalable local Kerala business channels.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
