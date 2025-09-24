import logo from "@/assets/logo_via.png";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={logo} alt="Via Vistoria" width={150} />
          </div>
          <p className="text-sm text-slate-600">
            Vistorias veiculares com credibilidade e agilidade. Landing pages
            personalizadas para cada unidade franqueada.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-primary" href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#como-funciona">
                Como funciona
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#depoimentos">
                Depoimentos
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Serviços
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Vistoria Cautelar</li>
            <li>Vistoria de Transferência</li>
            <li>2ª via de Recibo</li>
            <li>Alteração de Característica</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">Contato</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              Email:{" "}
              <a
                href="mailto:contato@viavistoria.com.br"
                className="hover:text-primary"
              >
                contato@viavistoria.com.br
              </a>
            </li>
            <li>Atendimento: Seg–Sex, 8h–18h</li>
            <li>Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t bg-white">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Via Vistoria • Todos os direitos
            reservados
          </p>
          <p>Segurança e transparência em todo o processo</p>
        </div>
      </div>
    </footer>
  );
}
