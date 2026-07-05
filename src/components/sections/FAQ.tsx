"use client";

import { useMemo, useState } from "react";


import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Terei reuniões com contador?", a: "Sim. Você terá orientação e acompanhamento conforme as rotinas e prazos da sua empresa. Também podemos agendar reuniões quando necessário." },
  { q: "Como funciona o pagamento?", a: "O pagamento é ajustado ao plano e periodicidade definidos no início do atendimento. Mantemos transparência e controle das etapas." },
  { q: "Quais cidades atendem?", a: "Atendemos remotamente e por região, com suporte para diferentes cidades. Consulte o especialista para confirmar sua localidade." },
  { q: "Tenho acesso aos relatórios?", a: "Sim. Você recebe relatórios e indicadores para entender a evolução e manter a gestão em dia." },
  { q: "Como funciona a contabilidade?", a: "Trabalhamos com organização documental, rotinas contábeis/tributárias e suporte contínuo para reduzir riscos e manter conformidade." },
  { q: "O que está incluso?", a: "Inclui assessoria nas rotinas do seu regime tributário, suporte em obrigações e acompanhamento dos principais indicadores." },
];

function AccordionItem({ item, index }: { item: (typeof faqs)[number]; index: number }) {
  return (
    <AccordionPrimitive.Item
      value={item.q}
      className="border-b border-zinc-200"
      key={item.q}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className="group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-blue-950 outline-none"
        >
          <span>{item.q}</span>
          <ChevronDown className="h-5 w-5 text-zinc-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden">
        <div className="pb-5 pr-2 text-sm leading-6 text-zinc-600">{item.a}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

export default function FAQ() {
  const [value, setValue] = useState<string>(faqs[0]?.q ?? "");
  const items = useMemo(() => faqs, []);

  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold tracking-tight text-blue-950"
        >
          Dúvidas frequentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6"
        >
          <AccordionPrimitive.Root
            type="single"
            collapsible
            value={value}
            onValueChange={setValue}
          >
            {items.map((item, idx) => (
              <AccordionItem item={item} index={idx} key={item.q} />
            ))}
          </AccordionPrimitive.Root>
        </motion.div>
      </div>
    </section>
  );
}

