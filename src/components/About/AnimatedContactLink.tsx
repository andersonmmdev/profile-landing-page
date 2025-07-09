import { useEffect, useRef } from 'react';
import type { LottieRefCurrentProps } from 'lottie-react';
import Lottie from 'lottie-react';

type Props = {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  ariaLabel?: string;
};

export function AnimatedContactLink({ href, animationData, ariaLabel }: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  function handleVisibilityChange() {
    if (document.visibilityState === 'visible' && lottieRef.current) {
      lottieRef.current.play();
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      className="focus: h-14 w-14 rounded-md focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50 lg:h-16 lg:w-16"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </a>
  );
}
