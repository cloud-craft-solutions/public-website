import React from 'react';
import { Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../../content';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showDescription?: boolean;
  lang?: 'pt' | 'en';
}

export function Logo({ size = 'md', className = '', showDescription = false, lang = 'pt' }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10"
  };

  return (
    <Link to="/" className={`flex items-start space-x-2 ${className}`}>
      <Cloud className={`${sizes[size]} text-blue-500`} />
      <div>
        <span className="text-2xl font-bold text-white">Cloudcraft</span>
        {showDescription && (
          <p className="text-sm text-gray-400 mt-1 max-w-xs">
            {content[lang].logo.description}
          </p>
        )}
      </div>
    </Link>
  );
}