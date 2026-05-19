import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { quote: "Urban Invisible Grills completely changed our balcony — it feels secure without blocking the view.", name: "Rahul & Sneha", place: "Whitefield, Bangalore" },
  { quote: "The bird netting and grills blend with the design perfectly. Very professional service.", name: "Ananya Rao", place: "Koramangala, Bangalore" },
  { quote: "Excellent quality grills and quick installation. Highly recommended for apartment safety.", name: "Priya Menon", place: "Yelahanka, Bangalore" },
  { quote: "From the first call to installation day, the team was extremely professional and helpful.", name: "Deepak Sharma", place: "HSR Layout, Bangalore" },
  { quote: "We love how the invisible grills blend with our balcony design. Great service and support.", name: "Kavita & Arjun", place: "Indiranagar, Bangalore" },
  { quote: "Quick installation, premium materials, and very polite staff. Highly recommended.", name: "Vikram Nair", place: "JP Nagar, Bangalore" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];
  return (
    <section className="bg-background py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">05 — Word of mouth</span>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
          </div>
        </div>

        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-brass text-sm tracking-[0.4em] mb-6">★★★★★</div>
              <p className="font-display text-2xl md:text-4xl leading-snug">
                "{r.quote}"
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-foreground/30" />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{r.place}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 mt-12">
          <button
            aria-label="Previous"
            onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
            className="h-12 w-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setI((p) => (p + 1) % reviews.length)}
            className="h-12 w-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}