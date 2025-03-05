import React from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    contactUs: string;
    followGithub: string;
  };
}

export function Hero({ t }: HeroProps) {
  const handleGithubClick = () => {
    window.open('https://github.com/cloud-craft-solutions', '_blank');
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center animate-fade-in-up">
        <Typography variant="h1" className="text-white mb-6 animate-fade-in">
          {t.title}
        </Typography>
        <Typography variant="p" className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.subtitle}
        </Typography>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg" icon="chevron">
            {t.contactUs}
          </Button>
          <Button variant="outline" size="lg" onClick={handleGithubClick}>
            {t.followGithub}
          </Button>
        </div>
      </div>
    </section>
  );
}