"use client";

import { motion } from "framer-motion";
import { Download, RefreshCcw, Users } from "lucide-react";

export default function Mei() {
  return (
    <section id="mei" className="bg-zinc-50 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl font-bold tracking-tight text-blue-950">
          Você é MEI?
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[{ icon: RefreshCcw, title: "Migrar MEI para ME", desc: "Planejamento tributário para a migração com segurança." }, { icon: Download, title: "Baixar empresa", desc: "Apoio no processo de encerramento/regularização." }].map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950/5 text-blue-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-blue-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

