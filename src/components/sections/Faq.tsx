import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  { q: "Are invisible grills safe for kids and pets?", a: "Yes. Our grills use marine-grade SS 316 wire with high tensile strength — engineered to be strong, secure, and entirely safe for children and pets." },
  { q: "Will invisible grills rust or need maintenance?", a: "No. The wire is high-grade stainless steel with an anti-corrosive nylon coating, making them virtually maintenance-free even in coastal humidity." },
  { q: "How long does installation take?", a: "Most balcony installations are completed within a single day, depending on the size and the number of openings." },
  { q: "Can invisible grills be installed in apartments with builder restrictions?", a: "Yes. Invisible grills comply with most builder and apartment association guidelines since they are nearly invisible and non-intrusive to the façade." },
  { q: "Do invisible grills block airflow or sunlight?", a: "Not at all. The wires are slim and transparent, allowing full airflow and natural light into your home." },
  { q: "What is the cost of invisible grills in Bangalore?", a: "Pricing depends on the area and customization. We guarantee the best price in Bangalore — call us for a free site inspection and quote." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-24 md:py-36 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <Reveal direction="left" className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">06 — Questions</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Things people <em className="text-brass">ask us</em>.
          </h2>
        </Reveal>
        <div className="md:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-foreground/15 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-6 group"
                >
                  <span className="font-display text-lg md:text-2xl pr-6">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4 }}>
                    <Plus className="h-5 w-5 text-brass" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}