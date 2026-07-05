import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import CompanyOpening from "@/components/sections/CompanyOpening";
import Mei from "@/components/sections/Mei";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Benefits />
        <Industries />
        <Services />
        <CompanyOpening />
        <Mei />
        <FAQ />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


