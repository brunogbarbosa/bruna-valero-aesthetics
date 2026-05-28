export function CtaBanner() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="eyebrow">Agende sua avaliação</span>
          <span className="gold-rule" />
        </div>
        <h2 className="font-display text-4xl lg:text-6xl text-ink font-bold leading-[1.05]">
          Pronta para cuidar da sua <span className="italic text-gold">autoestima?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Agende sua avaliação e descubra o protocolo ideal para você.
        </p>
        <div className="mt-10">
          <a href="https://wa.me/5567999166721" target="_blank" rel="noreferrer" className="btn-gold text-base px-8 py-4">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
