import Lottie from 'react-lottie';

type Props = {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
};

export function AnimatedContactLink({ href, animationData }: Props) {
  return (
    <a href={href} className="h-14 w-14 lg:h-16 lg:w-16">
      <Lottie
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
