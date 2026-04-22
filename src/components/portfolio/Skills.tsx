import { motion } from "framer-motion";
import { Section } from "./Section";
import { Skills3DBackground } from "./Skills3DBackground";

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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const Skills = () => (
  <div className="relative">
    <Skills3DBackground />
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="The engine under the hood."
      description="A highly pragmatic stack chosen for performance, scalability, and an excellent developer experience."
    >
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
    >
      {groups.map((g) => (
        <motion.div
          key={g.title}
          variants={itemVariants}
          className="group relative rounded-2xl border border-border/50 bg-card/20 p-6 lg:p-8 hover:bg-card/40 hover:border-border transition-colors duration-300"
        >
          {/* Extremely minimal top highlight line instead of full glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary mb-6 relative z-10">{g.title}</h3>
          
          <div className="flex flex-wrap gap-2.5 relative z-10">
            {g.items.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-foreground/80 font-medium hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
  </div>
);
