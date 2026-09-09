import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Sync the HTML lang attribute with i18n language.
 * Also applies ?lang=en|pt from the URL on first load.
 */
export function useHtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'pt') {
      if (i18n.language !== langParam) {
        void i18n.changeLanguage(langParam);
      }
    }
  }, [i18n]);

  useEffect(() => {
    const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en';
    document.documentElement.lang = currentLang;

    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== currentLang) {
      url.searchParams.set('lang', currentLang);
      window.history.replaceState({}, '', url.toString());
    }
  }, [i18n.language]);
}
