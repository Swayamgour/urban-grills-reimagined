import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Inspection", desc: "We visit your home, measure dimensions, and listen to your needs." },
  { n: "02", title: "Measurement", desc: "Laser-precise dimensions captured for a flush, no-gap finish." },
  { n: "03", title: "Installation", desc: "Certified team installs in hours — clean, quiet, and respectful." },
  { n: "04", title: "Safety Check", desc: "Tension, fittings and finish reviewed before we hand over." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section ref={ref} className="bg-secondary py-24 md:py-36 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — Process</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl">
          Four steps, <em className="text-brass">one calm handover</em>.
        </h2>
      </div>

      <motion.div style={{ x }} className="mt-20 md:mt-32 flex gap-10 md:gap-20 px-6 md:px-12 will-change-transform">
        {steps.map((s, i) => (
          <div key={s.n} className="shrink-0 w-[300px] md:w-[420px] relative">
            <div className="relative h-[2px] bg-foreground/10 mb-10">
              <motion.div
                style={{ scaleX: lineScale }}
                className="absolute inset-0 bg-brass origin-left"
              />
              <div className="absolute -top-1.5 left-0 h-4 w-4 rounded-full bg-foreground" />
            </div>
            <div className="font-display text-7xl md:text-9xl text-foreground/15">{s.n}</div>
            <h3 className="font-display text-3xl md:text-4xl mt-4">{s.title}</h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="absolute top-[120px] -right-10 md:-right-16 text-brass/40 font-display text-4xl select-none">→</div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}