import { useEffect } from 'react';

import { navigation } from './data/navigation';

export function HeaderNavigation() {
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('invisible');
        item.classList.add(`animate-slide-down`);
      }, index * 300);
    });
  }, []);

  return (
    <>
      <nav className="hidden h-full items-center justify-center sm:flex">
        <ul className="flex gap-10 xl:gap-16">
          {navigation.map((item) => (
            <li key={item.href} className="nav-item invisible">
              <a
                href={item.href}
                className={`rounded-lg font-lora text-xl font-bold text-slate-100
              hover:text-cyan-300 focus:border-cyan-300 focus:outline-none focus:ring-2 
              focus:ring-cyan-300 focus:ring-opacity-50 xl:text-3xl`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden h-0.5 bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 sm:block" />
    </>
  );
}
