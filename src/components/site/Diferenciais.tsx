import { motion } from "framer-motion";

const items = [
  { n: "01", t: "Avaliação Personalizada", d: "Cada paciente é única — protocolo desenhado para você." },
  { n: "02", t: "Técnica e Segurança", d: "Protocolos baseados em ciência e atualização constante." },
  { n: "03", t: "Resultados Naturais", d: "Estética que realça e respeita a sua identidade." },
  { n: "04", t: "Atendimento Humanizado", d: "Cuidado em cada detalhe, do primeiro contato ao pós." },
];

export function Diferenciais() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="eyebrow">Diferenciais</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.1]">
              Por que escolher a <span className="italic text-gold">Dra. Bruna</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-cream p-8 lg:p-10"
            >
              <p className="font-display text-5xl text-gold/70 leading-none">{it.n}</p>
              <h3 className="mt-6 font-display text-xl text-ink">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
