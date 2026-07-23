import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook to sync the HTML lang attribute with i18n language
 */
export function useHtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    
    // Update Open Graph locale meta tag
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', currentLang === 'pt' ? 'pt_BR' : 'en_US');
    }
  }, [i18n.language]);
}
