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

const results: { src: string; label: string; aspect: string }[] = [
  { src: maos1, label: "Rejuvenescimento de Mãos", aspect: "aspect-[4/5]" },
  { src: maos2, label: "Rejuvenescimento de Mãos", aspect: "aspect-[4/5]" },
  { src: labios1, label: "Harmonização Labial", aspect: "aspect-[9/16]" },
  { src: labios2, label: "Harmonização Labial", aspect: "aspect-[9/16]" },
  { src: brinco1, label: "Lifting Facial", aspect: "aspect-[9/16]" },
  { src: brinco2, label: "Lifting Facial", aspect: "aspect-[16/9]" },
  { src: acne, label: "Tratamento de Acne", aspect: "aspect-square" },
  { src: pele1, label: "Bioestimulador", aspect: "aspect-[9/16]" },
  { src: pele2, label: "Bioestimulador", aspect: "aspect-[16/9]" },
];

const testimonials = [
  { q: "Eliminei 3kg em apenas 2 semanas com o protocolo de enzimas. Resultado incrível!", n: "Mariana" },
  { q: "Atendimento impecável, super cuidadosa e o resultado ficou muito natural.", n: "Fernanda" },
  { q: "Me sinto outra pessoa. A Dra. Bruna transformou minha autoestima!", n: "Camila" },
];

export function Resultados() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-gradient-to-b from-background via-cream/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Resultados Reais</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.1]">
            Antes e depois das <span className="italic text-gold">pacientes</span>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Cada resultado é fruto de protocolo personalizado, técnica precisa e acompanhamento dedicado.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-xl bg-cream/60 border border-border/60 shadow-[0_8px_30px_-12px_rgba(184,150,90,0.18)] hover:shadow-[0_20px_50px_-15px_rgba(184,150,90,0.35)] transition-all duration-500"
            >
              <div className={`relative w-full ${r.aspect} bg-cream/40 flex items-center justify-center overflow-hidden`}>
                <img
                  src={r.src}
                  alt={r.label}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="h-px w-6 bg-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-background font-medium">{r.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="font-display text-3xl lg:text-4xl text-ink text-center">
            O que dizem nossas <span className="italic text-gold">pacientes</span>
          </h3>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-cream p-8 rounded-lg border border-border"
              >
                <span className="font-display text-6xl text-gold leading-none absolute -top-2 left-5">“</span>
                <div className="flex gap-1 text-gold mb-4 mt-2">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k}>★</span>
                  ))}
                </div>
                <blockquote className="text-ink/85 leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-6 text-sm tracking-[0.15em] uppercase text-muted-foreground">
                  — {t.n}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
