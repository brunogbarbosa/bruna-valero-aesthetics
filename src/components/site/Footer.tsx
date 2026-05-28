export function Footer() {
  return (
    <footer className="bg-ink text-background pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold text-gold font-display text-xl">
              BV
            </span>
            <span className="font-display text-xl">Dra. Bruna Valero</span>
          </div>
          <p className="mt-5 text-sm text-background/70 max-w-xs leading-relaxed">
            Estética com técnica, cuidado e naturalidade.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold-light mb-4">Conecte-se</p>
          <ul className="space-y-2 text-sm text-background/80">
            <li><a className="hover:text-gold" href="https://instagram.com/drabrunavalero_1" target="_blank" rel="noreferrer">Instagram · @drabrunavalero_1</a></li>
            <li><a className="hover:text-gold" href="https://wa.me/5567999166721" target="_blank" rel="noreferrer">WhatsApp · (67) 99916-6721</a></li>
            <li><a className="hover:text-gold" href="https://facebook.com/brunavalero9" target="_blank" rel="noreferrer">Facebook · brunavalero9</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-light mb-4">Atendimento</p>
          <p className="text-sm text-background/80 leading-relaxed">
            Campo Grande, MS<br />
            CRBM 48986
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-background/60">
        <p>© 2025 Dra. Bruna Valero. Todos os direitos reservados.</p>
        <p>Biomédica Esteta · Campo Grande, MS</p>
      </div>
    </footer>
  );
}
