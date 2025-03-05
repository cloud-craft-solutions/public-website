import React from 'react';
import { Typography } from '../atoms/Typography';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl font-bold text-blue-500 mb-2 animate-pulse">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}