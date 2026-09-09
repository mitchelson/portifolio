/**
 * Central SEO + contact identity for the portfolio.
 * Contact, Footer, JSON-LD, and meta tags should all consume these values.
 */

export const SITE_URL = 'https://portifolio-rho-sand-47.vercel.app';

export const SEO_CONFIG = {
  title: 'Mitchelson Silva | Senior Mobile Architect',
  description:
    'Senior Mobile Architect with 7+ years of experience in React Native, AI integration, and enterprise scaling. Specialist in designing high-performance mobile applications and component architecture.',
  descriptionPt:
    'Senior Mobile Architect com mais de 7 anos de experiência em React Native, integração de IA e escala enterprise. Especialista em aplicações móveis de alta performance e arquitetura de componentes.',
  keywords:
    'Mitchelson Silva, Mobile Architect, React Native, React Native Developer, iOS, Android, TypeScript, Mobile Development, Software Engineer, Tech Lead, AI Integration, Enterprise Applications',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  twitterHandle: '@mitchelson',
  author: 'Mitchelson Silva',
  jobTitle: 'Senior Mobile Architect',
} as const;

export const CONTACT = {
  name: 'Mitchelson Silva',
  jobTitle: 'Senior Mobile Architect',
  email: 'mitchelsonps@gmail.com',
  phoneDisplay: '+55 95 99115-1464',
  phoneE164: '5595991151464',
  whatsapp: 'https://wa.me/5595991151464',
  linkedin: {
    url: 'https://linkedin.com/in/miitch',
    label: 'linkedin.com/in/miitch',
  },
  github: {
    url: 'https://github.com/mitchelson',
    label: 'github.com/mitchelson',
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: CONTACT.linkedin.url,
  github: CONTACT.github.url,
  email: CONTACT.email,
  whatsapp: CONTACT.whatsapp,
} as const;

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: CONTACT.name,
  jobTitle: CONTACT.jobTitle,
  url: SITE_URL,
  email: CONTACT.email,
  sameAs: [CONTACT.linkedin.url, CONTACT.github.url],
  knowsAbout: [
    'React Native',
    'TypeScript',
    'Mobile Development',
    'iOS Development',
    'Android Development',
    'Software Architecture',
    'AI Integration',
    'Enterprise Applications',
  ],
} as const;
