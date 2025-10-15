import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Star, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import sticky from "@/assets/sticky-via.png";
interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vistoria.png')",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-emerald-600/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(65%_35%_at_50%_0%,rgba(255,255,255,0.15),transparent)]"
      />

      <div
        className="absolute top-20 left-10 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <div className="h-2 w-2 bg-white/30 rounded-full"></div>
      </div>
      <div
        className="absolute top-40 right-20 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      >
        <div className="h-3 w-3 bg-white/20 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-40 left-20 animate-bounce"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      >
        <div className="h-2 w-2 bg-white/25 rounded-full"></div>
      </div>

      <div className="container relative grid min-h-[72svh] items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div
          className={`text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
            <Star className="h-4 w-4 mr-2 text-yellow-300" />
            Mais de 2.500 vistorias realizadas
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Antes de investir no carro dos seus sonhos, deixe a VIA analisar
            cada detalhe.
          </h1>

          <p className="mt-4 max-w-xl text-white/85 text-lg">
            Com a nossa análise completa, você faz a escolha certa. A VIA te
            ajuda a enxergar além do óbvio!
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm">Laudo em até 15 minutos</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm">Laudos precisos e confiáveis</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm">
                Equipe especializada e certificada
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              asChild
              className="bg-emerald-500 text-white hover:bg-emerald-500/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/554834333107" target="_blank">
                <Clock className="h-4 w-4 mr-2" />
                Agende a sua vistoria
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-lg md:max-w-lg hover:scale-105 transition-transform duration-300">
            <div className="grid h-full place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5">
              <div className="text-center">
                <div className="relative">
                  <img
                    src={sticky}
                    alt="Sticky"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-wide text-white/80">
                  Via Vistoria
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Segurança e transparência
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-300 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
