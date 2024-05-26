import type { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = PropsWithChildren & {
  style?: string;
};

export function AnimatedCard({ children, style }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex min-w-80 flex-1 flex-col rounded-lg border border-slate-700 bg-slate-800 p-4 
        shadow-md shadow-slate-400/40 ${inView ? 'animate-slide-in-left' : 'opacity-0'} ${style}`}
    >
      {children}
    </div>
  );
}
