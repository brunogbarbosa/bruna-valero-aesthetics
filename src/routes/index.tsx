import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Protocolos } from "@/components/site/Protocolos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Resultados } from "@/components/site/Resultados";
import { Instagram } from "@/components/site/Instagram";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Bruna Valero — Biomédica Esteta | Campo Grande, MS" },
      { name: "description", content: "Estética com técnica, cuidado e naturalidade. Protocolos personalizados em Sete Quedas, MS. CRBM 48986." },
      { property: "og:title", content: "Dra. Bruna Valero — Biomédica Esteta" },
      { property: "og:description", content: "Estética com técnica, cuidado e naturalidade. Sete Quedas, MS." },
      { property: "og:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Protocolos />
        <Diferenciais />
        <Resultados />
        <Instagram />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
