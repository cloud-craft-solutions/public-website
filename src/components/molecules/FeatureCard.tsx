import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Typography } from '../atoms/Typography';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-800 p-8 rounded-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      <Icon className="h-12 w-12 text-blue-500 mb-4 animate-pulse" />
      <Typography variant="h3" className="text-white mb-4">{title}</Typography>
      <Typography variant="p" className="text-gray-400">{description}</Typography>
    </div>
  );
}