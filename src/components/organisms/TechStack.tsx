import React from 'react';
import { Typography } from '../atoms/Typography';

const technologies = [
  {
    name: 'AWS',
    logo: 'https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/07/16/AWS_logo_RGB.jpg'
  },
  {
    name: 'Kubernetes',
    logo: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg'
  },
  {
    name: 'Terraform',
    logo: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg'
  },
  {
    name: 'ArgoCD',
    logo: 'https://argo-cd.readthedocs.io/en/stable/assets/logo.png'
  },
  {
    name: 'GitLab',
    logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg'
  },
  {
    name: 'GitHub',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    name: 'Docker',
    logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'
  },
  {
    name: 'Jenkins',
    logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg'
  },
  {
    name: 'Prometheus',
    logo: 'https://raw.githubusercontent.com/prometheus/prometheus/main/documentation/images/prometheus-logo.svg'
  },
  {
    name: 'Grafana',
    logo: 'https://grafana.com/static/img/logos/grafana_logo-web.svg'
  }
];

interface TechStackProps {
  t: {
    title: string;
  };
}

export function TechStack({ t }: TechStackProps) {
  return (
    <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <Typography variant="h2" className="text-white text-center mb-10">
          {t.title}
        </Typography>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate the array to create a seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-none w-32 mx-8 transform hover:scale-110 transition-all duration-300"
                title={tech.name}
              >
                {/* Increased height from 40px to 54px (35% increase) */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '54px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}