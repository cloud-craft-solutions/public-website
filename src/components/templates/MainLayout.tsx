import React from 'react';
import { Navigation } from '../organisms/Navigation';
import { Footer } from '../organisms/Footer';
import { BackToTop } from '../atoms/BackToTop';

interface MainLayoutProps {
  children: React.ReactNode;
  lang: 'pt' | 'en';
  onLanguageChange: () => void;
  t: any;
}

export function MainLayout({ children, lang, onLanguageChange, t }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <div className="animated-background" />
      <div className="relative z-10">
        <Navigation lang={lang} onLanguageChange={onLanguageChange} t={t.nav} />
        <main>{children}</main>
        <Footer t={t.footer} lang={lang} />
      </div>
      <BackToTop />
    </div>
  );
}