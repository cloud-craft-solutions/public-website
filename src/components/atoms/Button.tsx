import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'chevron';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = "rounded-lg transition transform hover:scale-105 flex items-center";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-xl",
    secondary: "bg-white text-blue-600 hover:bg-blue-50 shadow-xl",
    outline: "border border-gray-500 text-white hover:bg-gray-800 hover:shadow-xl"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-3 text-lg"
  };

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'chevron' ? ChevronRight : null;

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {IconComponent && (
        <IconComponent className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}