import { motion } from "framer-motion";
import r1 from "@/assets/resultado-enzimas.jpeg";
import r2 from "@/assets/resultado-labios.jpeg";
import r3 from "@/assets/resultado-pele.jpeg";
import r4 from "@/assets/resultado-nariz.jpeg";
import r5 from "@/assets/resultado-papada.jpeg";

const results = [r1, r2, r3, r4, r5];

const testimonials = [
  { q: "Eliminei 3kg em apenas 2 semanas com o protocolo de enzimas. Resultado incrível!", n: "Mariana" },
  { q: "Atendimento impecável, super cuidadosa e o resultado ficou muito natural.", n: "Fernanda" },
  { q: "Me sinto outra pessoa. A Dra. Bruna transformou minha autoestima!", n: "Camila" },
];

export function Resultados() {
  return (
    <section id="resultados" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Resultados Reais</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.1]">
            Antes e depois das <span className="italic text-gold">pacientes</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {results.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`overflow-hidden rounded-lg border border-border ${i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <img src={src} alt={`Resultado ${i + 1}`} loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
            </motion.div>
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
