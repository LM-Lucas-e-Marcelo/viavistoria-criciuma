import { useEffect } from "react";
import {
  HeroSection,
  FeaturesSection,
  FeaturesSectionDetran,
  StatsSection,
  ProcessSection,
  TestimonialsSection,
} from "@/components/sections";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CTASection } from "@/components/ui/cta-section";
import { SectionTransition } from "@/components/ui/section-transitions";

export default function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const steps = [
    {
      index: 1,
      title: "Contato",
      text: "Você envia seus dados e a unidade retorna rapidamente.",
    },
    {
      index: 2,
      title: "Agendamento",
      text: "Definimos o melhor horário e local para a vistoria.",
    },
    {
      index: 3,
      title: "Vistoria",
      text: "Equipe especializada realiza todos os procedimentos.",
    },
    {
      index: 4,
      title: "Resultado",
      text: "Laudo com transparência e validade para sua necessidade.",
    },
  ];

  const testimonials = [
    {
      name: "Giovani L.",
      text: "Atendimento excelente e processo muito rápido. Recomendo a todos!",
    },
    {
      name: "Maria E.",
      text: "Transparência do início ao fim. Fiquei muito segura com o laudo.",
    },
    {
      name: "Rafael S.",
      text: "Consegui agendar no mesmo dia e fui muito bem atendido.",
    },
  ];

  return (
    <div id="inicio" className="min-h-screen bg-white">
      <HeroSection />

      <StatsSection id="estatisticas" />

      <FeaturesSection id="servicos" />

      <FeaturesSectionDetran id="servicos-detran" />

      <SectionTransition variant="geometric" />
      <ProcessSection steps={steps} id="como-funciona" />

      <About id="sobre" />

      <TestimonialsSection testimonials={testimonials} id="depoimentos" />

      <CTASection id="cta-principal" />

      <SectionTransition variant="gradient" />
      <Contact id="contato" />

      <WhatsAppButton
        phoneNumber="5548999999999"
        message="Olá! Gostaria de saber mais sobre os serviços de vistoria."
      />
    </div>
  );
}
