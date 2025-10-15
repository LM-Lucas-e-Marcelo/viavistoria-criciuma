import { FeatureCardDetran } from "./FeatureCardDetran";
import { FEATURES_DETRAN } from "@/constants/features";

interface FeaturesSectionDetranProps {
  className?: string;
  id?: string;
}

export const FeaturesSectionDetran = ({
  className,
  id,
}: FeaturesSectionDetranProps) => {
  return (
    <section
      id={id}
      className={`bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 py-16 md:py-24 relative overflow-hidden ${className || ""}`}
    >
      {/* Background animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse"></div>
        <div
          className="absolute top-20 left-20 w-20 h-20 bg-secondary/10 rounded-full animate-bounce"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-primary/10 rounded-full animate-bounce"
          style={{ animationDuration: "9s", animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Serviços
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Vistoria Detran
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURES_DETRAN.map((feature, index) => (
            <FeatureCardDetran
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              documents={feature.documents}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
