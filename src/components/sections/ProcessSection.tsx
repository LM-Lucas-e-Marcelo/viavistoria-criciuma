import { StepCard } from "./StepCard";

interface ProcessSectionProps {
  className?: string;
  id?: string;
}

const steps = [
  {
    index: 1,
    title: "Contato",
    text: "Você envia seus dados e solicita o agendamento da vistoria.",
  },
  {
    index: 2,
    title: "Agendamento",
    text: "Definimos o melhor horário e local conforme sua disponibilidade.",
  },
  {
    index: 3,
    title: "Vistoria",
    text: "Nossa equipe especializada realiza a vistoria completa do veículo.",
  },
  {
    index: 4,
    title: "Resultado",
    text: "Você recebe um laudo detalhado, com fotos e informações completas sobre a procedência do carro.",
  },
];

const stepsDetran = [
  {
    index: 1,
    title: "Chegada",
    text: "Compareça à unidade com os documentos necessários e o veículo.",
  },
  {
    index: 2,
    title: "Atendimento",
    text: "Nossa equipe confere os dados e direciona o veículo para vistoria.",
  },
  {
    index: 3,
    title: "Vistoria",
    text: "O técnico realiza todos os procedimentos exigidos pelo DETRAN.",
  },
  {
    index: 4,
    title: "Emissão do Laudo",
    text: "O laudo é emitido na hora, com validade imediata para o órgão de trânsito.",
  },
];

export const ProcessSection = ({ className, id }: ProcessSectionProps) => {
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

        <h1 className="text-2xl font-bold mb-[-20px] mt-10 text-[#2a4c7f]">
          Vistorias Detran
        </h1>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {stepsDetran.map((step) => (
            <StepCard
              key={step.index}
              index={step.index}
              title={step.title}
              text={step.text}
            />
          ))}
        </ol>

        <h1 className="text-2xl font-bold mb-[-20px] mt-10 text-[#2a4c7f]">
          Vistorias Cautelar
        </h1>
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
