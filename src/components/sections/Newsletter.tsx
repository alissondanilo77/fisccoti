"use client";

import { motion } from "framer-motion";

export default function Newsletter() {

  return (
    <section id="newsletter" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h2 className="text-3xl font-bold tracking-tight text-blue-950">Receba conteúdos da área contábil diretamente no seu e-mail</h2>
            <p className="mt-3 text-zinc-600">Dicas práticas e atualizações importantes para sua empresa.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
          >
            <label className="text-sm font-semibold text-blue-950" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@empresa.com"
              className="mt-3 h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
            <button type="submit" className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400">
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

