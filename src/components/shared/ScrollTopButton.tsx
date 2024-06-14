import { useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export function ScrollTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-top-button');
      if (!scrollButton) return;
      if (window.scrollY > 300) {
        scrollButton.classList.add('opacity-100');
        scrollButton.classList.remove('pointer-events-none');
      } else {
        scrollButton.classList.remove('opacity-100');
        scrollButton.classList.add('pointer-events-none');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        id="scroll-top-button"
        className={`pointer-events-none fixed bottom-4 right-2 rounded-full bg-cyan-400 opacity-0 transition duration-700 ease-in-out hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:ring-opacity-50 xl:bottom-6 xl:right-4`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowCircleUp className="h-8 w-8 fill-cyan-800 md:h-9 md:w-9 xl:h-10 xl:w-10" />
      </button>
    </>
  );
}
