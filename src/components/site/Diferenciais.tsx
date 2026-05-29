import { motion } from "framer-motion";
import burgundyPhoto from "@/assets/bruna-extra-burgundy.jpeg";
import closeupPhoto from "@/assets/bruna-extra-closeup.jpeg";

const items = [
  {
    n: "01",
    t: "Avaliação Personalizada",
    d: "Cada paciente é única — a estratégia respeita anatomia, objetivo e tempo ideal de resposta.",
    span: "md:col-span-2",
  },
  {
    n: "02",
    t: "Técnica e Segurança",
    d: "Condutas baseadas em atualização constante, indicação correta e execução cuidadosa.",
    span: "",
  },
  {
    n: "03",
    t: "Resultados Naturais",
    d: "A estética valoriza seus traços, sem perder identidade ou expressão.",
    span: "",
  },
  {
    n: "04",
    t: "Atendimento Humanizado",
    d: "Cuidado presente do primeiro contato ao acompanhamento pós-procedimento.",
    span: "md:col-span-2",
  },
];

export function Diferenciais() {
  return (
    <section className="py-24 lg:py-32 bg-cream/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" />
                <span className="eyebrow">Diferenciais</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.02]">
                Um cuidado que une <span className="italic text-gold">imagem, técnica e presença</span>
              </h2>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="panel-luxury overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden bg-background">
                <img
                  src={burgundyPhoto}
                  alt="Retrato editorial da Dra. Bruna Valero"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-6 flex flex-wrap gap-2">
                {[
                  "Estética estratégica",
                  "Execução precisa",
                  "Acompanhamento real",
                ].map((tag) => (
                  <span key={tag} className="metric-pill">{tag}</span>
                ))}
              </figcaption>
            </motion.figure>

            <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="panel-luxury p-6 flex flex-col justify-between"
              >
                <p className="font-display text-5xl text-gold leading-none">+500</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  pacientes atendidas com protocolos desenhados para realçar sem exagero.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="panel-luxury overflow-hidden"
              >
                <div className="aspect-[3/4] bg-background">
                  <img
                    src={closeupPhoto}
                    alt="Close elegante da Dra. Bruna Valero"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4 auto-rows-fr">
            {items.map((it, i) => (
              <motion.article
                key={it.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`panel-luxury p-7 lg:p-8 ${it.span}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-5xl text-gold/75 leading-none">{it.n}</p>
                  <span className="h-px flex-1 bg-gold/20" />
                </div>
                <h3 className="mt-8 font-display text-2xl lg:text-[2rem] leading-[1.02] text-ink">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">{it.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
