import { Hero } from "@/components/sections/Hero";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Works } from "@/components/sections/Works";
import { Pricing } from "@/components/sections/Pricing";
import { PortfolioDownload } from "@/components/sections/PortfolioDownload";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedClients />
      <About />
      <Services />
      <Solutions />
      <Works />
      <Pricing />
      <PortfolioDownload />
      <Contact />
    </main>
  );
}
