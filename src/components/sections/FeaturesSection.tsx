import { FeatureCardPrecautionary } from "./FeatureCardPrecautionary";
import { FEATURES_PRECAUTIONARY } from "@/constants/features";

interface FeaturesSectionProps {
  className?: string;
  id?: string;
}

export const FeaturesSection = ({ className, id }: FeaturesSectionProps) => {
  return (
    <section
      id={id}
      className={` bg-slate-50 py-16 md:py-24 relative overflow-hidden ${className || ""}`}
    >
      {/* Background animado sutil */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.05)_1px,transparent_0)] bg-[length:50px_50px] animate-pulse"></div>
        <div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-bounce"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/5 rounded-full animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Serviços
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Vistoria Cautelar
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURES_PRECAUTIONARY.map((feature, index) => (
            <FeatureCardPrecautionary
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
