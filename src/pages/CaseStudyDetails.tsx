import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, BarChart2, Clock, Users } from 'lucide-react';
import { Typography } from '../components/atoms/Typography';

interface CaseStudyDetailsProps {
  t: {
    backButton: string;
    cases: {
      fintech: {
        title: string;
        company: string;
        description: string;
        challenge: string;
        solution: string;
        results: {
          cost: string;
          performance: string;
          reliability: string;
        };
        technologies: string[];
        testimonial: {
          quote: string;
          author: string;
          role: string;
        };
      };
      ecommerce: {
        title: string;
        company: string;
        description: string;
        challenge: string;
        solution: string;
        results: {
          deployment: string;
          automation: string;
          efficiency: string;
        };
        technologies: string[];
        testimonial: {
          quote: string;
          author: string;
          role: string;
        };
      };
      healthcare: {
        title: string;
        company: string;
        description: string;
        challenge: string;
        solution: string;
        results: {
          platform: string;
          scalability: string;
          security: string;
        };
        technologies: string[];
        testimonial: {
          quote: string;
          author: string;
          role: string;
        };
      };
    };
  };
}

export function CaseStudyDetails({ t }: CaseStudyDetailsProps) {
  const { caseId } = useParams();
  const caseStudy = t.cases[caseId as keyof typeof t.cases];

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-6 py-20">
        <Link to="/cases" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          {t.backButton}
        </Link>
        <Typography variant="h2" className="text-white text-center">Case study not found</Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <Link to="/cases" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          {t.backButton}
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="text-blue-400 text-sm font-medium mb-2">{caseStudy.company}</div>
          <Typography variant="h1" className="text-white mb-6">{caseStudy.title}</Typography>
          <Typography variant="p" className="text-xl text-gray-300 max-w-3xl">
            {caseStudy.description}
          </Typography>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl">
            <Typography variant="h3" className="text-white mb-4">The Challenge</Typography>
            <Typography variant="p" className="text-gray-300">
              {caseStudy.challenge}
            </Typography>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl">
            <Typography variant="h3" className="text-white mb-4">Our Solution</Typography>
            <Typography variant="p" className="text-gray-300">
              {caseStudy.solution}
            </Typography>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <Typography variant="h2" className="text-white mb-8">Key Results</Typography>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(caseStudy.results).map(([key, value]) => (
              <div key={key} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  {key === 'cost' && <BarChart2 className="h-6 w-6 text-blue-400" />}
                  {key === 'performance' && <Clock className="h-6 w-6 text-blue-400" />}
                  {key === 'reliability' && <CheckCircle2 className="h-6 w-6 text-blue-400" />}
                  <div>
                    <Typography variant="h4" className="text-white mb-2">{key}</Typography>
                    <Typography variant="p" className="text-gray-300">{value}</Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <Typography variant="h3" className="text-white mb-6">Technologies Used</Typography>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-700 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12">
          <blockquote className="mb-6">
            <Typography variant="p" className="text-xl text-white italic">
              "{caseStudy.testimonial.quote}"
            </Typography>
          </blockquote>
          <div>
            <Typography variant="h4" className="text-white mb-1">
              {caseStudy.testimonial.author}
            </Typography>
            <Typography variant="p" className="text-blue-200">
              {caseStudy.testimonial.role}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}