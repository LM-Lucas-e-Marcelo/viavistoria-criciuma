import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard = ({
  name,
  text,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm ${className || ""}`}
    >
      <div
        className="flex items-center gap-1 text-amber-500"
        aria-label={`${rating} de 5`}
      >
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-slate-700">"{text}"</p>
      <p className="mt-4 text-sm font-medium text-slate-900">{name}</p>
    </div>
  );
};
