interface StepCardProps {
  index: number;
  title: string;
  text: string;
  className?: string;
}

export const StepCard = ({ index, title, text, className }: StepCardProps) => {
  return (
    <li
      className={`relative rounded-2xl border bg-white p-6 shadow-sm ${className || ""}`}
    >
      <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
        {index}
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </li>
  );
};
