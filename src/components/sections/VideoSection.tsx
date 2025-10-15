import { Play } from "lucide-react";

interface VideoSectionProps {
  id?: string;
}

export const VideoSection = ({ id }: VideoSectionProps) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Assista ao Vídeo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Entenda a Vistoria de Transferência
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira nosso vídeo explicativo e saiba como funciona todo o
              processo de vistoria veicular para transferência.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-muted">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/23fUhURppwE?si=gblQEgtkIMd4FBrn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Ficou com alguma dúvida?{" "}
              <a
                href="#contato"
                className="text-primary font-semibold hover:underline"
              >
                Entre em contato conosco
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
