/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  category: 'growth' | 'design' | 'web' | 'advertising';
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: number;
  name: string;
  iconName: string;
  tagline: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface ContactFormInput {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  serviceRequested: string;
  message: string;
}

export interface ConsultationWizardInput {
  companyName: string;
  industry: string;
  monthlyBudget: string;
  primaryGoal: string;
  webUrl?: string;
  fullName: string;
  email: string;
  phone: string;
}
