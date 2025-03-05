export const cases = {
  title: "Cases de Sucesso",
  subtitle: "Conheça algumas das transformações que realizamos para nossos clientes",
  backButton: "Voltar",
  cases: {
    fintech: {
      title: "Migração para Cloud",
      company: "Fintech Enterprise",
      description: "Migração completa de infraestrutura on-premise para cloud, resultando em 40% de redução de custos.",
      challenge: "A Fintech Enterprise enfrentava desafios significativos com sua infraestrutura on-premise, incluindo altos custos de manutenção, escalabilidade limitada e dificuldades para implementar novas funcionalidades rapidamente.",
      solution: "Implementamos uma estratégia de migração em fases, utilizando uma abordagem híbrida inicialmente e movendo gradualmente para uma arquitetura totalmente cloud-native. Automatizamos processos-chave e implementamos práticas modernas de DevOps.",
      results: {
        cost: "Redução de 40% nos custos operacionais",
        performance: "Melhoria de 60% no tempo de resposta",
        reliability: "99.99% de uptime após a migração"
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
        quote: "A migração para cloud não só reduziu nossos custos operacionais, mas também nos permitiu inovar mais rapidamente e atender melhor nossos clientes.",
        author: "Maria Silva",
        role: "CTO, Fintech Enterprise"
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    },
    ecommerce: {
      title: "DevOps Transformation",
      company: "E-commerce Leader",
      description: "Implementação de cultura DevOps e automação, reduzindo tempo de deploy em 70%.",
      challenge: "O E-commerce Leader estava enfrentando problemas com deploys manuais frequentes, causando downtime e erros em produção. O processo de desenvolvimento era lento e propenso a erros.",
      solution: "Implementamos uma cultura DevOps completa, com CI/CD automatizado, testes automatizados e monitoramento em tempo real. Treinamos a equipe em práticas modernas de desenvolvimento e operações.",
      results: {
        deployment: "Redução de 70% no tempo de deploy",
        automation: "95% dos processos automatizados",
        efficiency: "Aumento de 80% na eficiência do time"
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
        quote: "A transformação DevOps revolucionou nossa forma de trabalhar. Agora podemos entregar valor aos nossos clientes muito mais rapidamente e com maior qualidade.",
        author: "João Santos",
        role: "Head de Engenharia, E-commerce Leader"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    healthcare: {
      title: "Platform Engineering",
      company: "Healthcare Tech",
      description: "Desenvolvimento de plataforma interna para gestão de microserviços.",
      challenge: "A Healthcare Tech precisava de uma plataforma robusta para gerenciar seus microserviços em escala, mantendo conformidade com regulamentações de saúde e garantindo alta disponibilidade.",
      solution: "Desenvolvemos uma plataforma de engenharia personalizada com foco em segurança e conformidade, incluindo templates de serviços, pipelines automatizados e políticas de segurança integradas.",
      results: {
        platform: "Plataforma centralizada para 200+ microserviços",
        scalability: "Escalabilidade automática com zero downtime",
        security: "100% conformidade com HIPAA e GDPR"
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
        quote: "A nova plataforma nos permitiu focar no desenvolvimento de produtos, sem nos preocupar com infraestrutura ou conformidade regulatória.",
        author: "Ana Oliveira",
        role: "VP de Tecnologia, Healthcare Tech"
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    }
  }
};