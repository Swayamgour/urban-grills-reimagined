import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-balcony.jpg";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Invisible", "Safety.", "Uninterrupted", "Views."];

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-foreground">
      <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0">
        <img src={hero} alt="Premium balcony with invisible grill" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/80" />
      </motion.div>

      {/* Top nav */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6 text-background"
      >
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Urban</span>
          <span className="text-xs uppercase tracking-[0.3em] opacity-70">Invisible Grills</span>
        </div>
        <a href="tel:+919902299696" className="hidden md:flex items-center gap-2 text-sm tracking-wide opacity-90 hover:opacity-100 transition">
          <Phone className="h-3.5 w-3.5" /> +91 99022 99696
        </a>
      </motion.header>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 text-background">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-xs uppercase tracking-[0.4em] opacity-70 mb-6"
          >
            Bangalore — Est. 2014
          </motion.span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block italic font-light"
                  style={i % 2 === 0 ? { fontStyle: "italic" } : { fontStyle: "normal" }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-6 bg-background text-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brass hover:text-background transition-colors duration-500"
            >
              Get Free Site Inspection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+919902299696"
              className="inline-flex items-center gap-3 px-2 py-4 text-sm uppercase tracking-[0.2em] border-b border-background/40 hover:border-background transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 text-background/60 text-[10px] uppercase tracking-[0.3em] hidden md:block"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}