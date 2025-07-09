import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useDocumentLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;

    const metaDescription = document.querySelector('meta[name="description"]');
    const title = document.querySelector('title');

    if (i18n.language === 'en-US') {
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Anderson Magro Mattei Portfolio - Software Engineer',
        );
      }
      if (title) {
        title.textContent = 'Anderson Magro Mattei Portfolio';
      }
    } else {
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Portfólio Anderson Magro Mattei - Desenvolvedor Full Stack',
        );
      }
      if (title) {
        title.textContent = 'Portfólio Anderson Magro Mattei';
      }
    }
  }, [i18n.language]);
}
