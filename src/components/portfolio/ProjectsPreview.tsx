import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "Present AI",
    description: "AI-powered event asset management & discovery — distributes photos to guests via Face Recognition.",
    tech: ["Next.js", "TypeScript", "AI", "Face Recognition"],
    github: "https://github.com/swabah/presentai",
    live: "https://present-ai-psi.vercel.app",
    featured: true,
  },
  {
    name: "Royal Jet Travels",
    description: "Travel agency platform with package management, PWA support and Cloudinary media pipeline.",
    tech: ["Next.js 16", "React 19", "Supabase", "Tailwind v4", "PWA"],
    github: "https://github.com/galamine/royaljet-travels",
    live: "https://royaljet-travels.vercel.app",
    featured: true,
  },
  {
    name: "Kryvo Store",
    description: "Storefront e-commerce application powered by Shopify.",
    tech: ["Next.js", "Shopify"],
    github: "https://github.com/kryvostore/kryvostore.in",
    live: "https://kryvostore.vercel.app",
    featured: true,
  },
];

const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
    className="group cursor-pointer relative flex flex-col rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/40 transition-all"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary-glow/10" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-2xl md:text-3xl font-bold text-foreground/80 tracking-tight px-4 text-center">
          {p.name}
        </span>
      </div>
      {p.featured && (
        <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-primary/20 border border-primary/40 text-primary">
          Featured
        </span>
      )}
    </div>

    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tech.map((t) => (
          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {p.live && (
          <a
            href={p.live.startsWith("http") ? p.live : `https://${p.live}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export const ProjectsPreview = () => (
  <Section
    id="projects"
    eyebrow="Work"
    title="Selected projects."
    description="A snapshot of platforms, AI products, and experiments I've built — from MVPs to production."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      {projects.map((p, i) => (
        <ProjectCard key={p.name} p={p} i={i} />
      ))}
    </div>
    <div className="flex justify-center">
      <Button
        asChild
        size="lg"
        variant="outline"
        className="rounded-full px-8 hover:border-primary/50 hover:bg-primary/10"
      >
        <a href="/projects">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </Section>
);
