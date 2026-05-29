import { motion } from "framer-motion";
import protocoloPhoto from "@/assets/bruna-extra-soft.jpeg";

const items = [
  { name: "Toxina Botulínica", desc: "Suavização de linhas e expressões com planejamento preciso e resultado natural.", span: "md:col-span-2" },
  { name: "Skin Booster", desc: "Hidratação profunda e viço refinado para uma pele mais luminosa.", span: "" },
  { name: "Gordura Localizada", desc: "Protocolos exclusivos para contorno corporal com estratégia individual.", span: "" },
  { name: "Tratamentos Faciais", desc: "Combinações personalizadas para textura, firmeza e luminosidade.", span: "" },
  { name: "Glúteo Max", desc: "Modelagem corporal com foco em proporção, naturalidade e segurança.", span: "" },
  { name: "Enzimas", desc: "Redução de medidas e refinamento de contorno em protocolos direcionados.", span: "md:col-span-2" },
  { name: "Preenchedores", desc: "Volumização com equilíbrio facial e respeito à identidade da paciente.", span: "" },
  { name: "Laser LaVeen", desc: "Tecnologia avançada para renovação, uniformização e estímulo dérmico.", span: "" },
  { name: "Depilação a LED Laser", desc: "Remoção segura com conforto e constância em cada sessão.", span: "" },
  { name: "Limpeza de Pele", desc: "Tratamento profundo para renovação e preparo inteligente da pele.", span: "" },
];

export function Protocolos() {
  return (
    <section id="protocolos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" />
                <span className="eyebrow">Protocolos</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.02]">
                Procedimentos com <span className="italic text-gold">prescrição estética</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Uma seleção clínica pensada para entregar naturalidade, estratégia e acabamento sofisticado — sem soluções genéricas.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="panel-luxury overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden border-b border-border/70 bg-muted/40">
                <img
                  src={protocoloPhoto}
                  alt="Retrato da Dra. Bruna Valero"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Avaliação precisa",
                    "Plano individual",
                    "Resultado natural",
                  ].map((tag) => (
                    <span key={tag} className="metric-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Cada protocolo começa com leitura facial e corporal, definição de prioridade e indicação segura para o seu momento.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4 auto-rows-fr">
            {items.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className={`card-protocol ${p.span}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow text-gold">{(i + 1).toString().padStart(2, "0")}</p>
                  <span className="w-10 h-10 rounded-full border border-gold/30 bg-background flex items-center justify-center text-gold text-sm">
                    +
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-[1.9rem] leading-[1] text-ink">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
