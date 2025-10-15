import { Button } from "@/components/ui/button";
import { Clock, Shield, CheckCircle, Phone, MessageCircle } from "lucide-react";

interface CTASectionProps {
  className?: string;
  id?: string;
}

export const CTASection = ({ className, id }: CTASectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-emerald-600 relative overflow-hidden ${className || ""}`}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_35%_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm mb-8">
            <Shield className="h-4 w-4 mr-2" />
            Mais de 2.500 vistorias realizadas com precisão
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
            Pronto para fazer a escolha certa?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não deixe a incerteza comprometer seu investimento. Nossa equipe
            especializada está pronta para garantir a segurança da sua compra.
          </p>

          {/* Benefícios em destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm font-medium">
                Laudo em até 15 minutos
              </span>
            </div>
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm font-medium">Equipe certificada</span>
            </div>
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
              <span className="text-sm font-medium">Garantia de precisão</span>
            </div>
          </div>

          {/* CTAs principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/554834333107" target="_blank">
                <Clock className="h-5 w-5 mr-2" />
                Agendar Vistoria Agora
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 backdrop-blur-sm"
            >
              <a href="tel:+554834333107">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </a>
            </Button>
          </div>

          {/* Urgência e confiança */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
            <p className="text-white/60 text-xs mt-2">
              * Atendimento disponível de segunda a sexta, 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
