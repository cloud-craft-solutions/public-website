export const cases = {
  title: "Success Stories",
  subtitle: "Discover some of the transformations we've achieved for our clients",
  backButton: "Back",
  cases: {
    fintech: {
      title: "Cloud Migration",
      company: "Fintech Enterprise",
      description: "Complete migration from on-premise infrastructure to cloud, resulting in 40% cost reduction.",
      challenge: "Fintech Enterprise faced significant challenges with their on-premise infrastructure, including high maintenance costs, limited scalability, and difficulties in implementing new features quickly.",
      solution: "We implemented a phased migration strategy, using a hybrid approach initially and gradually moving to a fully cloud-native architecture. We automated key processes and implemented modern DevOps practices.",
      results: {
        cost: "40% reduction in operational costs",
        performance: "60% improvement in response time",
        reliability: "99.99% uptime after migration"
      },
      technologies: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Docker",
        "GitLab CI",
        "Prometheus",
        "Grafana"
      ],
      testimonial: {
        quote: "The cloud migration not only reduced our operational costs but also allowed us to innovate faster and better serve our customers.",
        author: "Maria Silva",
        role: "CTO, Fintech Enterprise"
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    },
    ecommerce: {
      title: "DevOps Transformation",
      company: "E-commerce Leader",
      description: "Implementation of DevOps culture and automation, reducing deployment time by 70%.",
      challenge: "E-commerce Leader was struggling with frequent manual deployments, causing downtime and production errors. The development process was slow and error-prone.",
      solution: "We implemented a complete DevOps culture with automated CI/CD, automated testing, and real-time monitoring. We trained the team in modern development and operations practices.",
      results: {
        deployment: "70% reduction in deployment time",
        automation: "95% of processes automated",
        efficiency: "80% increase in team efficiency"
      },
      technologies: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "ArgoCD",
        "ELK Stack",
        "New Relic",
        "GitHub Actions"
      ],
      testimonial: {
        quote: "The DevOps transformation revolutionized our way of working. We can now deliver value to our customers much faster and with higher quality.",
        author: "John Santos",
        role: "Head of Engineering, E-commerce Leader"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    healthcare: {
      title: "Platform Engineering",
      company: "Healthcare Tech",
      description: "Development of internal platform for microservices management.",
      challenge: "Healthcare Tech needed a robust platform to manage their microservices at scale while maintaining compliance with health regulations and ensuring high availability.",
      solution: "We developed a custom engineering platform focusing on security and compliance, including service templates, automated pipelines, and integrated security policies.",
      results: {
        platform: "Centralized platform for 200+ microservices",
        scalability: "Automatic scaling with zero downtime",
        security: "100% HIPAA and GDPR compliance"
      },
      technologies: [
        "Kubernetes",
        "Istio",
        "Vault",
        "Terraform",
        "AWS",
        "Datadog",
        "GitLab"
      ],
      testimonial: {
        quote: "The new platform allowed us to focus on product development without worrying about infrastructure or regulatory compliance.",
        author: "Anna Oliveira",
        role: "VP of Technology, Healthcare Tech"
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    }
  }
};