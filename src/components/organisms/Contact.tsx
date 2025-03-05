import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { ContactCard } from '../molecules/ContactCard';

interface ContactProps {
  t: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    cta: string;
  };
}

export function Contact({ t }: ContactProps) {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-white mb-4">{t.title}</Typography>
          <Typography variant="p" className="text-xl text-gray-300">{t.subtitle}</Typography>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard icon={Mail} title="Email" content={t.email} />
          <ContactCard icon={Phone} title="Telefone" content={t.phone} />
          <ContactCard icon={MapPin} title="Endereço" content={t.address} />
        </div>
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" icon="arrow">
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}