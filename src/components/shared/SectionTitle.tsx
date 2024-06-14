import { useInView } from 'react-intersection-observer';

type Props = {
  text: string;
  animated?: boolean;
  className?: string;
};

export function SectionTitle({ text, animated, className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = animated ? (inView ? 'animate-appear' : 'opacity-0') : '';

  return (
    <h1
      ref={ref}
      className={`items-center text-center font-lora text-4xl font-bold text-cyan-500 lg:text-5xl ${animation} ${className}`}
    >
      {text}
    </h1>
  );
}
