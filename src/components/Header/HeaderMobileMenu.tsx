import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { navigation } from './data/navigation';

export function HeaderMobileMenu() {
  const menuRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex h-full pr-4 sm:hidden">
        <button
          aria-label="Menu button"
          className="ml-auto text-2xl text-cyan-400"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
      </div>
      <nav
        ref={menuRef}
        className={`fixed inset-x-0 top-0 z-10 h-fit transform bg-gradient-to-b from-cyan-700 to-cyan-900
        py-3 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-4 text-center sm:hidden`}
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-lora text-xl font-bold text-slate-100 hover:text-cyan-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
