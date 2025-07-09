import Lottie from 'lottie-react';

import loadingAnimation from '../../assets/lotties/loading-animation.json';

export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
}
