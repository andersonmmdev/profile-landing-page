import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-14 flex flex-col items-center justify-center gap-2 py-6 text-sm text-slate-100">
      <p>
        {t('footer.makeWith')} ❤️ {t('footer.by')} Anderson Magro Mattei
      </p>
      <p>
        {t('footer.allRightsReserved')} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
