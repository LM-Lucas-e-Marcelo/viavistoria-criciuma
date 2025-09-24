import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  name: string;
  text: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
  id?: string;
}

export const TestimonialsSection = ({
  testimonials,
  className,
  id,
}: TestimonialsSectionProps) => {
  return (
    <section
      id={id}
      className={`border-y bg-white py-16 md:py-24 ${className || ""}`}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Depoimentos
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
