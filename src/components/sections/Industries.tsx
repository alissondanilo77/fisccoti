"use client";

import { motion } from "framer-motion";


const industries = [
  "Comércio",
  "Transportes",
  "Serviços",
  "Indústrias",
  "E-commerce",
  "Profissionais de TI",
  "Saúde",
  "Advogados",
  "Arquitetos",
  "Engenheiros",
];

export default function Industries() {
  return (
    <section id="solucoes" className="bg-#000000 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl font-bold tracking-tight text-#ffffff-950">Atendimento para diversos segmentos</h2>
          <p className="mt-3 text-zinc-600">Soluções contábeis adaptadas ao seu tipo de negócio.</p>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {industries.map((it, idx) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="px-1 py-1 text-center text-sm font-medium text-zinc-700"
              >
                {it}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

