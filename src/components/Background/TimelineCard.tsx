import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
};

export function TimelineCard({ children, className }: Props) {
  return (
    <div
      className={`relative flex w-full flex-col gap-3 self-center rounded-lg border
      border-slate-700 bg-slate-800 p-4 shadow-md shadow-slate-400/40 xl:w-4/5 2xl:w-3/4 ${className}`}
    >
      {children}
    </div>
  );
}
