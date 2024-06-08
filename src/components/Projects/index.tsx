import { useInView } from 'react-intersection-observer';

import { AnimatedCard } from '../shared/AnimatedCard';
import { SeeHereButton } from '../shared/SeeHereButton';

import { freelances } from './data/freelances';
import { projects } from './data/projects';
import { Chip } from '../shared/Chip';

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
      <div className="mb-4 flex flex-wrap justify-center gap-8">
        {freelances.map((freelance, index) => (
          <AnimatedCard
            key={index}
            className="min-w-[400px] max-w-[600px] flex-1"
          >
            <div className="flex h-full flex-col justify-between gap-3">
              <div>
                <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                  {freelance.title}
                </h3>
                <p className="mt-2 text-justify text-slate-100">
                  {freelance.description}
                </p>
                <div className="mt-1">
                  {freelance.stack.map((tech) => (
                    <Chip key={tech} text={tech} />
                  ))}
                </div>
              </div>
              <div className="mt-1 flex gap-4">
                {freelance.links.map((link, index) => (
                  <SeeHereButton key={index} href={link} />
                ))}
              </div>
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
      <div className="mb-4 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <AnimatedCard
            key={index}
            className="min-w-[400px] max-w-[600px] flex-1"
          >
            <div className="flex h-full flex-col justify-between gap-3">
              <div>
                <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                  {project.title}
                </h3>
                <p className="mt-2 text-justify text-slate-100">
                  {project.description}
                </p>
                <div>
                  {project.stack.map((tech) => (
                    <Chip key={tech} text={tech} />
                  ))}
                </div>
              </div>
              <SeeHereButton href={project.link} />
            </div>
          </AnimatedCard>
        ))}
      </div>
      <div>
        <p>
          * Para mais projetos acesse meu perfil no{' '}
          <a
            href="/"
            target="_blank"
            className="rounded-sm text-cyan-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
