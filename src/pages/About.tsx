import React from 'react';
import { Rocket, Target, Zap, Users, Heart, ArrowLeft } from 'lucide-react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { Link } from 'react-router-dom';

interface AboutProps {
  t: {
    whoWeAre: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    expertise: {
      title: string;
      items: {
        cloudNative: {
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
    };
    culture: {
      title: string;
      description: string;
      values: {
        passion: {
          title: string;
          description: string;
        };
        collaboration: {
          title: string;
          description: string;
        };
      };
    };
    joinUs: {
      title: string;
      description: string;
      cta: string;
    };
  };
}

export function About({ t }: AboutProps) {
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      {/* Who We Are */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h1" className="text-white mb-6">
              {t.whoWeAre.title}
            </Typography>
            <Typography variant="p" className="text-gray-300 text-xl leading-relaxed mb-8">
              {t.whoWeAre.description}
            </Typography>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Typography variant="h2" className="text-white mb-6">
                {t.vision.title}
              </Typography>
              <Typography variant="p" className="text-gray-300 text-lg leading-relaxed">
                {t.vision.description}
              </Typography>
            </div>
            <div>
              <Typography variant="h2" className="text-white mb-6">
                {t.mission.title}
              </Typography>
              <Typography variant="p" className="text-gray-300 text-lg leading-relaxed">
                {t.mission.description}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Typography variant="h2" className="text-white text-center mb-12">
            {t.expertise.title}
          </Typography>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <Rocket className="h-12 w-12 text-blue-400 mb-6" />
              <Typography variant="h3" className="text-white mb-4">
                {t.expertise.items.cloudNative.title}
              </Typography>
              <Typography variant="p" className="text-gray-300">
                {t.expertise.items.cloudNative.description}
              </Typography>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <Target className="h-12 w-12 text-blue-400 mb-6" />
              <Typography variant="h3" className="text-white mb-4">
                {t.expertise.items.devops.title}
              </Typography>
              <Typography variant="p" className="text-gray-300">
                {t.expertise.items.devops.description}
              </Typography>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <Zap className="h-12 w-12 text-blue-400 mb-6" />
              <Typography variant="h3" className="text-white mb-4">
                {t.expertise.items.security.title}
              </Typography>
              <Typography variant="p" className="text-gray-300">
                {t.expertise.items.security.description}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Typography variant="h2" className="text-white mb-6">
              {t.culture.title}
            </Typography>
            <Typography variant="p" className="text-gray-300 text-lg">
              {t.culture.description}
            </Typography>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-blue-400 flex-shrink-0" />
              <div>
                <Typography variant="h4" className="text-white mb-2">
                  {t.culture.values.passion.title}
                </Typography>
                <Typography variant="p" className="text-gray-300">
                  {t.culture.values.passion.description}
                </Typography>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-400 flex-shrink-0" />
              <div>
                <Typography variant="h4" className="text-white mb-2">
                  {t.culture.values.collaboration.title}
                </Typography>
                <Typography variant="p" className="text-gray-300">
                  {t.culture.values.collaboration.description}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <Typography variant="h2" className="text-white mb-6">
              {t.joinUs.title}
            </Typography>
            <Typography variant="p" className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              {t.joinUs.description}
            </Typography>
            <Button 
              variant="secondary" 
              size="lg" 
              icon="arrow"
              className="inline-flex items-center"
            >
              {t.joinUs.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}