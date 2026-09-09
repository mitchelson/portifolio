/**
 * Central SEO + contact identity for the portfolio.
 * Contact, Footer, JSON-LD, and meta tags should all consume these values.
 */

export const SITE_URL = 'https://portifolio-rho-sand-47.vercel.app';

export const SEO_CONFIG = {
  /** Name-first titles help rank for “Mitchelson Silva” queries. */
  title: 'Mitchelson Silva — Portfolio | Senior Mobile Architect',
  titlePt: 'Mitchelson Silva — Portfólio | Senior Mobile Architect',
  description:
    'Official portfolio of Mitchelson Silva (Mitch Silva), Senior Mobile Architect specializing in React Native, TypeScript, AI-integrated apps, and enterprise mobile systems. Projects include Tá na Promo, Zenvix Fotos, Trade+, Pigz, and Konta.',
  descriptionPt:
    'Portfólio oficial de Mitchelson Silva (Mitch Silva), Senior Mobile Architect especializado em React Native, TypeScript, apps com IA e sistemas mobile enterprise. Projetos: Tá na Promo, Zenvix Fotos, Trade+, Pigz e Konta.',
  keywords:
    'Mitchelson Silva, Mitch Silva, Mitchelson, portfólio Mitchelson Silva, Senior Mobile Architect, React Native, React Native Developer, TypeScript, Mobile Architect Brazil, Tá na Promo, Zenvix, Pigz, Konta',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  twitterHandle: '@mitchelson',
  author: 'Mitchelson Silva',
  jobTitle: 'Senior Mobile Architect',
  alternateNames: ['Mitch Silva', 'Mitchelson', 'Mitchelson PS'],
} as const;

export const CONTACT = {
  name: 'Mitchelson Silva',
  jobTitle: 'Senior Mobile Architect',
  email: 'mitchelsonps@gmail.com',
  phoneDisplay: '+55 95 99115-1464',
  phoneE164: '5595991151464',
  whatsapp: 'https://wa.me/5595991151464',
  linkedin: {
    url: 'https://www.linkedin.com/in/miitch',
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

export const STRUCTURED_DATA_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: CONTACT.name,
  alternateName: [...SEO_CONFIG.alternateNames],
  jobTitle: CONTACT.jobTitle,
  description: SEO_CONFIG.description,
  url: SITE_URL,
  image: SEO_CONFIG.image,
  email: CONTACT.email,
  telephone: `+${CONTACT.phoneE164}`,
  nationality: 'Brazilian',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  sameAs: [CONTACT.linkedin.url, CONTACT.github.url],
  knowsAbout: [
    'React Native',
    'TypeScript',
    'Expo',
    'Mobile Development',
    'iOS Development',
    'Android Development',
    'Software Architecture',
    'AI Integration',
    'Enterprise Applications',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Invillia',
  },
} as const;

export const STRUCTURED_DATA_WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Mitchelson Silva Portfolio',
  alternateName: 'Portfólio Mitchelson Silva',
  url: SITE_URL,
  description: SEO_CONFIG.description,
  inLanguage: ['en', 'pt-BR'],
  author: { '@id': `${SITE_URL}/#person` },
  publisher: { '@id': `${SITE_URL}/#person` },
} as const;

export const STRUCTURED_DATA_PROFILE = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  inLanguage: ['en', 'pt-BR'],
  mainEntity: { '@id': `${SITE_URL}/#person` },
  about: { '@id': `${SITE_URL}/#person` },
} as const;

/** @deprecated Use STRUCTURED_DATA_PERSON */
export const STRUCTURED_DATA = STRUCTURED_DATA_PERSON;
