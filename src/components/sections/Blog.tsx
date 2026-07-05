"use client";

import { motion } from "framer-motion";
import { CalendarDays, FileText } from "lucide-react";

const posts = [
  {
    title: "Como escolher o melhor regime tributário",
    date: "2026-04-02",
    summary: "Entenda os critérios que impactam o planejamento e reduzem riscos fiscais.",
  },
  {
    title: "A importância do planejamento trabalhista",
    date: "2026-03-18",
    summary: "Evite retrabalho e mantenha conformidade com orientações práticas.",
  },
  {
    title: "MEI vs. ME: quando migrar?",
    date: "2026-02-27",
    summary: "Sinais de que sua empresa precisa evoluir e como fazer isso com segurança.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-black py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl font-bold tracking-tight text-blue-950">Notícias e conteúdos</h2>
          <p className="mt-3 text-zinc-600">Informações para decisões melhores no dia a dia.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <FileText className="h-5 w-5 text-blue-950/70" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{p.summary}</p>
              <a href="#" className="mt-5 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-500">
                Ler mais
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

