"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {

  return (
    <section id="contato" className="bg-[#000000] py-16 md:py-20">

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl font-bold tracking-tight text-blue-950">
          Contato
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-#ffffff-950">WhatsApp</p>
            <a href="#" className="mt-2 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-500">
              Falar com especialista
            </a>

            <div className="mt-6 grid gap-4">
              {[{ icon: Phone, title: "Telefone", value: "(00) 0000-0000" }, { icon: Mail, title: "Email", value: "contato@fiscco.com.br" }, { icon: Clock, title: "Horário", value: "Seg–Sex, 08h–18h" }, { icon: MapPin, title: "Endereço", value: "Av. Exemplo, 123" }].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950/5 text-blue-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500">{c.title}</p>
                      <p className="text-sm font-semibold text-zinc-800">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-950">Pronto para começar?</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Envie seus dados e receba atendimento de um especialista.
            </p>
            <form className="mt-5 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Nome" className="h-12 rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
              <input placeholder="Email" type="email" className="h-12 rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
              <input placeholder="Telefone" type="tel" className="h-12 rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400">
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

