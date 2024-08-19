import Lottie from 'react-lottie';

import loadingAnimation from '../../assets/lotties/loading-animation.json';

export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Lottie
        style={{ width: 200, height: 200 }}
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </div>
  );
}
