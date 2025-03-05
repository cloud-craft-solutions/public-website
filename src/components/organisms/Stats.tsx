import React from 'react';
import { StatCard } from '../molecules/StatCard';

interface StatsProps {
  t: {
    uptime: string;
    clients: string;
    support: string;
  };
}

export function Stats({ t }: StatsProps) {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <StatCard value="99.99%" label={t.uptime} />
          <StatCard value="1000+" label={t.clients} />
          <StatCard value="24/7" label={t.support} />
        </div>
      </div>
    </section>
  );
}