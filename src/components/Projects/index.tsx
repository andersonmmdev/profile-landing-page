import { useTranslation } from 'react-i18next';

import { Chip } from '../shared/Chip';
import { SectionTitle } from '../shared/SectionTitle';
import { AnimatedCard } from '../shared/AnimatedCard';
import { SeeHereButton } from '../shared/SeeHereButton';

import { projects } from './data/projects';
import { freelances } from './data/freelances';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="flex flex-col gap-8 sm:gap-12 xl:gap-16">
      <div className="flex flex-col gap-8">
        <SectionTitle text={t('projects.title')} animated />
        <div className="mb-4 flex flex-wrap justify-center gap-8">
          {freelances.map((freelance, index) => (
            <AnimatedCard
              key={index}
              className="min-w-full max-w-[600px] flex-1 lg:min-w-[400px]"
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                    {t(freelance.title)}
                  </h3>
                  <p className="mt-2 text-pretty text-justify text-slate-100">
                    {t(freelance.description)}
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
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="min-w-full max-w-[600px] flex-1 lg:min-w-[400px]"
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                    {t(project.title)}
                  </h3>
                  <p className="mt-2 text-justify text-slate-100">
                    {t(project.description)}
                  </p>
                </div>
                <div className="mt-1">
                  {project.stack.map((tech) => (
                    <Chip key={tech} text={tech} />
                  ))}
                </div>
                <SeeHereButton href={project.link} />
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div>
          <p>
            * {t('projects.seeMore')}{' '}
            <a
              href="/"
              target="_blank"
              className="rounded-sm text-blue-500 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
