import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Typography } from '../atoms/Typography';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  serviceId: string;
}

export function ServiceCard({ icon: Icon, title, description, serviceId }: ServiceCardProps) {
  return (
    <Link to={`/services/${serviceId}`} className="block">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 transition-all duration-300 group">
        <div className="flex items-start gap-6">
          <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
            <Icon className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <Typography variant="h3" className="text-white mb-3">{title}</Typography>
            <Typography variant="p" className="text-gray-400 leading-relaxed">{description}</Typography>
          </div>
        </div>
      </div>
    </Link>
  );
}