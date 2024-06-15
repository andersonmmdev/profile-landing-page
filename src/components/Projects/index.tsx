import { AnimatedCard } from '../shared/AnimatedCard';
import { SeeHereButton } from '../shared/SeeHereButton';

import { freelances } from './data/freelances';
import { projects } from './data/projects';
import { Chip } from '../shared/Chip';
import { SectionTitle } from '../shared/SectionTitle';

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 sm:gap-12 xl:gap-16">
      <div className="flex flex-col gap-8">
        <SectionTitle text="Projetos freelance" animated />
        <div className="mb-4 flex flex-wrap justify-center gap-8">
          {freelances.map((freelance, index) => (
            <AnimatedCard
              key={index}
              className="min-w-full max-w-[600px] flex-1 lg:min-w-[400px]"
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                    {freelance.title}
                  </h3>
                  <p className="mt-2 text-pretty text-justify text-slate-100">
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
      </div>
      <div className="flex flex-col gap-8">
        <SectionTitle text="Projetos pessoais" animated />
        <div className="mb-4 flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="min-w-full max-w-[600px] flex-1 lg:min-w-[400px]"
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-justify text-slate-100">
                    {project.description}
                  </p>
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
      </div>
    </section>
  );
}
