import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_via.png";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Vistoria Cautelar", href: "#servicos" },
  { label: "Vistoria Detran", href: "#servicos-detran" },
  { label: "Quem somos", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-2">
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Via Vistoria" width={150} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <a href="https://wa.me/554834333107" target="_blank">
              Agendar vistoria
            </a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container grid gap-2 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-secondary hover:bg-secondary/90">
              <a
                href="https://wa.me/554834333107"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Agendar vistoria
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
