import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';

import { SectionTitle } from '../shared/SectionTitle';
import animationData from '../../assets/lotties/happy-animation.json';

export default function Contact() {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsFlipped(true);
  }

  return (
    <section id="contact" className="flex flex-col gap-8 sm:gap-12 xl:gap-16">
      <SectionTitle text={t('contact.title')} animated />
      <form
        className={`m-auto flex h-[350px] w-full flex-col gap-4 pb-2 transition-transform duration-500 sm:max-w-[600px] ${isFlipped ? 'animate-flip-y' : ''}`}
        onSubmit={handleSubmit}
      >
        {isFlipped ? (
          <>
            <p className="text-center text-2xl font-bold text-cyan-500">
              {t('contact.thankYou')}
            </p>
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-bold text-cyan-500">
                {t('contact.name')}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="h-8 rounded-sm border border-cyan-600 bg-slate-800 px-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-bold text-cyan-500">
                {t('contact.email')}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="h-8 rounded-sm border border-cyan-600 bg-slate-800 px-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-bold text-cyan-500">
                {t('contact.message')}
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="rounded-sm border border-cyan-600 bg-slate-800 px-2 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-600"
              ></textarea>
            </div>
            <button
              type="submit"
              aria-label="Enviar mensagem"
              className="rounded-sm bg-cyan-700 px-3 py-2 font-bold text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
            >
              {t('contact.send')}
            </button>
          </>
        )}
      </form>
    </section>
  );
}
