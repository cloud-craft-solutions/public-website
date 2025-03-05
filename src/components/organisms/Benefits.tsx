import React from 'react';
import { Headphones, Users, Activity, Clock } from 'lucide-react';
import { Typography } from '../atoms/Typography';
import { BenefitCard } from '../molecules/BenefitCard';

interface BenefitsProps {
  t: {
    title: string;
    subtitle: string;
    benefits: {
      support: {
        title: string;
        description: string;
      };
      engineers: {
        title: string;
        description: string;
      };
      observability: {
        title: string;
        description: string;
      };
      availability: {
        title: string;
        description: string;
      };
    };
  };
}

export function Benefits({ t }: BenefitsProps) {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-white mb-4">{t.title}</Typography>
          <Typography variant="p" className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</Typography>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={Headphones}
            title={t.benefits.support.title}
            description={t.benefits.support.description}
          />
          <BenefitCard
            icon={Users}
            title={t.benefits.engineers.title}
            description={t.benefits.engineers.description}
          />
          <BenefitCard
            icon={Activity}
            title={t.benefits.observability.title}
            description={t.benefits.observability.description}
          />
          <BenefitCard
            icon={Clock}
            title={t.benefits.availability.title}
            description={t.benefits.availability.description}
          />
        </div>
      </div>
    </section>
  );
}