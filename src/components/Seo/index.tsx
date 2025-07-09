import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const langMap = {
  'pt-BR': 'pt-BR',
  'en-US': 'en',
} as const;

export function Seo() {
  const { t, i18n } = useTranslation();

  const currentLang = langMap[i18n.language as keyof typeof langMap] || 'pt-BR';
  const title = t('seo.title', 'Portfólio Anderson Magro Mattei');
  const description = t(
    'seo.description',
    'Portfólio Anderson Magro Mattei - Desenvolvedor Full Stack especializado em React, Node.js e TypeScript',
  );
  const keywords = t(
    'seo.keywords',
    'Anderson Magro Mattei, desenvolvedor, React, Node, Javascript, TypeScript, portfolio, desenvolvedor web',
  );

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Anderson Magro Mattei" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={currentLang} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
