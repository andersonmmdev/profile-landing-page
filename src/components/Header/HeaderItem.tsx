type Props = {
  href: string;
  text: string;
};

export function HeaderItem({ href, text }: Props) {
  return (
    <li className="nav-item animate-fade-down-enter-done invisible duration-75">
      <a
        href={href}
        className="rounded-lg p-1 text-xl font-bold text-slate-200 hover:text-cyan-300 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50 xl:text-3xl"
      >
        {text}
      </a>
    </li>
  );
}
