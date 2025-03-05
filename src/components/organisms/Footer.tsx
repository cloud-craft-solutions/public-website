import React from 'react';
import { Twitter, Facebook, Youtube } from 'lucide-react';
import { Logo } from '../atoms/Logo';

interface FooterProps {
  t: {
    company: {
      title: string;
      about: string;
      services: string;
      products: string;
      blog: string;
    };
    legal: {
      title: string;
      terms: string;
      privacy: string;
      legal: string;
    };
    social: {
      title: string;
      twitter: string;
      facebook: string;
      youtube: string;
    };
  };
  lang: 'pt' | 'en';
}

export function Footer({ t, lang }: FooterProps) {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo size="sm" className="mb-6" showDescription={true} lang={lang} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.company.title}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.company.about}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.company.services}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.company.products}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.company.blog}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.legal.title}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.legal.terms}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.legal.privacy}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t.legal.legal}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t.social.title}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Cloudcraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}