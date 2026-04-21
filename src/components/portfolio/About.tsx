import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Code2, Sparkles, Cloud } from "lucide-react";
import { PortraitScene } from "./PortraitScene";
import ahmed from "@/assets/ahmed.png";

const stats = [
  { value: "20+", label: "Projects Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "AI", label: "First Mindset" },
  { value: "∞", label: "Curiosity" },
];

const highlights = [
  { icon: Code2, text: "Next.js, Node.js, Express, React, Bun, TailwindCSS" },
  { icon: Sparkles, text: "AI integration with Hugging Face, Ollama & prompt engineering" },
  { icon: Cloud, text: "AWS, Docker, Prisma, Supabase, Firebase, MongoDB, MySQL" },
];

export const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Engineer, builder, problem solver."
  >
    <div className="grid lg:grid-cols-5 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2"
      >
        <div className="group relative aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-card">
          <div className="absolute inset-0">
            <PortraitScene />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20 pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <img
            src={ahmed}
            alt="Ahmed Swabah portrait"
            loading="lazy"
            className="absolute inset-x-0 bottom-0 h-[94%] w-full object-contain object-bottom drop-shadow-[0_20px_40px_hsl(var(--primary)/0.35)] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-md border border-border z-10">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono">Kozhikode, Kerala</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:col-span-3 space-y-6"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm a Full-Stack & AI Developer focused on building scalable, intelligent, and user-centered
          web applications that solve real-world problems. I specialize in modern JavaScript ecosystems
          and craft clean, performant, production-ready solutions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          On the AI side, I design and integrate AI-powered systems — enabling automation, smarter
          workflows, and enhanced user experiences. Actively building future-ready platforms, AI
          products, and scalable startups.
        </p>

        <ul className="space-y-3 pt-2">
          {highlights.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 h-7 w-7 rounded-md bg-primary/10 border border-primary/20 inline-flex items-center justify-center shrink-0">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </span>
              <span className="text-muted-foreground pt-0.5">{text}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card/50 p-4">
              <div className="text-2xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </Section>
);
