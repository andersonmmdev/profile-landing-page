import { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';

type Props = {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
};

export function AnimatedContactLink({ href, animationData }: Props) {
  const lottieRef = useRef(null);

  function handleVisibilityChange() {
    if (document.visibilityState === 'visible' && lottieRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
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
    >
      <Lottie
        ref={lottieRef}
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </a>
  );
}
