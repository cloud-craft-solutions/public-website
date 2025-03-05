import React from 'react';
import { Typography } from '../atoms/Typography';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  company: string;
  description: string;
  image: string;
}

export function CaseStudyCard({ title, company, description, image }: CaseStudyCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <div className="text-blue-400 text-sm font-medium mb-2">{company}</div>
        <Typography variant="h3" className="text-white mb-3">{title}</Typography>
        <Typography variant="p" className="text-gray-400 mb-4">{description}</Typography>
        <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
          Ver case completo
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}