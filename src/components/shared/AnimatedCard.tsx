import type { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = PropsWithChildren & {
  className?: string;
};

export function AnimatedCard({ children, className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative flex w-full flex-col gap-3 self-center rounded-lg border
      border-slate-700 bg-slate-800 p-4 shadow-md shadow-slate-400/40 xl:w-4/5 2xl:w-3/4
      ${inView ? 'animate-slide-in-left' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
