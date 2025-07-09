import { useTranslation } from 'react-i18next';

import { SectionTitle } from '../shared/SectionTitle';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-between">
      <SectionTitle text={t('about.title')} className="lg:flex" />
      <p className="max-full text-pretty text-justify leading-6 text-slate-100 lg:w-3/5 lg:text-xl">
        {t('about.summary')}
      </p>
    </div>
  );
}
