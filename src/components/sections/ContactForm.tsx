import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Timer } from "lucide-react";
import { toast } from "sonner";
import { FormEventHandler } from "react";

interface ContactFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}

export const ContactForm = ({
  onSubmit: customOnSubmit,
  className,
}: ContactFormProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = String(form.get("nome") || "");
    toast.success(
      `${nome ? nome + ", " : ""}recebemos seu contato. Em breve retornaremos!`,
    );
    e.currentTarget.reset();

    // Chama o callback customizado se fornecido
    customOnSubmit?.(e);
  };

  return (
    <div className={className}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Fale conosco
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Solicite um contato
        </h2>
        <p className="mt-3 text-slate-600">
          Envie seus dados e a unidade mais próxima retorna rapidamente.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 text-primary" /> Laudo com
            segurança e transparência
          </li>
          <li className="flex items-start gap-3">
            <Timer className="mt-0.5 h-5 w-5 text-primary" /> Agendamento ágil e
            prático
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Atendimento
            humanizado
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Nome
            </label>
            <input
              name="nome"
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Telefone
            </label>
            <input
              name="telefone"
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Unidade / Cidade
            </label>
            <input
              name="unidade"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Ex.: Via Vistoria - Curitiba/PR"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={4}
              className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Conte rapidamente sua necessidade"
            />
          </div>
          <Button
            type="submit"
            className="h-11 bg-secondary text-white hover:bg-secondary/90"
          >
            Enviar
          </Button>
          <p className="text-xs text-slate-500">
            Ao enviar, você concorda com o contato de uma unidade Via Vistoria.
          </p>
        </div>
      </form>
    </div>
  );
};
