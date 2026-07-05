"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Coins, Cloud, ShieldCheck, User, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "Redução de custos",
    desc: "Otimize despesas e aumente a previsibilidade do caixa.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte eficiente",
    desc: "Atendimento rápido e acompanhamento contínuo.",
  },
  {
    icon: Cloud,
    title: "Tudo digital",
    desc: "Processos ágeis com documentos e rotinas online.",
  },
  {
    icon: TrendingUp,
    title: "Melhor custo benefício",
    desc: "Serviço completo com valor ajustado ao seu cenário.",
  },
  {
    icon: User,
    title: "Contador exclusivo",
    desc: "Você conta com um especialista dedicado ao seu dia a dia.",
  },
  {
    icon: BadgeCheck,
    title: "Melhor regime tributário",
    desc: "Planejamento para escolher o caminho mais vantajoso.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Benefícios para sua empresa</h2>
          <p className="mt-3 text-[rgba(229,231,235,0.8)]">Contabilidade com foco em segurança e eficiência.</p>
        </motion.div>


        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Cards Benefits */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {benefits.map((b, idx) => {
                const Icon = b.icon;

                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                  >
                    <div className="h-full rounded-3xl bg-[#000000]/20 border border-[#E5E7EB]/40 p-6 shadow-none hover:shadow-[0_18px_50px_-30px_rgba(0,166,81,0.18)] transition">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A651]/10 text-[#00A651]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#FFFFFF]">{b.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#E5E7EB]/80">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



