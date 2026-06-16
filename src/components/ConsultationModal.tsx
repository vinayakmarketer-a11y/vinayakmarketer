/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LucideIcon from './LucideIcon';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    primaryGoal: '',
    monthlyBudget: '',
    webUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const industriesList = [
    'Educational Institutions',
    'Healthcare & Clinics',
    'Real Estate',
    'Restaurants & Cafes',
    'Retail Businesses',
    'E-commerce Stores',
    'Construction Companies',
    'Startups & Entrepreneurs',
    'Other Service Domain'
  ];

  const goalsList = [
    { label: 'Improve Google Rankings (SEO)', value: 'SEO' },
    { label: 'Generate High-Quality Leads', value: 'Leads' },
    { label: 'Scale E-commerce / Sales', value: 'Ecommerce' },
    { label: 'Enhance Social Media presence', value: 'Social' },
    { label: 'Professional Branding & Design', value: 'Branding' }
  ];

  const budgetRanges = [
    { label: '₹15,000 - ₹30,000 / month', value: 'Growth' },
    { label: '₹30,000 - ₹75,000 / month', value: 'Pro' },
    { label: '₹75,000+ / month', value: 'Elite' },
    { label: 'Unsure / Need suggestion', value: 'Advisory' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGoalSelect = (goal: string) => {
    setFormData(prev => ({ ...prev, primaryGoal: goal }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, monthlyBudget: budget }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.companyName || !formData.industry)) {
      alert('Please select your company name and industry to customize your strategy.');
      return;
    }
    if (step === 2 && !formData.primaryGoal) {
      alert('Please select your primary digital marketing goal.');
      return;
    }
    if (step === 3 && !formData.monthlyBudget) {
      alert('Please select an estimated monthly budget range.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all contact info fields so our strategist can reach you.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API posting to local container
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Generate dynamic strategic advice based on inputs
  const getStrategicAdvice = () => {
    const { industry, primaryGoal } = formData;
    let suggestions: string[] = [];
    
    if (industry.includes('Education')) {
      suggestions = [
        'Launch hyper-targeted Meta Lead Generation Campaigns for admission roll-outs.',
        'Optimize local SEO keywords for coaching/colleges in Perinthalmanna & Malappuram.',
        'Implement automated WhatsApp conversational responders to engage inquiries immediately.'
      ];
    } else if (industry.includes('Clinic') || industry.includes('Healthcare')) {
      suggestions = [
        'Deploy high-intent Google Search campaigns for critical local medical treatments.',
        'Strengthen Google Business Profile (Map optimization) to capture nearby emergency searches.',
        'Build trust using high-quality video walkthroughs of specialized patient facilities.'
      ];
    } else if (industry.includes('E-commerce') || industry.includes('Retail')) {
      suggestions = [
        'Implement conversion-optimized visual catalogs on Meta Ads (FB & Instagram Sales Campaigns).',
        'Launch Google Shopping (Performance Max) ads targeting ready-to-buy audiences.',
        'Setup automated abandon-cart email and WhatsApp sequences to recover 20%+ lost sales.'
      ];
    } else {
      suggestions = [
        'Develop a high-speed, fast-loading, beautiful responsive website.',
        'Conduct full-scale organic keyword search research to rank on Google in Kerala.',
        'Utilize visual storytelling reels plus patient client case studies to demonstrate real value.'
      ];
    }

    return suggestions;
  };

  const composeWhatsAppInquiry = () => {
    const { fullName, companyName, industry, primaryGoal } = formData;
    const baseText = `Hi Vinayak Marketing, I completed your consultation wizard. I would like to schedule a strategy session.
Name: ${fullName}
Company: ${companyName}
Industry: ${industry}
Goal: ${primaryGoal}`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <AnimatePresence>
      <div id="consultation-wizard-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          id="modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-navy rounded-2xl shadow-2xl overflow-hidden border border-white/5 z-10 text-left"
        >
          {/* Header */}
          <div className="relative p-6 bg-navy-dark text-white flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Free Marketing Assessment</span>
              <h3 className="text-xl md:text-2xl font-display font-bold">Custom Growth Action Strategy</h3>
            </div>
            <button
              id="close-modal-button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <LucideIcon name="X" className="w-5 h-5" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${isSubmitted ? 100 : (step / 4) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
            {!isSubmitted ? (
              <div id="wizard-form-container">
                {/* Step indicator */}
                <div className="flex justify-between text-xs text-slate-400 mb-6 font-mono">
                  <span className={step >= 1 ? "text-primary font-semibold" : ""}>01. Profile</span>
                  <span className={step >= 2 ? "text-primary font-semibold" : ""}>02. Growth Goal</span>
                  <span className={step >= 3 ? "text-primary font-semibold" : ""}>03. Investment</span>
                  <span className={step >= 4 ? "text-primary font-semibold" : ""}>04. Contact Details</span>
                </div>

                {/* Step 1: Business Profile */}
                {step === 1 && (
                  <motion.div
                    id="wizard-step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">Let's craft your custom blueprint. Describe your business:</h4>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Company / Brand Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Malabar Wellness Clinic"
                        className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Business Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                      >
                        <option value="">-- Choose Your Industry --</option>
                        {industriesList.map((ind, i) => (
                          <option key={i} value={ind} className="bg-navy text-white">{ind}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Current website URL / Social profile (Optional)</label>
                      <input
                        type="url"
                        name="webUrl"
                        value={formData.webUrl}
                        onChange={handleInputChange}
                        placeholder="e.g. www.mybusiness.com"
                        className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Digital Goals */}
                {step === 2 && (
                  <motion.div
                    id="wizard-step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">What is your principal online objective?</h4>
                    <span className="text-xs sm:text-sm text-slate-400">We will align our core visual channels and tools accordingly:</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {goalsList.map((g, i) => {
                        const isSelected = formData.primaryGoal === g.value;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleGoalSelect(g.value)}
                            className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-primary bg-primary/10 text-white font-semibold ring-1 ring-primary'
                                : 'border-white/5 hover:border-white/10 hover:bg-white/5 text-slate-300 bg-navy-light/60'
                            }`}
                          >
                            <LucideIcon
                              name={isSelected ? 'CheckCircle' : 'Target'}
                              className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-primary' : 'text-slate-400'}`}
                            />
                            <span>{g.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Budget Setting */}
                {step === 3 && (
                  <motion.div
                    id="wizard-step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">Select your monthly advertising investment:</h4>
                    <span className="text-xs sm:text-sm text-slate-400">This helps calculate realistic ROI scenarios and target audiences.</span>
                    
                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {budgetRanges.map((b, i) => {
                        const isSelected = formData.monthlyBudget === b.value;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleBudgetSelect(b.value)}
                            className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? 'border-primary bg-primary/10 text-white font-semibold ring-1 ring-primary'
                                : 'border-white/5 hover:border-white/10 hover:bg-white/5 text-slate-300 bg-navy-light/60'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <LucideIcon
                                name="CircleDollarSign"
                                className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-slate-400'}`}
                              />
                              <span>{b.label}</span>
                            </div>
                            {isSelected && <LucideIcon name="CheckCircle" className="w-5 h-5 text-primary" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact details to finalize request */}
                {step === 4 && (
                  <motion.div
                    id="wizard-step-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">Almost there! Where should we send your growth action plan?</h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Our marketing strategist will draft an in-depth framework for <strong>{formData.companyName}</strong> and contact you to schedule a screen consultation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text"
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Vikram Nair"
                            className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">WhatsApp / Phone Number *</label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 98765 43210"
                            className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">Business Email Address *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. info@leadcompany.com"
                          className="w-full px-4 py-3 rounded-lg border border-white/5 bg-navy-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-white text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 bg-primary hover:bg-primary-hover text-white py-4 px-6 rounded-xl font-display font-semibold shadow-md shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Analyzing Data Models...
                          </>
                        ) : (
                          <>
                            <LucideIcon name="Rocket" className="w-5 h-5" />
                            Generate Free Strategy Blueprint
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Footer Controls */}
                {step < 4 && (
                  <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-8">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-5 py-2.5 rounded-lg border border-white/10 font-medium text-slate-300 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      Continue
                      <LucideIcon name="ChevronDown" className="w-4 h-4 -rotate-90" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Thank you and strategy insight overview */
              <motion.div
                id="wizard-completion-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950/20 text-emerald-400 border border-emerald-800">
                  <LucideIcon name="CheckCircle" className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">Growth Blueprint Initialized!</h4>
                  <p className="text-slate-300 max-w-md mx-auto">
                    We have successfully analyzed your business parameters. A senior strategist from <strong>Vinayak Marketing</strong> will email your tailored strategy guide shortly.
                  </p>
                </div>

                {/* dynamic strategic insight panel */}
                <div className="bg-navy-light/60 rounded-2xl p-5 border border-white/5 text-left space-y-4 max-w-xl mx-auto">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                    <span className="p-1 px-2.5 rounded bg-primary/10 text-primary text-xs font-mono font-bold uppercase">Dynamic Insights</span>
                    <span className="text-xs text-slate-400 font-mono">For {formData.companyName} ({formData.industry})</span>
                  </div>
                  
                  <h5 className="font-display font-semibold text-white text-sm">Recommended High Impact Initiatives:</h5>
                  <ul className="space-y-3">
                    {getStrategicAdvice().map((adv, index) => (
                      <li key={index} className="flex gap-2.5 text-sm text-slate-300 items-start">
                        <LucideIcon name="Sparkles" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={composeWhatsAppInquiry()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-semibold transition-all shadow-md shadow-[#25d366]/10 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <LucideIcon name="MessageCircle" className="w-5 h-5" />
                    Consult Immediately on WhatsApp
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Close Analyst Drawer
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
