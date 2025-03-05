import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Typography } from '../atoms/Typography';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <div className="flex items-center space-x-4 bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
      <Icon className="h-8 w-8 text-blue-400" />
      <div>
        <Typography variant="h4" className="text-white">{title}</Typography>
        <Typography variant="p" className="text-gray-300">{content}</Typography>
      </div>
    </div>
  );
}