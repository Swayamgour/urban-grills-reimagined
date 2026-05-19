import { Reveal } from "@/components/Reveal";
import invisibleGrills from "@/assets/product-invisible-grills.jpg";
import netting from "@/assets/product-netting.jpg";
import sports from "@/assets/product-sports.jpg";
import hangers from "@/assets/product-hangers.jpg";
import { ArrowUpRight } from "lucide-react";

const products = [
  { title: "Invisible Grills", tag: "Safe & Stylish", desc: "Elegant, durable, completely safe — for balconies and windows.", img: invisibleGrills },
  { title: "Anti-Bird Netting", tag: "Strong & Durable", desc: "Protect your home from birds and debris with sturdy invisible netting.", img: netting },
  { title: "Cricket & Sports Nets", tag: "Rust-Proof & Reliable", desc: "Custom installations for schools, apartments and sports arenas.", img: sports },
  { title: "Balcony Cloth Hangers", tag: "Smart & Space-Saving", desc: "Retractable hanger systems engineered for modern balconies.", img: hangers },
];

export function Products() {
  return (
    <section id="products" className="relative bg-background py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up">
          <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — Collection</span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
                A range engineered for <em className="text-brass">silent protection</em>.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              Four product families, one obsession — safety that doesn't ask to be seen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {products.map((p, i) => (
            <Reveal key={p.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
              <a href="#contact" className="group block">
                <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5 text-background/90 text-[10px] uppercase tracking-[0.3em] mix-blend-difference">
                    0{i + 1}
                  </div>
                </div>
                <div className="flex items-start justify-between mt-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-brass mt-1">{p.tag}</p>
                    <p className="text-muted-foreground mt-3 max-w-sm">{p.desc}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 mt-2 shrink-0 transition-transform duration-500 group-hover:rotate-45 group-hover:text-brass" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}