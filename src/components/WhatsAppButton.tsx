/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hi Vinayak Marketing, I saw your website and would like to inquire about digital marketing services for my business in Kerala.'
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 group p-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg shadow-[#25d366]/30 hover:shadow-[#25d366]/50 transition-all hover:-translate-y-1"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-md transition-all duration-300 ease-out font-medium text-sm whitespace-nowrap pl-0 group-hover:pl-2">
          Chat With Us
        </span>
        <LucideIcon name="MessageCircle" className="w-6 h-6 shrink-0 fill-current" />
      </a>
    </motion.div>
  );
}
