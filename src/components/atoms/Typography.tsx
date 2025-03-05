import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
  className?: string;
}

export function Typography({ variant, children, className = '' }: TypographyProps) {
  const variants = {
    h1: "text-5xl md:text-6xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-semibold",
    p: "text-base"
  };

  const Component = variant;
  
  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
}