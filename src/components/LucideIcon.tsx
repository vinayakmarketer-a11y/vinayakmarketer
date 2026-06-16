/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Search,
  Share2,
  TrendingUp,
  Sparkles,
  Laptop,
  Palette,
  FileText,
  Video,
  Users,
  ShoppingBag,
  DraftingCompass,
  UserCheck,
  BarChart3,
  BadgePercent,
  Award,
  Headphones,
  Target,
  MapPin,
  GraduationCap,
  Stethoscope,
  Building2,
  Utensils,
  Store,
  ShoppingCart,
  HardHat,
  Rocket,
  Globe,
  UserPlus,
  CircleDollarSign,
  Megaphone,
  MessageSquareText,
  Sparkle,
  Eye,
  ShieldCheck,
  Briefcase,
  Smile,
  Zap,
  ThumbsUp,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  Menu,
  X,
  Send,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Share2,
  TrendingUp,
  Sparkles,
  Laptop,
  Palette,
  FileText,
  Video,
  Users,
  ShoppingBag,
  DraftingCompass,
  UserCheck,
  BarChart3,
  BadgePercent,
  Award,
  Headphones,
  Target,
  MapPin,
  GraduationCap,
  Stethoscope,
  Building2,
  Utensils,
  Store,
  ShoppingCart,
  HardHat,
  Rocket,
  Globe,
  UserPlus,
  CircleDollarSign,
  Megaphone,
  MessageSquareText,
  Sparkle,
  Eye,
  ShieldCheck,
  Briefcase,
  Smile,
  Zap,
  ThumbsUp,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  Menu,
  X,
  Send,
  MessageCircle,
  AlertCircle
};

interface LucideIconProps {
  name: string;
  className?: string;
  key?: React.Key;
}

export default function LucideIcon({ name, className = "w-6 h-6" }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon in case of mismatch
    return <Sparkle className={className} />;
  }
  return <IconComponent className={className} />;
}
