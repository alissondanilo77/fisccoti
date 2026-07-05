"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CompanyOpening() {

  return (
    <section id="ferramentas" className="bg-[#000000] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-#ffffff-950">
              Inicie sua contabilidade e eleve o nível da vida financeira da sua empresa
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Abertura gratuita",
                "Melhor regime tributário",
                "Contador acompanhando",
                "Processo sem burocracia",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-zinc-700">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card: somente imagem */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm overflow-hidden"
          >
            <img
              src="/ti1.jpg"
              alt="Abertura de empresa"
              className="h-56 w-full object-cover lg:h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}




