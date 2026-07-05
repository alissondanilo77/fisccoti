import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Ferramentas", href: "#ferramentas" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(229,231,235,0.25)] bg-[var(--background)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">


        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-[0_10px_30px_-15px_rgba(0,166,81,0.6)] ring-1 ring-[rgba(255,255,255,0.08)]">
                F
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Serviços Contábeis</p>
                <p className="text-xs text-[#E5E7EB]/80">Serviços Contábeis</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#E5E7EB]/80">
              Contabilidade inteligente, atendimento humanizado e soluções para empresas, MEIs e profissionais liberais.
            </p>
          </div>


          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-[#E5E7EB]/90 hover:text-[var(--accent)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={Icon?.name ?? index}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB]/40 text-[#E5E7EB]/70 transition hover:bg-[#E5E7EB]/10 hover:border-[#00A651]/40"
                    aria-label={Icon?.name ?? `social-${index}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>



              <p className="text-sm text-[#E5E7EB]/70">© {new Date().getFullYear()} Fiscco. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

