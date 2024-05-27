import { useInView } from 'react-intersection-observer';

import { experiences } from './data/experiences';

import { TimelineCard } from './TimelineCard';
import { SectionTitle } from '../shared/SectionTitle';
import { SeeHereButton } from '../shared/SeeHereButton';
import { Chip } from '../shared/Chip';

export function Background() {
  const { ref: ref, inView: inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="background" className="flex flex-col gap-10">
      <SectionTitle animated text="Experiência" />
      <div
        ref={ref}
        className={`mb-4 flex flex-col gap-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}
      >
        {experiences.map((experience, index) => (
          <TimelineCard key={experience.company} className="timeline-card">
            <div className="flex justify-between gap-1">
              <div>
                <p
                  className={`text-sm ${index % 2 === 0 ? 'timeline-dot-left' : 'timeline-dot-right'}`}
                >
                  {experience.period}
                </p>
                <h3 className="mt-1 text-xl font-bold text-cyan-500">
                  {experience.role}
                </h3>
                <h4 className="text-cyan-500">{experience.company}</h4>
              </div>
              <SeeHereButton href={experience.link} />
            </div>
            <p className="text-justify text-slate-100">
              {experience.description}
            </p>
            <div>
              {experience.stack.map((tech) => (
                <Chip key={tech} text={tech} />
              ))}
            </div>
          </TimelineCard>
        ))}
      </div>
    </section>
  );
}
