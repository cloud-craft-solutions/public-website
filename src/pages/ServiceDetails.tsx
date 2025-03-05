import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';

interface ServiceDetailsProps {
  t: {
    services: {
      title: string;
      subtitle: string;
      services: {
        [key: string]: {
          title: string;
          description: string;
        };
      };
    };
  };
}

export function ServiceDetails({ t }: ServiceDetailsProps) {
  const { serviceId } = useParams();
  const service = t.services.services[serviceId as keyof typeof t.services.services];

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <Typography variant="h2" className="text-white text-center">Service not found</Typography>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
        <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <Typography variant="h2" className="text-white mb-6">{service.title}</Typography>
          <Typography variant="p" className="text-gray-300 text-lg mb-8 leading-relaxed">
            {service.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}