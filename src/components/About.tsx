import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { TypewriterEffect } from './shared/TypewriterEffect';
import mailAnimation from '../assets/lotties/mail-animation.json';
import githubAnimation from '../assets/lotties/github-animation.json';
import spotifyAnimation from '../assets/lotties/spotify-animation.json';
import whatsappAnimation from '../assets/lotties/whatsapp-animation.json';
import instagramAnimation from '../assets/lotties/instagram-animation.json';

export function About() {
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
    <div
      className={`flex transform flex-col md:px-8 xl:px-24
      ${showAnimation ? 'translate-x-0' : '-translate-x-full'} 
      transition-transform duration-1000 ease-in-out`}
    >
      <section id="about" className="mt-3 flex flex-col sm:mt-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-3">
            <div>
              <h1 className="flex gap-3 text-2xl text-slate-100 xl:text-3xl">
                Anderson Magro Mattei
              </h1>
              <h2 className="text-xl">Desenvolvedor Full Stack</h2>
            </div>
            <div className="flex w-fit">
              <a
                href="mailto:andersonmmdev@gmail.com"
                className="h-14 w-14 lg:h-16 lg:w-16"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: mailAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </a>
              <a
                href="https://github.com/Andersonmdev"
                className="h-14 w-14 lg:h-16 lg:w-16"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: githubAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/anderson.mmdev"
                className="h-14 w-14 lg:h-16 lg:w-16"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: instagramAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5554996840236"
                className="h-14 w-14 lg:h-16 lg:w-16"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: whatsappAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </a>
              <a
                href="https://open.spotify.com/user/andemm-7"
                className="h-14 w-14 lg:h-16 lg:w-16"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: spotifyAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </a>
            </div>
            <p className="text-balance text-xl font-medium text-slate-200 lg:text-2xl">
              Atuo como desenvolvedor a mais de 6 anos, criando soluções{' '}
              <span className="text-cyan-400">modernas</span> e{' '}
              <span className="text-cyan-400">escaláveis</span> para aplicações
              web e mobile.
            </p>
            <div className="min-h-20">
              <TypewriterEffect
                words={[
                  'Desenvolvimento ágil',
                  'Desenvolvimento de aplicações Web',
                  'Desenvolvimento de aplicações Mobile',
                  'Desenvolvimento e integração de APIs',
                  'Suporte e manutenção de aplicações',
                ]}
                style="text-2xl sm:text-3xl font-medium lg:text-4xl"
              />
            </div>
          </div>
          <div className="hidden min-w-fit items-center lg:flex">
            <img
              src="https://github.com/andersonmdev.png?size=244"
              alt="Profile"
              className="z-10 h-64 w-64 rounded-full"
            />
            <div className="-ml-36 h-56 w-56 rounded-full bg-cyan-400" />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-between">
          <h1 className="items-center text-center text-4xl font-bold text-cyan-400 lg:flex lg:text-5xl">
            Sobre mim
          </h1>
          <p className="max-full text-justify leading-6 text-slate-100 lg:w-3/5 lg:text-xl">
            Minha jornada profissional teve início como Analista de Testes, onde
            desenvolvi testes automatizados E2E para plataformas web e mobile.
            Logo em seguida, migrei para o desenvolvimento web e mobile,
            utilizando principalmente <strong>React</strong>,{' '}
            <strong>React Native</strong> e <strong>Node</strong>. Estou
            constantemente buscando aprimorar minhas habilidades e
            conhecimentos, além de manter-me atualizado com as novas tecnologias
            e tendências do mercado, para assim entregar soluções de qualidade e
            que atendam as necessidades e requisitos dos clientes.
          </p>
        </div>
      </section>
    </div>
  );
}
