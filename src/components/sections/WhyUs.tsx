import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Users, Wrench, Clock, Sparkles } from "lucide-react";

const items = [
  { icon: Award, title: "10+ Years", desc: "Of expertise in balcony safety installations." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "Rust-proof, premium-grade SS 316 wire." },
  { icon: Users, title: "5,000+ Installations", desc: "Trusted by families across Bangalore." },
  { icon: Wrench, title: "Certified Installers", desc: "Trained teams. Clean, on-time work." },
  { icon: Clock, title: "Same-Day Install", desc: "Most balconies finished within a day." },
  { icon: Sparkles, title: "Custom Fit", desc: "Tailored to apartments, villas, commercial." },
];

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="bg-foreground text-background py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-background/50">02 — Why us</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl">
            A decade of <em className="text-brass">discipline</em>, distilled into every install.
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-24 border-t border-background/15">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-background/15 [&:nth-child(3n)]:lg:border-r-0 lg:border-r sm:[&:nth-child(2n)]:sm:border-r-0 sm:border-r border-background/15 p-8 md:p-10 transition-colors hover:bg-background/5"
              >
                <Icon className="h-7 w-7 text-brass mb-8 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{it.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}