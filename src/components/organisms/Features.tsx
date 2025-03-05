import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';
import { FeatureCard } from '../molecules/FeatureCard';

interface FeaturesProps {
  t: {
    infrastructure: {
      title: string;
      description: string;
    };
    devops: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
  };
}

export function Features({ t }: FeaturesProps) {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-12">
        <FeatureCard
          icon={Server}
          title={t.infrastructure.title}
          description={t.infrastructure.description}
        />
        <FeatureCard
          icon={Zap}
          title={t.devops.title}
          description={t.devops.description}
        />
        <FeatureCard
          icon={Shield}
          title={t.security.title}
          description={t.security.description}
        />
      </div>
    </section>
  );
}