import { AnimatedContactLink } from './AnimatedContactLink';
import { buttons } from './data/button';

export function ContactButtons() {
  return (
    <div className="flex w-fit">
      {buttons.map((button) => (
        <AnimatedContactLink
          key={button.href}
          href={button.href}
          animationData={button.animationData}
          ariaLabel={button.ariaLabel}
        />
      ))}
    </div>
  );
}
