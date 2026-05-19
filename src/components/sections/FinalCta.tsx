import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-balcony.jpg";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const words = ["Protect", "your", "balcony", "today."];
  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-foreground text-background">
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0 opacity-40">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <span className="text-xs uppercase tracking-[0.4em] text-background/60">07 — Get in touch</span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-9xl mt-8 leading-[0.95]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-4 align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${i === 2 ? "italic text-brass font-light" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:+919902299696"
            className="group inline-flex items-center justify-between gap-6 bg-background text-foreground px-8 py-5 text-sm uppercase tracking-[0.25em] hover:bg-brass hover:text-background transition-colors duration-500 min-w-[280px]"
          >
            <span className="flex items-center gap-3"><Phone className="h-4 w-4" /> Call +91 99022 99696</span>
          </a>
          <a
            href="https://wa.me/919902299696"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 text-sm uppercase tracking-[0.25em] border border-background/30 hover:border-background hover:bg-background/5 transition min-w-[280px]"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </motion.div>

        <div className="mt-24 pt-10 border-t border-background/15 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-background/50">
          <div>Urban Invisible Grills — Bangalore</div>
          <div>10-Year Warranty · Free Site Inspection</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </div>
    </section>
  );
}