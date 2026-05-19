import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right";

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const offset = direction === "up" ? { y: 40 } : direction === "left" ? { x: -60 } : { x: 60 };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  src,
  alt,
  className,
  direction = "left",
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0 bg-foreground z-10"
        initial={{ x: "0%" }}
        animate={inView ? { x: direction === "left" ? "100%" : "-100%" } : {}}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
      />
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        initial={{ scale: 1.2 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}