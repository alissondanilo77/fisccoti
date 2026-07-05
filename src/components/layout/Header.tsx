"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Ferramentas", href: "#ferramentas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={
        "fixed left-0 right-0 top-0 z-50 border-b transition-colors " +
        (scrolled ? "border-[rgba(0,166,81,0.35)] bg-[rgba(0,0,0,0.68)] backdrop-blur" : "border-transparent bg-transparent")
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">

        <motion.a
          href="#"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
          aria-label="Fiscco"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-[0_10px_30px_-15px_rgba(0,166,81,0.7)] ring-1 ring-[rgba(255,255,255,0.08)]">
            F
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Fiscco</p>
            <p className="text-xs text-[#E5E7EB]/80">Serviços Contábeis</p>
          </div>

        </motion.a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm font-medium text-[#E5E7EB]/90 hover:text-[var(--accent)] transition-colors" 
            >
              {it.label}
            </a>

          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contato"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_-30px_rgba(0,166,81,0.65)] ring-1 ring-[rgba(255,255,255,0.08)] transition hover:filter hover:brightness-110"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(229,231,235,0.35)] bg-[rgba(255,255,255,0.06)] text-white transition hover:bg-[rgba(255,255,255,0.10)] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden"
        >
          <div className="mx-auto w-full max-w-6xl px-4 pb-4">
            <div className="rounded-2xl border border-[rgba(229,231,235,0.25)] bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
              <div className="flex flex-col gap-3">
                {navItems.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[#E5E7EB]/90 hover:bg-[rgba(229,231,235,0.08)]"
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
              <a
                href="#contato"
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_-30px_rgba(0,166,81,0.65)] ring-1 ring-[rgba(255,255,255,0.08)] transition hover:filter hover:brightness-110"
                onClick={() => setOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

