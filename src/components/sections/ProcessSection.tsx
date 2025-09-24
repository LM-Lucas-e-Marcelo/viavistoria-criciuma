import { StepCard } from "./StepCard";

interface Step {
  index: number;
  title: string;
  text: string;
}

interface ProcessSectionProps {
  steps: Step[];
  className?: string;
  id?: string;
}

export const ProcessSection = ({
  steps,
  className,
  id,
}: ProcessSectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ""}`}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Processo
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Como funciona
          </h2>
          <p className="mt-3 text-slate-600">
            Fluxo simples e objetivo do primeiro contato até a vistoria
            concluída.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <StepCard
              key={step.index}
              index={step.index}
              title={step.title}
              text={step.text}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
