import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ id, eyebrow, title, description, children }: Props) => (
  <section id={id} className="py-24 md:py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{eyebrow}</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
        {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);
