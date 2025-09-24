import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar você. Agende sua vistoria ou tire suas
            dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Telefone
                  </h3>
                  <p className="text-muted-foreground">
                    <a href="tel:4834333107">(48) 3433-3107</a>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <a
                    href="mailto:contato@viavistoria.com.br"
                    className="text-muted-foreground"
                  >
                    contato@viavistoria.com.br
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Criciúma, Santa Catarina – SC.
                      <br />
                      R. Cel. Marcos Rovaris, 755.
                      <br />
                      CEP: 88801-100.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: Fechado</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.026495636874!2d-49.36069725743162!3d-28.678540221549728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521788f630feccb%3A0xad54e5b60f0b6a05!2sVIA%20CRICI%C3%9AMA%20-%20VISTORIA%20VEICULAR%20E%20LAUDO%20CAUTELAR!5e0!3m2!1spt-BR!2sbr!4v1758725594758!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
