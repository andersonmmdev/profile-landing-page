import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AboutMe } from './AboutMe';
import { ContactButtons } from './ContactButtons';
import { ProfilePicture } from './ProfilePicture';
import { TypewriterEffect } from './TypewriterEffect';

export default function About() {
  const { t } = useTranslation();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 50);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="about"
      className={`flex transform flex-col transition-transform duration-1000
      ${showAnimation ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h1 className="flex gap-3 text-2xl text-slate-100 xl:text-3xl">
              Anderson Magro Mattei
            </h1>
            <h2 className="text-xl">{t('about.role')}</h2>
          </div>
          <ContactButtons />
          <p className="text-balance text-xl font-medium text-slate-200 lg:text-2xl">
            {t('about.description1')}{' '}
            <span className="text-cyan-400">{t('about.description2')}</span>{' '}
            {t('about.description3')}{' '}
            <span className="text-cyan-400">{t('about.description4')}</span>{' '}
            {t('about.description5')}
          </p>
          <div className="min-h-20">
            <TypewriterEffect
              className="text-2xl font-medium sm:text-3xl lg:text-4xl"
              words={[0, 1, 2, 3].map((word) => t(`about.words.${word}`))}
            />
          </div>
        </div>
        <ProfilePicture />
      </div>
      <AboutMe />
    </section>
  );
}
