/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ServiceItem,
  FeatureItem,
  IndustryItem,
  BenefitItem,
  StatItem,
  Testimonial,
  FAQItem
} from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve Google rankings and attract valuable organic traffic through high-intent keywords and custom optimization strategy optimized for Kerala and global audiences.',
    iconName: 'Search',
    category: 'growth'
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    description: 'Build robust brand awareness and engage loyal audiences across Facebook, Instagram, LinkedIn, and YouTube with targeted localized content.',
    iconName: 'Share2',
    category: 'growth'
  },
  {
    id: 3,
    title: 'Google Ads Management',
    description: 'Generate high-intent leads and maximize transaction ROI through highly optimized, targeted pay-per-click (PPC) and Search Network campaigns.',
    iconName: 'TrendingUp',
    category: 'advertising'
  },
  {
    id: 4,
    title: 'Meta Ads',
    description: 'Run conversion-engineered Facebook and Instagram visual advertising campaigns targeting precise premium customer clusters.',
    iconName: 'Sparkles',
    category: 'advertising'
  },
  {
    id: 5,
    title: 'Website Design & Development',
    description: 'Build fast, mobile-friendly, secure, and SEO-optimized business websites loaded with conversion touchpoints.',
    iconName: 'Laptop',
    category: 'web'
  },
  {
    id: 6,
    title: 'Branding & Graphic Design',
    description: 'Professional visual assets including logos, brand identity guidelines, marketing collateral, social media templates, and banners.',
    iconName: 'Palette',
    category: 'design'
  },
  {
    id: 7,
    title: 'Content Marketing',
    description: 'Establish premium authority and trust. We write high-quality blogs, case studies, and email copy designed to engage and convert readers.',
    iconName: 'FileText',
    category: 'growth'
  },
  {
    id: 8,
    title: 'Video Marketing',
    description: 'Stunning promotional videos, interactive reels, and high-quality YouTube ads that communicate your business value visually.',
    iconName: 'Video',
    category: 'design'
  },
  {
    id: 9,
    title: 'Lead Generation',
    description: 'Acquire high-probability client inquiries via custom landing pages, targeted inbound search funnels, and native lead forms.',
    iconName: 'Users',
    category: 'growth'
  },
  {
    id: 10,
    title: 'E-commerce Marketing',
    description: 'Scale direct-to-consumer online stores using optimized shopping funnels, retargeting ads, and digital shelf optimizations.',
    iconName: 'ShoppingBag',
    category: 'advertising'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Customized Marketing Strategies',
    description: 'We do not believe in one-size-fits-all. Every marketing blueprint is engineered exclusively for your target audience.',
    iconName: 'DraftingCompass'
  },
  {
    id: 2,
    title: 'Experienced Marketing Experts',
    description: 'Your growth is managed by qualified strategists, SEO engineers, and creative content writers in Malappuram.',
    iconName: 'UserCheck'
  },
  {
    id: 3,
    title: 'Transparent Reporting',
    description: 'Receive crystal-clear monthly conversion progress dashboards. No vanity metrics, just real sales and lead counts.',
    iconName: 'BarChart3'
  },
  {
    id: 4,
    title: 'Affordable Packages',
    description: 'Scalable marketing plans optimized for small local establishments, medium scale enterprises, as well as global startups.',
    iconName: 'BadgePercent'
  },
  {
    id: 5,
    title: 'Proven Results',
    description: 'Backed by real success stories, improved Google rankings, and a history of positive client revenue expansion.',
    iconName: 'Award'
  },
  {
    id: 6,
    title: 'Dedicated Client Support',
    description: 'Direct communication channels with your lead growth manager. Fast response times, friendly service.',
    iconName: 'Headphones'
  },
  {
    id: 7,
    title: 'ROI-Focused Campaigns',
    description: 'We focus on key parameters that drive sales and client acquisitions, ensuring every rupee of your budget works for you.',
    iconName: 'Target'
  },
  {
    id: 8,
    title: 'Local Market Expertise',
    description: 'In-depth market intelligence of Perinthalmanna, Malappuram, and the wider Kerala customer behavioral patterns.',
    iconName: 'MapPin'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 1,
    name: 'Educational Institutions',
    tagline: 'Attract students for admissions in colleges, coaching academies, and training centers.',
    iconName: 'GraduationCap'
  },
  {
    id: 2,
    name: 'Healthcare & Clinics',
    tagline: 'Connect patients with expert multi-specialty hospitals, local dental care, and wellness clinics.',
    iconName: 'Stethoscope'
  },
  {
    id: 3,
    name: 'Real Estate',
    tagline: 'Generate high-value buyer leads for builders, developers, and local property dealers.',
    iconName: 'Building2'
  },
  {
    id: 4,
    name: 'Restaurants & Cafes',
    tagline: 'Increase local footfalls and table bookings through visual branding and localized geo-ads.',
    iconName: 'Utensils'
  },
  {
    id: 5,
    name: 'Retail Businesses',
    tagline: 'Drive in-store walk-ins and local community awareness for jewelry, fashion, and hardware showrooms.',
    iconName: 'Store'
  },
  {
    id: 6,
    name: 'E-commerce Stores',
    tagline: 'Boost online purchases globally with high-converting shopping ads and conversion rate improvements.',
    iconName: 'ShoppingCart'
  },
  {
    id: 7,
    name: 'Construction Companies',
    tagline: 'Showcase portfolios, building projects, and structural works to capture commercial contractors.',
    iconName: 'HardHat'
  },
  {
    id: 8,
    name: 'Startups & Entrepreneurs',
    tagline: 'Launch products rapidly with full-funnel digital positioning and aggressive market capturing.',
    iconName: 'Rocket'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: 'Reach a Wider Audience',
    description: 'Break geographical boundaries. Reach customers across Kerala, GCC countries, or globally, directly from your Perinthalmanna office.',
    iconName: 'Globe'
  },
  {
    id: 2,
    title: 'Generate Qualified Leads',
    description: 'Filter out casual window shoppers. Target customers actively searching for products or services that you sell.',
    iconName: 'UserPlus'
  },
  {
    id: 3,
    title: 'Increase Sales & Revenue',
    description: 'Scale up transactions with data-driven funnels that convert traffic from social media and search results into revenue.',
    iconName: 'CircleDollarSign'
  },
  {
    id: 4,
    title: 'Build Brand Awareness',
    description: 'Occupy prime real estate in minds. Stay memorable and visible with continuous brand-reinforcement campaigns.',
    iconName: 'Megaphone'
  },
  {
    id: 5,
    title: 'Improve Customer Engagement',
    description: 'Interact with your clients live. Get real-time reviews, suggestions, and feedback through messaging channels.',
    iconName: 'MessageSquareText'
  },
  {
    id: 6,
    title: 'Stay Ahead of Competitors',
    description: 'Command local market share. Beat outdated competitor offerings who rely entirely on legacy offline channels.',
    iconName: 'Sparkle'
  },
  {
    id: 7,
    title: 'Enhance Online Visibility',
    description: 'Be the first business customers discover when they search for keywords relevant to your agency niches on Google.',
    iconName: 'Eye'
  },
  {
    id: 8,
    title: 'Strengthen Customer Trust',
    description: 'Build brand credibility. Highlight social proof, informative case blueprints, and high rating portfolios.',
    iconName: 'ShieldCheck'
  }
];

