import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Button } from './Button';

interface CookieConsentProps {
  lang: 'pt' | 'en';
}

export function CookieConsent({ lang }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  const content = {
    pt: {
      title: 'Nós usamos cookies',
      description: 'Utilizamos cookies para melhorar sua experiência de navegação e fornecer conteúdo personalizado.',
      accept: 'Aceitar todos',
      reject: 'Rejeitar',
      preferences: 'Preferências',
    },
    en: {
      title: 'We use cookies',
      description: 'We use cookies to enhance your browsing experience and provide personalized content.',
      accept: 'Accept all',
      reject: 'Reject',
      preferences: 'Preferences',
    }
  };

  const t = content[lang];

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Cookie className="h-6 w-6 text-blue-400" />
            <div>
              <h3 className="text-white font-semibold mb-1">{t.title}</h3>
              <p className="text-gray-300 text-sm">{t.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReject}
              className="!text-gray-300 !border-gray-600"
            >
              {t.reject}
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleAccept}
            >
              {t.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}