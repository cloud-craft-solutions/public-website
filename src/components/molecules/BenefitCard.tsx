import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Typography } from '../atoms/Typography';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="text-center p-6 rounded-lg transform hover:scale-105 transition-all duration-300 group">
      <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
        <Icon className="h-8 w-8 text-blue-400" />
      </div>
      <Typography variant="h4" className="text-white mb-3">{title}</Typography>
      <Typography variant="p" className="text-gray-400 leading-relaxed">{description}</Typography>
    </div>
  );
}