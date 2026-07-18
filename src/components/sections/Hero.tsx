"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";


export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Overlay para melhorar a leitura */}
        <div className="absolute inset-0 bg-black/65" />


        {/* Efeitos de luz */}
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#00A651]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#00A651]/15 blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(229,231,235,0.35)] bg-[rgba(0,0,0,0.35)] px-4 py-2 text-sm text-[rgba(229,231,235,0.92)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Contabilidade inteligente • Atendimento humanizado
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.08]">
              Abra sua empresa conosco e descubra o poder de uma gestão
              contábil assertiva!
            </h1>

            <p className="mt-5 text-lg leading-8 text-[rgba(229,231,235,0.8)]">
              Contabilidade inteligente, atendimento humanizado e soluções para
              empresas, MEIs e profissionais liberais.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#empresa" className="inline-flex">
                <Button>
                  Abra sua empresa
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>

              <a href="#contato" className="inline-flex">
                <Button variant="secondary">
                  Falar com especialista
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Segurança fiscal",
                "Suporte contínuo",
                "Processos digitais",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-[rgba(229,231,235,0.35)] bg-[rgba(0,0,0,0.2)] p-4 shadow-none transition hover:shadow-[0_20px_60px_-45px_rgba(0,166,81,0.35)]"
                >
                  <p className="text-sm font-semibold text-white">{t}</p>
                  <p className="mt-1 text-xs text-[rgba(229,231,235,0.7)]">
                    Com orientação do seu contador
                  </p>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Card premium com imagem (overlay + badges) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative h-[520px] overflow-hidden rounded-3xl border border-[rgba(229,231,235,0.18)] bg-[rgba(255,255,255,0.04)] shadow-[0_20px_70px_-45px_rgba(0,0,0,0.9)] md:h-[560px]"
          >
            {/* eslint-disable-next/no-img-element */}
            <img
              src="/ti3.png"
              alt="Gestão fiscal com clareza e previsibilidade"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            {/* Gradientes para dar leitura premium */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,166,81,0.22),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]" />

            <div className="relative h-full p-5 sm:p-7 md:p-8">
              <div className="flex h-full flex-col justify-end gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[rgba(229,231,235,0.85)]">
                    Visão que reduz risco e acelera decisões
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[rgba(229,231,235,0.72)]">
                    Acompanhamento contínuo com clareza, alertas e rotinas que protegem sua empresa.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Alertas de conformidade",
                    "Planejamento fiscal",
                    "Rotinas digitais",
                    "Suporte em tempo útil",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[rgba(229,231,235,0.22)] bg-[rgba(0,0,0,0.25)] px-3 py-1 text-[11px] font-semibold text-[rgba(229,231,235,0.9)] backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="h-px w-full bg-[rgba(229,231,235,0.14)]" />

                <div className="grid grid-cols-2 gap-3">
                  {[{ v: "+100%", l: "Mais clareza" }, { v: "0" , l: "Surpresas no fiscal" }].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-[rgba(229,231,235,0.18)] bg-[rgba(255,255,255,0.04)] p-4 backdrop-blur">
                      <p className="text-lg font-bold text-white">{s.v}</p>
                      <p className="mt-1 text-[11px] leading-4 text-[rgba(229,231,235,0.7)]">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 