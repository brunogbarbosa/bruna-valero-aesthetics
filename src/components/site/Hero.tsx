import { motion } from "framer-motion";
import heroPhoto from "@/assets/dra-bruna-ampola.jpeg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});


export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-cream/60 rounded-bl-[40%] blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Biomédica Esteta · Campo Grande, MS</span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="font-display text-[44px] leading-[1.05] sm:text-6xl lg:text-[75px] lg:leading-[1.02] font-bold text-ink"
          >
            Estética com técnica,{" "}
            <span className="italic text-gold">cuidado</span> e naturalidade.
          </motion.h1>

          <motion.div {...fade(0.18)} className="mt-8 h-px w-24 bg-gold" />

          <motion.p {...fade(0.24)} className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Biomédica especialista em protocolos estéticos seguros e personalizados.
            Resultados naturais que respeitam quem você é.
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-cream/60">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-ink/80">CRBM 48986</span>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/5567999166721" target="_blank" rel="noreferrer" className="btn-gold">
              Agendar pelo WhatsApp
            </a>
            <a href="#protocolos" className="btn-outline-gold">
              Conhecer Protocolos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}

          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-cream rounded-[2rem] blur-2xl" />
          <div className="relative rounded-[1.5rem] overflow-hidden border border-gold/30 shadow-[var(--shadow-soft)]">
            <img
              src={heroPhoto}
              alt="Dra. Bruna Valero"
              className="w-full h-[520px] lg:h-[620px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-background border border-border rounded-xl px-5 py-4 shadow-[var(--shadow-soft)]">
            <p className="font-display text-2xl text-ink leading-none">+500</p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Pacientes atendidas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
