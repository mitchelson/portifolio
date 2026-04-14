import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        title: "Mitchelson Silva | Senior Mobile Architect",
        subtitle: "Specialist in designing and scaling enterprise-level applications, focusing on React Native, component architecture, and high performance.",
        cta: "View Projects",
      },
      tech: {
        title: "Core Tech Stack",
        management: "State & Data Management",
        ecosystem: "Ecosystem & Integration",
        ai: "AI & Productivity",
      },
      projects: {
        title: "Featured Projects",
        taNaPromo: {
          title: "Tá na Promo",
          description: "Mobile app for real-time deal discovery with payment integration (Stripe/Apple/Google Pay) and engagement strategies via OneSignal.",
          link: "https://tanapromo.app",
        },
        tradePlus: {
          title: "Trade+",
          description: "SaaS and mobile platform focused on operational efficiency and real-time field visibility.",
          link: "https://woba.com.br",
        },
        airChat: {
          title: "AirChat",
          description: "Offline messaging app using P2P mesh technology for serverless communication.",
          link: "https://mavielo.com.br",
        },
        konta: {
          title: "Konta",
          description: "Personal finance solution developed natively in Swift with Firebase integration.",
          link: "https://apps.apple.com/br/app/konta-personal-finance/id6761537625?l=en-GB",
        },
      },
      experience: {
        title: "Professional Experience",
        invillia: "Contributed to a robust React Native architecture with scenes, providers, hooks, and feature-based folders. Built core features for a large-scale digital banking app, leading test automation and mastering modern React patterns during critical migrations.",
        strat2gy: "Architected an AI-powered decision-support mobile app for C-level executives. Implemented Face ID authentication, speech recognition for AI interaction, and refactored state management using Zustand and React Query.",
        mavielo: "Developed an agribusiness social network with rich media posts and real-time chat. Integrated AI-assisted content creation and built the institutional website using Next.js.",
        woba: "Rebuilt the core booking flow, improving conversion by 6%. Migrated the app to TypeScript, implemented internationalization, and managed CI/CD pipelines on GitHub Actions.",
        pigz: "Career progression from Front-end Developer to Senior and then Tech Lead. Led the migration from Flutter to React Native, delivering a high-traffic food delivery experience with real-time tracking and secure payments.",
        publicDefender: "Maintained and enhanced institutional web platforms for the state Public Defender's Office, ensuring uptime and functionality for public-facing services.",
      },
      nav: {
        experience: "Experience",
        projects: "Projects",
        stack: "Stack",
      }
    }
  },
  pt: {
    translation: {
      hero: {
        title: "Mitchelson Silva | Senior Mobile Architect",
        subtitle: "Especialista em projetar e escalar aplicações de nível empresarial, com foco em React Native, arquitetura de componentes e alta performance.",
        cta: "Ver Projetos",
      },
      tech: {
        title: "Tech Stack Principal",
        management: "Gestão de Estado e Dados",
        ecosystem: "Ecossistema e Integração",
        ai: "IA e Produtividade",
      },
      projects: {
        title: "Projetos em Destaque",
        taNaPromo: {
          title: "Tá na Promo",
          description: "Aplicativo mobile para descoberta de promoções em tempo real com integração de pagamentos (Stripe/Apple/Google Pay) e estratégias de engajamento via OneSignal.",
          link: "https://tanapromo.app",
        },
        tradePlus: {
          title: "Trade+",
          description: "Plataforma SaaS e mobile voltada para eficiência operacional e visibilidade de campo em tempo real.",
          link: "https://woba.com.br",
        },
        airChat: {
          title: "AirChat",
          description: "Aplicativo de mensageria offline utilizando tecnologia mesh P2P para comunicação sem servidor.",
          link: "https://mavielo.com.br",
        },
        konta: {
          title: "Konta",
          description: "Solução de finanças pessoais desenvolvida nativamente em Swift com integração Firebase.",
          link: "https://apps.apple.com/br/app/konta-personal-finance/id6761537625?l=en-GB",
        },
      },
      experience: {
        title: "Experiência Profissional",
        invillia: "Contribuiu para uma arquitetura robusta em React Native com scenes, providers, hooks e pastas baseadas em funcionalidades. Desenvolveu recursos principais para um app de banking digital em larga escala, liderando automação de testes e dominando padrões modernos de React.",
        strat2gy: "Arquitetou um app móvel de suporte à decisão impulsionado por IA para executivos C-level. Implementou autenticação Face ID, reconhecimento de voz para interação com IA e refatorou o gerenciamento de estado usando Zustand e React Query.",
        mavielo: "Desenvolveu uma rede social para o agronegócio com posts de mídia rica e chat em tempo real. Integrou criação de conteúdo assistida por IA e construiu o site institucional usando Next.js.",
        woba: "Reconstruiu o fluxo principal de reservas, melhorando a conversão em 6%. Migrou o app para TypeScript, implementou internacionalização e gerenciou pipelines de CI/CD no GitHub Actions.",
        pigz: "Progressão de carreira de Desenvolvedor Front-end para Sênior e depois Tech Lead. Liderou a migração de Flutter para React Native, entregando uma experiência de delivery de alto tráfego com rastreamento em tempo real e pagamentos seguros.",
        publicDefender: "Manteve e aprimorou plataformas web institucionais para a Defensoria Pública do Estado, garantindo disponibilidade e funcionalidade para serviços voltados ao público.",
      },
      nav: {
        experience: "Experiência",
        projects: "Projetos",
        stack: "Stack",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
