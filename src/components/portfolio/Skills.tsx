import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Bun", "REST APIs", "Prisma", "Server Actions"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
  },
  {
    title: "AI / ML",
    items: ["Hugging Face", "Ollama", "Prompt Engineering", "AI Integrations", "Face Recognition"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "Cloudinary", "CI/CD"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Tools I use to ship great products."
    description="A pragmatic stack — chosen for performance, scalability, and developer experience."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:bg-card transition-all"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border text-foreground/90 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
