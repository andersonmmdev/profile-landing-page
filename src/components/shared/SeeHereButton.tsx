import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  href: string;
};

export function SeeHereButton({ href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-fit items-center gap-2 rounded-lg bg-cyan-700 px-3 py-2 font-bold text-white 
        shadow-md shadow-cyan-500 hover:animate-move-y`}
    >
      <span className="hidden sm:block">Veja aqui</span>
      <FaExternalLinkAlt />
    </a>
  );
}
