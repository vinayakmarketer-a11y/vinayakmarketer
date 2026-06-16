/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Industries', href: '#industries' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation-bar"
        className={`fixed top-0 left-0 right-0 z-45 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-black text-xl shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-display font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                  Vinayak Marketing
                </span>
                <span className="text-[10px] font-mono tracking-widest text-accent-teal uppercase -mt-1">
                  Digital Agency
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:underline decoration-primary underline-offset-4 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-display font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-primary/30 active:scale-95 cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[60px] z-40 bg-navy-dark/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-24 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-slate-200 hover:text-white hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full max-w-xs mt-4 px-6 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-display font-semibold shadow-md shadow-primary/20 cursor-pointer"
              >
                Get Free Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
