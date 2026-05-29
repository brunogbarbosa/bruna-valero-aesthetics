import { motion } from "framer-motion";
import retrato from "@/assets/bruna-blazer.jpeg";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative p-3 border border-gold/50 rounded-sm">
            <img src={retrato} alt="Dra. Bruna Valero" className="w-full h-[540px] object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Sobre a Dra.</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold leading-[1.1]">
            Quem é a <span className="italic text-gold">Dra. Bruna Valero?</span>
          </h2>
          <div className="mt-8 space-y-5 text-ink/80 text-lg leading-relaxed max-w-xl">
            <p>
              Biomédica com pós-graduação em Estética Avançada, especialista em protocolos
              estéticos seguros e personalizados — sempre com foco na autoestima e em resultados
              naturais que respeitam a essência de cada paciente.
            </p>
            <p>
              Atendimento clínico em Sete Quedas, MS, com técnica refinada e acolhimento em
              cada detalhe.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Pós-graduada em Estética Avançada",
              "Protocolos Personalizados",
              "CRBM 48986",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-gold/40 bg-background text-sm text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
