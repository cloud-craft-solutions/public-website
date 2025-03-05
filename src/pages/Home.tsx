import React from 'react';
import { Hero } from '../components/organisms/Hero';
import { Features } from '../components/organisms/Features';
import { Services } from '../components/organisms/Services';
import { Benefits } from '../components/organisms/Benefits';
import { Stats } from '../components/organisms/Stats';
import { Contact } from '../components/organisms/Contact';
import { TechStack } from '../components/organisms/TechStack';

interface HomeProps {
  t: any;
}

export function Home({ t }: HomeProps) {
  return (
    <>
      <Hero t={t.hero} />
      <section id="services">
        <Services t={t.services} />
      </section>
      <section id="about">
        <Features t={t.features} />
        <Benefits t={t.benefits} />
        <Stats t={t.stats} />
      </section>
      <TechStack t={t.techStack} />
      <section id="contact">
        <Contact t={t.contact} />
      </section>
    </>
  );
}