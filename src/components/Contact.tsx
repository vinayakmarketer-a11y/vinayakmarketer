/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const servicesOption = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Google Ads Management',
    'Meta Ads (Facebook & Instagram)',
    'Website Design & Development',
    'Branding & Graphic Design',
    'Content Marketing',
    'Video Marketing',
    'Lead Generation Services',
    'E-commerce Store Optimization'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Must complete Full Name, Phone and Email fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API storage / lead post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        businessName: '',
        serviceRequired: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-7xl h-px bg-white/5" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase tracking-wider">
            <LucideIcon name="Mail" className="w-3.5 h-3.5" />
            <span>LET'S CO-CREATE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Schedule a Strategy Appraisal
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light">
            Have queries on rates, conversion capabilities, or custom onboarding blueprints? Share your details and obtain your free consult:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Vinayak Marketing
              </h3>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Connect with Kerala's responsive growth engineering group. Join our premium portfolio of high-performing local organizations.
              </p>
            </div>

            {/* Structured Details Cards */}
            <div className="space-y-4 font-sans">
              
              {/* Location Card */}
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-light/60">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <LucideIcon name="MapPin" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Address</h4>
                  <p className="text-sm font-semibold text-white mt-1">Perinthalmanna, Malappuram, Kerala, India</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-light/60">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/20 text-[#25d366] flex items-center justify-center shrink-0">
                  <LucideIcon name="Phone" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone & WhatsApp</h4>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-white hover:text-primary mt-1 block">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-light/60">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <LucideIcon name="Mail" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</h4>
                  <a href="mailto:info@vinayakmarketing.com" className="text-sm font-semibold text-white hover:text-primary mt-1 block">
                    info@vinayakmarketing.com
                  </a>
                </div>
              </div>

              {/* Clock Card */}
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-navy-light/60">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <LucideIcon name="Clock" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Business Hours</h4>
                  <p className="text-sm font-semibold text-white mt-1">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p className="text-xs text-slate-400">Sundays: Closed for appraisal</p>
                </div>
              </div>

            </div>

            {/* Google Maps Embed representation */}
            <div className="border border-white/10 rounded-2xl overflow-hidden shadow-sm h-64 relative group">
              <div className="absolute top-3 left-3 bg-navy/90 text-white z-10 px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono shadow flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                OFFICE POSITION - PERINTHALMANNA
              </div>
              
              {/* Actual interactive embedded Google map */}
              <iframe
                title="Vinayak Marketing Office Location Perinthalmanna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.749557457492!2d76.2166668383822!3d10.966665799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cbbfd2da44b1%3A0xe6bf44b6045610ec!2sPerinthalmanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Contact Form Panel */}
          <div className="lg:col-span-7 bg-navy-light/50 border border-white/5 p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white text-left mb-2 tracking-tight">
              Instant Strategic Inquest
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 text-left mb-6 leading-relaxed">
              Fill and submit the quick summary framework below. We evaluate and prepare high profit indicators before contacting.
            </p>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-950/20 border border-emerald-800 p-6 rounded-xl text-center space-y-4"
              >
                <div className="w-12 h-12 bg-emerald-900/35 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                  <LucideIcon name="CheckCircle" className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-medium text-emerald-400">Inquiry Logged Securely!</h4>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Excellent, we have locked in your request. A specialist from modern analytics will reach you during business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="px-4 py-2 border border-emerald-800 hover:bg-emerald-900/50 text-emerald-400 font-medium rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Nair"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 97452 11223"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. anand@clinic.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Health Center"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Service Required *</label>
                  <select
                    required
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm"
                  >
                    <option value="">-- Choose Your Service Topic --</option>
                    {servicesOption.map((ser, i) => (
                      <option key={i} value={ser} className="bg-navy-dark text-white">{ser}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Additional Message Context</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current online metrics, marketing challenges, or budget targets..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-display font-bold shadow-md shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 active:scale-[0.99] transition-all text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching Strategy Log...
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Send" className="w-4 h-4" />
                      Submit Blueprint Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
