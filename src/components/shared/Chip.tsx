type Props = {
  text: string;
};

export function Chip({ text }: Props) {
  return (
    <span className="mr-2 mt-2 inline-block rounded-lg bg-cyan-600 px-2 py-1 font-bold text-slate-100 transition-colors hover:bg-cyan-700">
      {text}
    </span>
  );
}
