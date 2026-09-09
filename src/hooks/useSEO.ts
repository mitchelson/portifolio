import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO_CONFIG } from '@/src/config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Dynamically sync document title and meta tags with the active language.
 */
export function useSEO(props?: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const isPt = lang === 'pt' || lang.startsWith('pt');
    const title =
      props?.title ?? (isPt ? SEO_CONFIG.titlePt : SEO_CONFIG.title);
    const description =
      props?.description ??
      (isPt ? SEO_CONFIG.descriptionPt : SEO_CONFIG.description);
    const keywords = props?.keywords ?? SEO_CONFIG.keywords;
    const image = props?.image ?? SEO_CONFIG.image;
    const url =
      props?.url ??
      `${SEO_CONFIG.url}${isPt ? '?lang=pt' : '?lang=en'}`;

    document.title = title;
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:description"]', 'content', description);

    setMeta('meta[name="keywords"]', 'content', keywords);

    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:image"]', 'content', image);

    setMeta('link[rel="canonical"]', 'href', SEO_CONFIG.url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:url"]', 'content', url);

    setMeta(
      'meta[property="og:locale"]',
      'content',
      isPt ? 'pt_BR' : 'en_US',
    );
  }, [
    lang,
    props?.title,
    props?.description,
    props?.keywords,
    props?.image,
    props?.url,
  ]);
}
