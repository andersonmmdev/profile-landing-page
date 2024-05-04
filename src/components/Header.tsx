export function Header() {
  return (
    <header className="flex flex-col h-12">
      <nav className="h-full flex justify-center items-center">
        <ul className="flex gap-16">
          <li className="duration-100 hover:scale-110">
            <a
              href="#about"
              className="text-gray-800 font-bold text-nowrap duration-100 hover:text-cyan-400"
            >
              Sobre
            </a>
          </li>
          <li className="duration-100 hover:scale-110">
            <a
              href="#projects"
              className="text-gray-800 font-bold text-nowrap duration-100 hover:text-cyan-400"
            >
              Projetos
            </a>
          </li>
          <li className="duration-100 hover:scale-110">
            <a
              href="#contact"
              className="text-gray-800 font-bold text-nowrap duration-100 hover:text-cyan-400"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex mt-auto self-center w-3/4 h-0.5 bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100" />
    </header>
  );
}
