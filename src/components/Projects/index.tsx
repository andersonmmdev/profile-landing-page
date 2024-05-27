import { useInView } from 'react-intersection-observer';

import { AnimatedCard } from '../shared/AnimatedCard';
import { SeeHereButton } from '../shared/SeeHereButton';

import { freelances } from './data/freelances';
import { projects } from './data/projects';

export function Projects() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="flex flex-col gap-10">
      <h1
        ref={ref1}
        className={`items-center text-center font-lora text-4xl font-bold text-cyan-500 lg:text-5xl
          ${inView1 ? 'animate-appear' : 'opacity-0'}`}
      >
        Projetos freelance
      </h1>
      <div className="mb-4 flex flex-wrap gap-10">
        {freelances.map((freelance, index) => (
          <AnimatedCard key={index} className="w-full xl:w-full 2xl:w-full">
            <div className="flex h-full flex-col justify-between gap-3">
              <div>
                <h3 className="mt-1 text-xl font-bold text-cyan-500">
                  {freelance.title}
                </h3>
                <p className="mt-2 text-slate-100">{freelance.description}</p>
              </div>
              <SeeHereButton href={freelance.link} />
            </div>
          </AnimatedCard>
        ))}
      </div>
      <h1
        ref={ref2}
        className={`items-center text-center font-lora text-4xl font-bold text-cyan-500 lg:text-5xl
          ${inView2 ? 'animate-appear' : 'opacity-0'}`}
      >
        Projetos pessoais
      </h1>
      <div className="mb-4 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <AnimatedCard key={index}>
            <div className="flex h-full flex-col justify-between gap-3">
              <div>
                <h3 className="mt-1 text-xl font-bold text-cyan-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-100">{project.description}</p>
              </div>
              <SeeHereButton href={project.link} />
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div>
        <p>
          * Para mais projetos acesse meu perfil no{' '}
          <a href="/" target="_blank" className="text-cyan-400">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
