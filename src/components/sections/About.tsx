"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="relative py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Quem Somos</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[rgba(229,231,235,0.8)]">
              A Fiscco nasceu do anseio do atendimento por excelência e com foco na regularidade fiscal, tributária, trabalhista e previdenciária de seus clientes, mas entendemos que isso nos trouxe até aqui, mas não é só isso que irá nos fazer crescer ainda mais.

              Temos como objetivo garantir a regularidade fiscal, tributária, trabalhista e previdenciária de seus clientes, com foco no atendimento rápido e eficaz, trazendo segurança a seus clientes, inovando a forma como a contabilidade é vista pelo mercado, procurando agregar valor através da inovação e tecnologia, permitindo ao cliente dar passos seguros na gestão de seu negócio e, com isso, tornar a contabilidade como algo essencial no seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





