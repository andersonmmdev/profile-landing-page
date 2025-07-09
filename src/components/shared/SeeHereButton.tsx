import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  href: string;
};

export function SeeHereButton({ href }: Props) {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-fit w-fit items-center gap-2 rounded-lg bg-cyan-700 px-3 py-2 font-bold text-white 
        shadow-md shadow-cyan-500 hover:animate-move-y focus:border-cyan-300 focus:outline-none 
        focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50`}
    >
      <span className="hidden sm:block">{t('common.seeHere')}</span>
      <FaExternalLinkAlt />
    </a>
  );
}
