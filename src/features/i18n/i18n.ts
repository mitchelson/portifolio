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
        invillia: "Contributed to a robust React Native architecture with scenes, providers, hooks, modules, helpers and feature-based folders, using styled-components, i18n and analytics tooling like Segment. Built and iterated on core features for a large-scale digital banking app, applying strong problem-solving skills to diagnose and resolve complex production issues, ensuring high reliability for thousands of users. Led test automation initiatives implementing unit and integration tests with Jest, ensuring strict coverage compliance. Leveraged Firebase Remote Config for feature flagging and A/B testing, and integrated Firebase Cloud Storage for secure file handling. Championed a problem-simplification mindset during architecture reviews and sprint planning, breaking down large requirements into actionable, user-centric solutions.",
        strat2gy: "Contributed to a decision-support mobile app powered by AI, helping C-level executives and business owners access insights and recommendations on the go. Built the app using Expo and managed the full release cycle with Expo EAS, including store configuration and deployment to both Apple App Store and Google Play Store. Implemented secure authentication with email/password and Face ID, making logins faster and more convenient while preserving security standards. Added speech recognition to streamline interaction with the AI assistant, improving usability for hands-free input. Refactored state management to use Zustand with React Query and modernized the UI with current mobile UI/UX patterns, resulting in cleaner architecture and easier maintenance.",
        mavielo: "Developed a social network-style mobile app for the agribusiness market using React Native, with posts including photos, videos, carousels and long-form text, plus user profiles and infinite feeds. Implemented infinite scrolling feeds with TanStack Query and global state management with Zustand, ensuring smooth UX and responsive data loading. Built an in-app chat experience with text, images, video, audio and message referencing, enabling rich conversations in real time. Integrated AI-assisted content creation to help users draft and format posts. Also contributed to the company's web presence by building the institutional website in Next.js, creating automation workflows using n8n, and fixing/enhancing an AI-powered chat website focused on agribusiness.",
        woba: "Rebuilt the core booking flow, improving conversion by 6% and reducing abandonment by around 3% through UX refinements, better validation and clearer error handling. Worked on a React Native real-estate/coworking app used as a corporate benefit, enabling employees to find and book shared desks and meeting rooms. Migrated the app from JavaScript to TypeScript, introduced stronger typing and improved developer experience with React Query and Zustand. Implemented internationalization with i18n for multiple languages, and leveraged analytics tools like Segment, Sentry, and UXCam. Supported CI/CD pipeline on GitHub Actions, managing iOS and Android builds with Xcode and Gradle. Mentored junior and mid-level developers on React Native best practices and applied Clean Architecture principles.",
        pigz: "Led the migration of a high-traffic food delivery app from Flutter to React Native with TypeScript, making key architectural and technology decisions for scalability, performance, and long-term maintainability. Delivered an end-to-end ordering experience including product discovery, cart building and checkout, with real-time order tracking over Socket.IO and live status updates. Engineered platform payments integration implementing secure credit-card, PIX, Apple Pay and Google Pay flows that boosted checkout reliability. Collaborated with web and back-office teams across the ecosystem to keep APIs, events and analytics consistent. Designed REST API architecture and implemented RESTful API integrations for real-time data synchronization.",
        publicDefender: "Supported the IT department of the state Public Defender's Office, maintaining and enhancing institutional web platforms used by internal teams and the general public. Maintained and updated institutional websites built with Joomla, ensuring content accuracy, uptime and proper functionality for key public-facing services. Managed online courses and training platforms using Moodle for internal education and professional development programs.",
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
        invillia: "Contribuiu para uma arquitetura robusta em React Native com scenes, providers, hooks, modules, helpers e pastas baseadas em funcionalidades, utilizando styled-components, i18n e ferramentas de analytics como Segment. Desenvolveu recursos principais para um app de banking digital em larga escala, aplicando habilidades de resolução de problemas para diagnosticar e resolver issues complexas em produção, garantindo alta confiabilidade para milhares de usuários. Liderou iniciativas de automação de testes implementando testes unitários e de integração com Jest, garantindo cobertura rigorosa. Utilizou Firebase Remote Config para feature flags e testes A/B, e integrou Firebase Cloud Storage para gerenciamento seguro de arquivos. Promoveu uma mentalidade de simplificação durante revisões de arquitetura e planejamento de sprints.",
        strat2gy: "Contribuiu para um app móvel de suporte à decisão impulsionado por IA, ajudando executivos C-level e empresários a acessar insights e recomendações em movimento. Desenvolveu o app usando Expo e gerenciou todo o ciclo de release com Expo EAS, incluindo configuração das lojas e deploy para Apple App Store e Google Play Store. Implementou autenticação segura com email/senha e Face ID, tornando logins mais rápidos e convenientes mantendo padrões de segurança. Adicionou reconhecimento de voz para otimizar interação com o assistente de IA, melhorando usabilidade para input hands-free. Refatorou gerenciamento de estado usando Zustand com React Query e modernizou a UI com padrões atuais de UI/UX mobile, resultando em arquitetura mais limpa e fácil manutenção.",
        mavielo: "Desenvolveu um app móvel estilo rede social para o mercado de agronegócio usando React Native, com posts incluindo fotos, vídeos, carrosséis e texto longo, além de perfis de usuário e feeds infinitos. Implementou feeds com scroll infinito usando TanStack Query e gerenciamento de estado global com Zustand, garantindo UX fluida e carregamento responsivo. Construiu experiência de chat in-app com texto, imagens, vídeo, áudio e referência de mensagens. Integrou criação de conteúdo assistida por IA para ajudar usuários a redigir posts. Também contribuiu para presença web da empresa construindo o site institucional em Next.js, criando fluxos de automação usando n8n, e corrigindo/aprimorando um site de chat com IA focado no agronegócio.",
        woba: "Reconstruiu o fluxo principal de reservas, melhorando conversão em 6% e reduzindo abandono em cerca de 3% através de refinamentos de UX, melhor validação e tratamento de erros mais claro. Trabalhou em app React Native de imóveis/coworking usado como benefício corporativo, permitindo funcionários encontrar e reservar mesas compartilhadas e salas de reunião. Migrou o app de JavaScript para TypeScript, introduzindo tipagem mais forte e melhor experiência de desenvolvimento com React Query e Zustand. Implementou internacionalização com i18n para múltiplos idiomas, e utilizou ferramentas de analytics como Segment, Sentry e UXCam. Manteve pipeline de CI/CD no GitHub Actions, gerenciando builds iOS e Android com Xcode e Gradle. Mentorou desenvolvedores júnior e pleno e aplicou princípios de Clean Architecture.",
        pigz: "Liderou a migração de um app de delivery de alto tráfego de Flutter para React Native com TypeScript, tomando decisões arquiteturais e tecnológicas chave para escalabilidade, performance e manutenibilidade a longo prazo. Entregou experiência completa de pedido incluindo descoberta de produtos, carrinho e checkout, com rastreamento em tempo real via Socket.IO e atualizações de status ao vivo. Engenheirou integração de pagamentos implementando fluxos seguros de cartão de crédito, PIX, Apple Pay e Google Pay que aumentaram confiabilidade do checkout. Colaborou com times web e back-office mantendo APIs, eventos e analytics consistentes. Projetou arquitetura REST API e implementou integrações RESTful para sincronização de dados em tempo real.",
        publicDefender: "Apoiou o departamento de TI da Defensoria Pública do Estado, mantendo e aprimorando plataformas web institucionais usadas por times internos e pelo público geral. Manteve e atualizou sites institucionais construídos com Joomla, garantindo precisão de conteúdo, uptime e funcionalidade adequada para serviços públicos essenciais. Gerenciou cursos online e plataformas de treinamento usando Moodle para educação interna e programas de desenvolvimento profissional.",
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
