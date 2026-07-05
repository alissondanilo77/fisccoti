"use client";

import { motion } from "framer-motion";

import {
  BadgeDollarSign,
  Building2,
  Calculator,
  FileText,
  HandCoins,
  IdCard,
  ReceiptText,
  Shield,
  Users,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Assessoria Contábil", desc: "Rotinas contábeis com acompanhamento e organização." },
  { icon: ReceiptText, title: "Assessoria Tributária", desc: "Planejamento e conformidade fiscal de ponta a ponta." },
  { icon: Users, title: "Assessoria Trabalhista", desc: "Cálculos, prazos e suporte em rotinas do RH." },
  { icon: HandCoins, title: "Gestão Financeira", desc: "Indicadores e orientações para decisões com base em dados." },
  { icon: BadgeDollarSign, title: "Consultoria Administrativa", desc: "Apoio para estruturar processos e melhorar gestão." },
  { icon: Building2, title: "Registro de Empresas", desc: "Abertura e regularização com orientação completa." },
  { icon: Calculator, title: "Imposto de Renda", desc: "Suporte e organização para o período de declaração." },
  { icon: Shield, title: "Regularização CPF/CNPJ", desc: "Regularize documentos com segurança e acompanhamento." },
  { icon: IdCard, title: "Empregador Doméstico", desc: "Atendimento e rotinas para contratação legal." },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl font-bold tracking-tight text-#ffffff-950">Serviços completos</h2>
          <p className="mt-3 text-zinc-600">Atendimento especializado para cada necessidade.</p>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.02 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950/5 text-blue-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">{s.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

