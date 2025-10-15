import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import sticky from "@/assets/sticky-via.png";
import { FaWhatsapp } from "react-icons/fa";
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
          backgroundImage: "url('/vistoria.webp')",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70"
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
            <img src={sticky} alt="Sticky" className="w-12 h-12 mr-2" />
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
              <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
              <span className="text-sm">Laudo em até 15 minutos</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
              <span className="text-sm">Laudos precisos e confiáveis</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
              <span className="text-sm">
                Equipe especializada e certificada
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/554834333107"
              target="_blank"
              className="bg-green-500 flex items-center gap-2 rounded-md py-2 px-6"
            >
              <FaWhatsapp className="w-5 h-5 mt-[-2px]" />
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
