import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { CaseStudyCard } from '../components/molecules/CaseStudyCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface CaseStudiesProps {
  t: {
    title: string;
    subtitle: string;
    backButton: string;
    cases: {
      fintech: {
        title: string;
        company: string;
        description: string;
        image: string;
      };
      ecommerce: {
        title: string;
        company: string;
        description: string;
        image: string;
      };
      healthcare: {
        title: string;
        company: string;
        description: string;
        image: string;
      };
    };
  };
}

export function CaseStudies({ t }: CaseStudiesProps) {
  const cases = [
    { id: 'fintech', ...t.cases.fintech },
    { id: 'ecommerce', ...t.cases.ecommerce },
    { id: 'healthcare', ...t.cases.healthcare }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
        <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        {t.backButton}
      </Link>

      <div className="text-center mb-16">
        <Typography variant="h2" className="text-white mb-4">{t.title}</Typography>
        <Typography variant="p" className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t.subtitle}
        </Typography>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((caseStudy) => (
          <Link to={`/cases/${caseStudy.id}`} key={caseStudy.id}>
            <CaseStudyCard {...caseStudy} />
          </Link>
        ))}
      </div>
    </div>
  );
}