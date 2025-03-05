import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users, ArrowLeft } from 'lucide-react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { Link } from 'react-router-dom';

interface ContactProps {
  t: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    cta: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
}

export function Contact({ t }: ContactProps) {
  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="text-white mb-6">
            {t.title}
          </Typography>
          <Typography variant="p" className="text-gray-300 text-xl leading-relaxed mb-8">
            {t.subtitle}
          </Typography>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl">
            <Typography variant="h3" className="text-white mb-6">
              {t.cta}
            </Typography>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">{t.form.name}</label>
                <input
                  type="text"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">{t.form.email}</label>
                <input
                  type="email"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">{t.form.company}</label>
                <input
                  type="text"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={t.form.companyPlaceholder}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">{t.form.message}</label>
                <textarea
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors h-32"
                  placeholder={t.form.messagePlaceholder}
                />
              </div>
              <Button variant="primary" size="lg" className="w-full">
                {t.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl">
              <Typography variant="h3" className="text-white mb-6">
                Contact Information
              </Typography>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <Typography variant="h4" className="text-white text-sm">Email</Typography>
                    <Typography variant="p" className="text-gray-300">{t.email}</Typography>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <Typography variant="h4" className="text-white text-sm">Phone</Typography>
                    <Typography variant="p" className="text-gray-300">{t.phone}</Typography>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <Typography variant="h4" className="text-white text-sm">Address</Typography>
                    <Typography variant="p" className="text-gray-300">{t.address}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}