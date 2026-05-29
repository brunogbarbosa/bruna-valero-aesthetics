import { motion } from "framer-motion";
import maos1 from "@/assets/result-maos-1.jpg";
import maos2 from "@/assets/result-maos-2.jpg";
import labios1 from "@/assets/result-labios-1.jpg";
import labios2 from "@/assets/result-labios-2.jpg";
import brinco1 from "@/assets/result-brinco-1.jpg";
import brinco2 from "@/assets/result-brinco-2.jpg";
import acne from "@/assets/result-acne.jpg";
import pele1 from "@/assets/result-pele-1.jpg";
import pele2 from "@/assets/result-pele-2.jpg";

const results = [
  { src: maos1, label: "Rejuvenescimento de Mãos", aspect: "aspect-[4/5]", span: "lg:col-span-2" },
  { src: maos2, label: "Rejuvenescimento de Mãos", aspect: "aspect-[4/5]", span: "lg:col-span-2" },
  { src: labios1, label: "Harmonização Labial", aspect: "aspect-[9/16]", span: "lg:col-span-2 lg:row-span-2" },
  { src: labios2, label: "Harmonização Labial", aspect: "aspect-[9/16]", span: "lg:col-span-3" },
  { src: brinco1, label: "", aspect: "aspect-[9/16]", span: "lg:col-span-3" },
  { src: brinco2, label: "", aspect: "aspect-[16/9]", span: "lg:col-span-2" },
  { src: acne, label: "Lavieen", aspect: "aspect-square", span: "lg:col-span-2" },
  { src: pele1, label: "", aspect: "aspect-[9/16]", span: "lg:col-span-2" },
  { src: pele2, label: "", aspect: "aspect-[16/9]", span: "lg:col-span-4" },
] as const;

const testimonials = [
  {
    q: "Atendimento impecável, muito cuidadosa e com um resultado que ficou leve, elegante e natural.",
    n: "Fernanda",
  },
  {
    q: "Fui orientada em cada etapa e me senti segura do início ao pós-procedimento.",
    n: "Mariana",
  },
  {
    q: "Minha autoestima mudou sem perder minha essência. Ficou exatamente como eu queria.",
    n: "Camila",
  },
];

export function Resultados() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-gradient-to-b from-background via-cream/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="eyebrow">Resultados Reais</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.02]">
              Antes e depois com <span className="italic text-gold">acabamento elegante</span>
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed text-lg max-w-md">
              A apresentação ficou mais editorial para valorizar cada caso, mantendo as imagens ampliadas e sem corte nas áreas importantes.
            </p>

            <div className="mt-8 panel-luxury p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Fotos sem corte",
                  "Leitura clara",
                  "Resultados personalizados",
                ].map((tag) => (
                  <span key={tag} className="metric-pill">{tag}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cada imagem foi posicionada em um canvas maior, com enquadramento preservado, para que o resultado apareça bonito e legível em qualquer tela.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5 auto-rows-max">
              {results.map((r, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                  className={`result-card ${r.span}`}
                >
                  <figcaption className="px-5 pt-5 flex items-center justify-between gap-3">
                    <span className="text-[11px] tracking-[0.18em] uppercase text-gold font-medium">Caso real</span>
                    <span className="h-px flex-1 bg-gold/20" />
                  </figcaption>
                  <div className={`result-media ${r.aspect}`}>
                    <img
                      src={r.src}
                      alt={r.label}
                      loading="lazy"
                      className="w-full h-full object-contain scale-[1.04]"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1">
                    <p className="font-display text-2xl leading-[1.02] text-ink">{r.label}</p>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`panel-luxury p-7 ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k}>★</span>
                ))}
              </div>
              <blockquote className="font-display text-2xl lg:text-[2rem] leading-[1.08] text-ink">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 text-sm tracking-[0.15em] uppercase text-muted-foreground">
                — {t.n}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
