import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function normalizeLang(lng: string): 'en' | 'pt' {
  return lng.startsWith('pt') ? 'pt' : 'en';
}

/**
 * Sync the HTML lang attribute with i18n language.
 * Applies ?lang=en|pt from the URL once on first load.
 */
export function useHtmlLang() {
  const { i18n } = useTranslation();
  const didReadQuery = useRef(false);

  useEffect(() => {
    if (didReadQuery.current) return;
    didReadQuery.current = true;

    const langParam = new URLSearchParams(window.location.search).get('lang');
    if (langParam !== 'en' && langParam !== 'pt') return;

    if (normalizeLang(i18n.language) !== langParam) {
      void i18n.changeLanguage(langParam);
    }
    // Intentionally run once on mount; i18n singleton is stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentLang = normalizeLang(i18n.language);
    document.documentElement.lang = currentLang;

    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== currentLang) {
      url.searchParams.set('lang', currentLang);
      window.history.replaceState({}, '', url.toString());
    }
  }, [i18n.language]);
}
