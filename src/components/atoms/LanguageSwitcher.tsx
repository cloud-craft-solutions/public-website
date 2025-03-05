import React from 'react';

interface LanguageSwitcherProps {
  currentLang: 'pt' | 'en';
  onLanguageChange: () => void;
  className?: string;
}

export function LanguageSwitcher({ currentLang, onLanguageChange, className = '' }: LanguageSwitcherProps) {
  return (
    <button 
      onClick={onLanguageChange}
      className={`flex items-center space-x-2 text-gray-300 hover:text-white transition hover:scale-105 transform ${className}`}
      title={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <img 
        src={currentLang === 'pt' 
          ? 'https://flagcdn.com/w40/br.png'
          : 'https://flagcdn.com/w40/us.png'
        }
        alt={currentLang === 'pt' ? 'Português' : 'English'}
        className="w-6 h-4 object-cover rounded"
      />
      <span className="font-medium">{currentLang === 'pt' ? 'PT' : 'EN'}</span>
    </button>
  );
}