export const STATS: StatItem[] = [
  {
    id: 1,
    value: 100,
    suffix: '+',
    label: 'Projects Completed',
    iconName: 'Briefcase'
  },
  {
    id: 2,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    iconName: 'Smile'
  },
  {
    id: 3,
    value: 500,
    suffix: 'K+',
    label: 'Leads Generated',
    iconName: 'Zap'
  },
  {
    id: 4,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    iconName: 'ThumbsUp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Fahad Rahman',
    role: 'Founder & Chief Surgeon',
    company: 'Al-Shifa Dental Clinic, Perinthalmanna',
    quote: 'Vinayak Marketing completely transformed our patient acquisition funnel. We saw a 180% surge in localized cosmetic dental appointment bookings within just three months of launching our Google and Meta Ads campaigns.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Meera Joseph',
    role: 'Director of Operations',
    company: 'Apex Administrative Academy, Malappuram',
    quote: 'For our IAS & Civil Support batches, generating authentic high-intent student leads was a critical challenge. Vinayak Marketing built specialized landing page funnels and robust local SEO that keep our lines active with genuine inquiries year-round.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Haris K. T.',
    role: 'Managing Director',
    company: 'Malabar Premium Woodcraft, Kerala',
    quote: 'Their Web Development and Social Media strategy gave our artisanal furniture brand a premium digital store presence. We now receive retail showroom walk-ins from all across Calicut, Malappuram, and even high-profile GCC buyers.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What digital marketing services do you offer?',
    answer: 'We provide a complete suite of services including Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Search & Display Ads, Meta (Facebook & Instagram) Premium Ad campaigns, Website Design and Custom Web Development, Visual Branding (Logos & Creatives), Content Copywriting, and Data-Driven Local Lead Generation.'
  },
  {
    id: 2,
    question: 'How long does SEO take to show results?',
    answer: 'While paid ads like Google Ads and Meta Ads can generate active clicks and leads almost immediately, search engine optimization (SEO) is a long-term compound asset. Usually, businesses in Perinthalmanna experience visible improvements in search keyword rankings and organic traffic within 3 to 6 months, depending on competitive density.'
  },
  {
    id: 3,
    question: 'Why should I choose Vinayak Marketing?',
    answer: 'We are a dedicated local agency in Perinthalmanna with native-level market intelligence. We focus strictly on Return on Investment (ROI) and real sales rather than empty reach metrics. Our reporting is completely transparent, our billing plans are scalable, and our support is fully accessible with regular in-person updates.'
  },
  {
    id: 4,
    question: 'Do you provide website development services?',
    answer: 'Absolutely. We design and build ultra-fast, responsive, secure, and modern websites tailored specifically for business domains. Every design we deploy is conversion-optimized from scratch and SEO-friendly so you have a powerful foundation for all your advertising campaigns.'
  },
  {
    id: 5,
    question: 'How much does digital marketing cost?',
    answer: 'Our professional packages are modular and scale based on your business size, budget capabilities, and growth requirements. We offer highly competitive local rates starting with friendly plans for startups up to aggressive omni-channel campaigns for established brands. Contact us to get a precise customized quote.'
  }
];
