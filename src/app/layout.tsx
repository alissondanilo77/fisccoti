import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fiscco Serviços Contábeis | Gestão contábil assertiva",
  description:
    "Contabilidade inteligente, atendimento humanizado e soluções para empresas, MEIs e profissionais liberais com foco em segurança fiscal, tributária e trabalhista.",
  metadataBase: new URL("https://www.fiscco.cnt.br"),
  openGraph: {
    title: "Fiscco Serviços Contábeis",
    description:
      "Contabilidade inteligente, atendimento humanizado e soluções para empresas, MEIs e profissionais liberais.",
    type: "website",
    url: "https://www.fiscco.cnt.br/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscco Serviços Contábeis",
    description:
      "Contabilidade inteligente, atendimento humanizado e soluções para empresas, MEIs e profissionais liberais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full bg-[#000000] text-[#E5E7EB] antialiased">
        {children}
      </body>
    </html>
  );
}


