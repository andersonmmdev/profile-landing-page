import { useEffect, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  switchWordDelay?: number;
  className?: string;
};

export function TypewriterEffect(props: Props) {
  const { words, typingSpeed = 100, switchWordDelay = 4000, className } = props;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isAwaitingSwitch, setIsAwaitingSwitch] = useState(false);
  const [displayedWordIndex, setDisplayedWordIndex] = useState(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout | null = null;
    if (isTyping) {
      typingInterval = setInterval(() => {
        const wordToType = words[displayedWordIndex];
        setDisplayText((prev) => {
          if (prev === wordToType) {
            clearInterval(typingInterval as NodeJS.Timeout);
            setIsAwaitingSwitch(true);
            setTimeout(() => {
              const nextIndex =
                displayedWordIndex === words.length - 1
                  ? 0
                  : displayedWordIndex + 1;
              setDisplayedWordIndex(nextIndex);
              setIsTyping(false);
            }, switchWordDelay);
          }
          return wordToType.slice(0, prev.length + 1);
        });
      }, typingSpeed);
    } else {
      setIsAwaitingSwitch(false);
      typingInterval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev === '') {
            clearInterval(typingInterval as NodeJS.Timeout);
            setIsTyping(true);
          }
          return prev.slice(0, prev.length - 1);
        });
      }, typingSpeed / 2);
    }

    return () => {
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [words, typingSpeed, switchWordDelay, isTyping, displayedWordIndex]);

  return (
    <span
      className={`${isAwaitingSwitch ? 'text-cyan-400' : 'gradient-text'} ${className}`}
    >
      {displayText}
    </span>
  );
}
