/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LucideIcon from './LucideIcon';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Home Base', href: '#home' },
    { label: 'What we Stand For', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Client Voices', href: '#faq' },
    { label: 'Get in Touch', href: '#contact' }
  ];

  const primaryServicesList = [
    { label: 'Search Engine Optimization (SEO)', href: '#services' },
    { label: 'Social Media Marketing', href: '#services' },
    { label: 'Google Search Ads', href: '#services' },
    { label: 'Meta Visual Ads', href: '#services' },
    { label: 'Conversion Responsive Websites', href: '#services' }
  ];

  return (
    <footer id="main-agency-footer" className="bg-[#050a14] text-slate-400 border-t border-white/5 font-sans">
      
      {/* Top Footer widget block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-display font-black text-lg shadow">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-white tracking-tight">
                  Vinayak Marketing
                </span>
                <span className="text-[9px] font-mono tracking-widest text-primary uppercase -mt-1">
                  Digital Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Premium digital optimization specialists based in Perinthalmanna, Kerala. We engineer secure scalable lead funnels and conversion dashboards that drive genuine commercial profit.
            </p>

            {/* Social handles */}
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'Linkedin', 'Youtube'].map((sc, i) => (
                <a
                  key={i}
                  href={`https://${sc.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Vinayak Marketing on ${sc}`}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-300"
                >
                  <LucideIcon
                    name={
                      sc === 'Facebook' ? 'Share2' : 
                      sc === 'Instagram' ? 'Sparkles' : 
                      sc === 'Linkedin' ? 'Award' : 'Video'
                    }
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links block */}
          <div className="text-left md:pl-8 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Agency Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services block */}
          <div className="text-left space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Services Offered</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {primaryServicesList.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.href}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-2 rounded bg-slate-800 group-hover:bg-primary transition-colors" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Coordinates col */}
          <div className="text-left space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Coordinates</h3>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <LucideIcon name="MapPin" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed font-light">
                  Perinthalmanna, Malappuram, Kerala, India - Pin: 679322
                </p>
              </div>

              <div className="flex items-center gap-3">
                <LucideIcon name="Mail" className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@vinayakmarketing.com" className="hover:text-primary break-all">
                  info@vinayakmarketing.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <LucideIcon name="Phone" className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub footer copyright bar */}
      <div className="border-t border-white/5 bg-[#03060c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="font-light text-slate-500">
            © {currentYear} Vinayak Marketing. All Rights Reserved.
          </p>
          
          <div className="flex gap-4 font-mono text-[10px] text-slate-500">
            <a href="#home" className="hover:text-primary">PRIVACY CHARTER</a>
            <span>•</span>
            <a href="#home" className="hover:text-primary">ONBOARDING SLA</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
