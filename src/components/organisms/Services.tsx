import React from 'react';
import { Cloud, Database, Shield, GitBranch } from 'lucide-react';
import { Typography } from '../atoms/Typography';
import { ServiceCard } from '../molecules/ServiceCard';

interface ServicesProps {
  t: {
    title: string;
    subtitle: string;
    services: {
      consulting: {
        title: string;
        description: string;
      };
      platform: {
        title: string;
        description: string;
      };
      sre: {
        title: string;
        description: string;
      };
      devops: {
        title: string;
        description: string;
      };
    };
  };
}

export function Services({ t }: ServicesProps) {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <Typography variant="h2" className="text-white mb-4">{t.title}</Typography>
        <Typography variant="p" className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</Typography>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={Cloud}
          title={t.services.consulting.title}
          description={t.services.consulting.description}
          serviceId="consulting"
        />
        <ServiceCard
          icon={Database}
          title={t.services.platform.title}
          description={t.services.platform.description}
          serviceId="platform"
        />
        <ServiceCard
          icon={Shield}
          title={t.services.sre.title}
          description={t.services.sre.description}
          serviceId="sre"
        />
        <ServiceCard
          icon={GitBranch}
          title={t.services.devops.title}
          description={t.services.devops.description}
          serviceId="devops"
        />
      </div>
    </section>
  );
}