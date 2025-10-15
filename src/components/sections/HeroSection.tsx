import { CheckCircle, ChevronRight } from "lucide-react";
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
      {/* Background com parallax */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover md:bg-center bg-start bg-no-repeat transition-transform duration-700"
        style={{
          backgroundImage: "url('/vistoria.webp')",
        }}
      />

      {/* Overlay gradiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/80"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(65%_35%_at_50%_0%,rgba(255,255,255,0.15),transparent)]"
      />

      {/* Elementos decorativos flutuantes - mais variados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculos animados */}
        <div
          className="absolute top-20 left-10 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <div className="h-3 w-3 bg-white/30 rounded-full shadow-lg"></div>
        </div>
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <div className="h-4 w-4 bg-white/25 rounded-full shadow-lg"></div>
        </div>
        <div
          className="absolute bottom-40 left-20 animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        >
          <div className="h-2 w-2 bg-white/35 rounded-full shadow-lg"></div>
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "0.5s" }}
        >
          <div className="h-3 w-3 bg-white/20 rounded-full shadow-lg"></div>
        </div>
        <div
          className="absolute bottom-1/4 right-10 animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "1.5s" }}
        >
          <div className="h-2 w-2 bg-white/30 rounded-full shadow-lg"></div>
        </div>

        {/* Círculos maiores com blur */}
        <div
          className="absolute top-1/4 left-1/4 animate-pulse"
          style={{ animationDuration: "4s" }}
        >
          <div className="h-20 w-20 bg-white/5 rounded-full blur-xl"></div>
        </div>
        <div
          className="absolute bottom-1/3 right-1/3 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        >
          <div className="h-32 w-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Linhas decorativas */}
        <div
          className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container relative grid min-h-[72svh] items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div
          className={`text-white space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge com animação aprimorada */}
          <div
            className={`inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={sticky}
              alt="Sticky"
              className="w-12 h-12 mr-2 drop-shadow-lg"
            />
            <span className="font-semibold">
              Mais de 2.500 vistorias realizadas
            </span>
          </div>

          {/* Título com animação escalonada */}
          <h1
            className={`text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Antes de investir no carro dos seus{" "}
            <span className="relative inline-block">
              <span className="relative z-10">sonhos</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 -rotate-1"></span>
            </span>
            , deixe a VIA analisar cada detalhe.
          </h1>

          {/* Subtítulo */}
          <p
            className={`max-w-xl text-white/90 text-lg md:text-xl leading-relaxed drop-shadow transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Com a nossa análise completa, você faz a escolha certa. A VIA te
            ajuda a enxergar além do óbvio!
          </p>

          {/* CTAs com efeitos aprimorados */}

          <a
            href="https://wa.me/554834333107"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 w-[200px] flex items-center justify-center gap-2 rounded-lg py-3 px-6 font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5" />
            Fale conosco
          </a>
        </div>

        {/* Coluna direita - Card flutuante com stats */}
        <div
          className={`hidden md:flex relative justify-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="relative">
            {/* Card de destaque */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-500">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-white mb-2 animate-pulse">
                    2.500+
                  </div>
                  <div className="text-white/80 font-medium">
                    Vistorias Realizadas
                  </div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      15min
                    </div>
                    <div className="text-white/70 text-sm">Laudo Rápido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      100%
                    </div>
                    <div className="text-white/70 text-sm">Confiável</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos ao redor do card */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
