import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { experiences } from '../data/experiences';
import { AnimatedCard } from './AnimatedCard';
export function Background() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="background" className="flex flex-col gap-10">
      <h1
        ref={ref}
        className={`font-lora items-center text-center text-4xl font-bold text-cyan-500 lg:text-5xl
          ${inView ? 'animate-appear' : 'opacity-0'}`}
      >
        Experiência
      </h1>
      <div className="mb-4 flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <AnimatedCard key={index}>
            <div className="flex justify-between">
              <div>
                <p className="text-sm">{experience.period}</p>
                <h3 className="mt-1 text-xl font-bold text-cyan-500">
                  {experience.role}
                </h3>
                <h4 className="text-cyan-500">{experience.company}</h4>
              </div>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:animate-move-y mt-3 h-9 rounded-lg bg-cyan-700 px-3 
            py-2 font-bold text-white shadow-md shadow-cyan-500`}
              >
                Veja aqui
                <FaExternalLinkAlt className="mb-1 ml-2 inline" />
              </a>
            </div>
            <p className="mt-3 text-justify text-slate-100">
              {experience.description}
            </p>
            <div className="mt-2">
              {experience.stack.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-2 inline-block rounded-lg bg-cyan-600 px-2 py-1 font-bold text-slate-100 hover:motion-safe:animate-pulse"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
