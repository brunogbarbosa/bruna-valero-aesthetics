import r1 from "@/assets/bruna-ampola.jpeg";
import r2 from "@/assets/bruna-laptop.jpeg";
import r3 from "@/assets/bruna-retrato.jpeg";
import r4 from "@/assets/bruna-closeup.jpeg";
import r5 from "@/assets/bruna-blazer.jpeg";
import r6 from "@/assets/resultado-pele.jpeg";

const grid = [r1, r2, r3, r4, r5, r6];

export function Instagram() {
  return (
    <section className="py-24 lg:py-32 bg-cream/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="eyebrow">Instagram</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ink font-bold">
            Acompanhe no <span className="italic text-gold">Instagram</span>
          </h2>
          <p className="mt-4 text-muted-foreground">@drabrunavalero_1</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {grid.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/drabrunavalero_1"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-md border border-border aspect-square"
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://instagram.com/drabrunavalero_1" target="_blank" rel="noreferrer" className="btn-outline-gold">
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
