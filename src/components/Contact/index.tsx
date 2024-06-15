import { useState } from 'react';
import Lottie from 'react-lottie';

import { SectionTitle } from '../shared/SectionTitle';
import animationData from '../../assets/lotties/happy-animation.json';

export function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsFlipped(true);
  }

  return (
    <section id="contact" className="flex flex-col gap-8 sm:gap-12 xl:gap-16">
      <SectionTitle text="Contato" animated />
      <form
        className={`m-auto flex h-[350px] w-full flex-col gap-4 pb-2 transition-transform duration-500 sm:max-w-[600px] ${isFlipped ? 'animate-flip-y' : ''}`}
        onSubmit={handleSubmit}
      >
        {isFlipped ? (
          <>
            <p className="text-center text-2xl font-bold text-cyan-500">
              Obrigado pelo contato!
            </p>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-bold text-cyan-500">
                Nome
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
                E-mail
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
                Mensagem
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
              className="rounded-sm bg-cyan-700 px-3 py-2 font-bold text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
            >
              Enviar
            </button>
          </>
        )}
      </form>
    </section>
  );
}
