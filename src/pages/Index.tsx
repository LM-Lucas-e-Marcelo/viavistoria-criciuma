import { useEffect } from "react";
import {
  HeroSection,
  FeaturesSection,
  FeaturesSectionDetran,
  StatsSection,
  ProcessSection,
  TestimonialsSection,
  VideoSection,
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

  const testimonials = [
    {
      name: "Guilherme Ivair",
      text: "atendimento impecável , serviço de qualidade , pessoal que trabalha ali bem atencioso prestativo nota mil",
    },
    {
      name: "Philipe Veloso",
      text: "Excelente atendimento e muito ágil! Toda a equipe está de parabéns!",
    },
    {
      name: "Alex Pirovano",
      text: "Ótimo atendimento, pessoal educado e bem disposto!!! Parabéns e cautelar muito bem feita inclusive",
    },
  ];

  return (
    <div id="inicio" className="min-h-screen bg-white">
      <HeroSection />

      <StatsSection id="estatisticas" />

      <FeaturesSection id="servicos" />

      <FeaturesSectionDetran id="servicos-detran" />

      <SectionTransition variant="geometric" />
      <ProcessSection id="como-funciona" />

      <VideoSection id="video" />

      <About id="sobre" />

      <TestimonialsSection testimonials={testimonials} id="depoimentos" />

      <CTASection id="cta-principal" />

      <SectionTransition variant="gradient" />
      <Contact id="contato" />

      <WhatsAppButton
        phoneNumber="554834333107"
        message="Olá! Gostaria de saber mais sobre os serviços de vistoria."
      />
    </div>
  );
}
