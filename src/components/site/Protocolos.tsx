import { motion } from "framer-motion";

const items = [
  { name: "Toxina Botulínica", desc: "Suavização de linhas e expressões." },
  { name: "Skin Booster", desc: "Hidratação profunda e rejuvenescimento." },
  { name: "Gordura Localizada", desc: "Protocolos exclusivos de redução." },
  { name: "Tratamentos Faciais", desc: "Protocolos personalizados para sua pele." },
  { name: "Glúteo Max", desc: "Modelagem e volumização corporal." },
  { name: "Enzimas", desc: "Redução de medidas em poucas sessões." },
  { name: "Preenchedores", desc: "Volumização com naturalidade." },
  { name: "Laser LaVeen", desc: "Tecnologia avançada para sua pele." },
  { name: "Depilação a LED Laser", desc: "Remoção definitiva e segura." },
  { name: "Limpeza de Pele", desc: "Tratamento profundo e renovador." },
];

export function Protocolos() {
  return (
    <section id="protocolos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Protocolos</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.1]">
            Procedimentos com <span className="italic text-gold">técnica e segurança</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tratamentos personalizados, baseados em ciência, para realçar sua beleza com naturalidade.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-protocol"
            >
              <p className="eyebrow mb-3">0{(i + 1).toString().padStart(2, "0").slice(-2)}</p>
              <h3 className="font-display text-2xl text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
