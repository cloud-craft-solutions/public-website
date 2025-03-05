import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { LanguageSwitcher } from '../atoms/LanguageSwitcher';

interface NavigationProps {
  lang: 'pt' | 'en';
  onLanguageChange: () => void;
  t: {
    services: string;
    cases: string;
    about: string;
    contact: string;
    getStarted: string;
    servicesList: {
      consulting: string;
      platform: string;
      sre: string;
      devops: string;
    };
  };
}

export function Navigation({ lang, onLanguageChange, t }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { id: 'consulting', label: t.servicesList.consulting },
    { id: 'platform', label: t.servicesList.platform },
    { id: 'sre', label: t.servicesList.sre },
    { id: 'devops', label: t.servicesList.devops }
  ];

  return (
    <nav className="sticky top-0 bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo className="animate-fade-in" />
          
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform font-medium"
            >
              {t.about}
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors hover:scale-105 transform font-medium"
              >
                {t.services}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl py-2 border border-slate-700">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/cases"
              className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform font-medium"
            >
              {t.cases}
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform font-medium"
            >
              {t.contact}
            </Link>
            <Button variant="primary" size="sm">{t.getStarted}</Button>
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pt-4 pb-6">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>

            <div className="space-y-2">
              <div className="text-gray-300 font-medium text-lg">{t.services}</div>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="block text-gray-400 hover:text-white transition-colors pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            <Link
              to="/cases"
              className="text-gray-300 hover:text-white transition-colors font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.cases}
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
            <div className="flex items-center justify-between pt-4">
              <Button variant="primary" size="sm" className="w-full">
                {t.getStarted}
              </Button>
              <LanguageSwitcher 
                currentLang={lang} 
                onLanguageChange={onLanguageChange} 
                className="ml-4" 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}