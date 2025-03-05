import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Typography } from '../components/atoms/Typography';

interface LegalProps {
  t: {
    legal: {
      terms: {
        title: string;
        lastUpdated: string;
        sections: Array<{
          title: string;
          content: string;
        }>;
      };
      privacy: {
        title: string;
        lastUpdated: string;
        sections: Array<{
          title: string;
          content: string;
        }>;
      };
    };
    about: {
      backButton: string;
    };
  };
}

export function Legal({ t }: LegalProps) {
  const { type } = useParams();
  const content = type === 'privacy' ? t.legal.privacy : t.legal.terms;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          {t.about.backButton}
        </Link>

        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="text-white mb-4">
            {content.title}
          </Typography>
          <Typography variant="p" className="text-gray-400 mb-12">
            {content.lastUpdated}
          </Typography>

          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <div key={index}>
                <Typography variant="h3" className="text-white mb-4">
                  {section.title}
                </Typography>
                <Typography variant="p" className="text-gray-300 leading-relaxed">
                  {section.content}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}