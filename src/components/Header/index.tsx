import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { HeaderItem } from './HeaderItem';

export function Header() {
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

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('invisible');
        item.classList.add(`animate-fade-down-duration-${index + 1}`);
      }, index);
    });
  }, []);

  return (
    <header className="h-8 sm:h-12 xl:h-16">
      <nav className="hidden h-full items-center justify-center sm:flex">
        <ul className="flex gap-16">
          <HeaderItem href="#about" text="Sobre" />
          <HeaderItem href="#projects" text="Projetos" />
          <HeaderItem href="#contact" text="Contato" />
        </ul>
      </nav>
      <div className="flex pt-2 sm:hidden">
        <button className="ml-auto" onClick={() => setIsOpen((prev) => !prev)}>
          <FaBars className="text-2xl text-cyan-400" />
        </button>
      </div>
      <nav
        ref={menuRef}
        className={`fixed inset-x-0 top-0 z-10 h-fit transform bg-gradient-to-b from-cyan-700 to-cyan-950 
        py-3 ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-4 text-center sm:hidden`}
        >
          <HeaderItem href="#about" text="Sobre" />
          <HeaderItem href="#projects" text="Projetos" />
          <HeaderItem href="#contact" text="Contato" />
        </ul>
      </nav>
      <div className="hidden h-0.5 bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 sm:block" />
    </header>
  );
}
