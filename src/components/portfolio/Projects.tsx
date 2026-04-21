import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

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
  {
    name: "IMS",
    description: "Platform to manage institutions end-to-end.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/swabah/IMS",
    live: "https://ims-phi-three.vercel.app",
  },
  {
    name: "AD Admission",
    description: "Platform for institutions to run their admission systems.",
    tech: ["Next.js"],
    github: "https://github.com/swabah/AD-admission",
    live: "https://ad-admission.vercel.app",
  },
  {
    name: "Green Room",
    description: "Festival management system for events and crew coordination.",
    tech: ["Next.js"],
    github: "https://github.com/trizocommunity/greenroom",
    live: "https://trizo-greenroom.vercel.app",
  },
  {
    name: "Flame Wood",
    description: "Storefront e-commerce application built with Shopify.",
    tech: ["Next.js", "Shopify"],
    github: "https://github.com/flamewood-org/flamewood-store",
    live: "https://flamewood-ten.vercel.app",
  },
  {
    name: "Maznavi",
    description: "Community platform for sharing poems and articles.",
    tech: ["React", "Express", "Tailwind"],
    github: "https://github.com/swabah/Maznavi",
    live: "https://maznavi.vercel.app",
  },
  {
    name: "Count Corner",
    description: "Platform where anyone can share the count of their swalath.",
    tech: ["Node.js", "Express", "React"],
    github: "https://github.com/swabah/countcorner",
    live: "https://countcorner.vercel.app",
  },
  {
    name: "Expense Tracker",
    description: "Modern expense tracker with a Neo Brutalism design.",
    tech: ["React", "Bun", "Express", "Recharts"],
    github: "https://github.com/swabah/expense-tracker",
  },
  {
    name: "Hubbu Rasool",
    description: "Conference website with booking and information flows.",
    tech: ["React", "Express", "Node.js"],
    github: "https://github.com/swabah/hubburasool",
    live: "https://hubburasool.vercel.app",
  },
  {
    name: "Ahlussuffa",
    description: "Institution website built with modern React/Next.",
    tech: ["React", "Next.js"],
    github: "https://github.com/swabah/suad",
    live: "https://ahlussuffadars.vercel.app",
  },
  {
    name: "Campus",
    description: "Institution website for Al-Jamia Al-Islamiya.",
    tech: ["JS", "HTML", "CSS"],
    github: "https://github.com/swabah/Campus",
    live: "https://al-jamia-al-islamiya.vercel.app",
  },
  {
    name: "Amri Foundation",
    description: "Foundation site driving social impact initiatives.",
    tech: ["JS"],
    github: "https://github.com/swabah/amrifoundation",
    live: "https://amrifoundation.vercel.app",
  },
  {
    name: "Nyla Interior",
    description: "Storefront website for Nyla Interior shop.",
    tech: ["HTML", "JS", "CSS"],
    github: "https://github.com/swabah/Nyla-Interior",
    live: "https://nyla-interior.vercel.app",
  },
  {
    name: "Raha Living",
    description: "Website for Raha Living shop.",
    tech: ["HTML"],
    github: "https://github.com/swabah/RahaLiving",
    live: "https://raha-living.vercel.app",
  },
  {
    name: "REST API (TS)",
    description: "REST API with Node, Express, TypeScript & MongoDB — auth + CRUD.",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB"],
    github: "https://github.com/swabah/REST-API-TS",
  },
  {
    name: "Two-Factor Auth",
    description: "Two-factor authentication implementation in Node.js.",
    tech: ["Node.js", "JS"],
    github: "https://github.com/swabah/Two-Factor-Auth-nodejs",
  },
  {
    name: "User Check",
    description: "Account dashboard with sign-up/sign-in and account data view.",
    tech: ["JS", "HTML"],
    github: "https://github.com/swabah/user-check",
    live: "https://user-check-tau.vercel.app",
  },
  {
    name: "React Signature Canvas",
    description: "Canvas-based signature capture demo.",
    tech: ["React", "Vite", "Tailwind"],
    github: "https://github.com/swabah/react-signature-canvas",
    live: "https://react-signature-canvas.vercel.app",
  },
  {
    name: "Currency Converter",
    description: "Lightweight currency conversion tool.",
    tech: ["JS", "HTML", "CSS"],
    github: "https://github.com/swabah/currencyConvertor",
    live: "https://currencyconvertor-blue.vercel.app",
  },
  {
    name: "Java Calculator",
    description: 'Inspired by Brototype "100K CODING CHALLENGE" — a powerful Java calculator.',
    tech: ["Java"],
    github: "https://github.com/swabah/Java-calculator",
  },
];

const ProjectCard = ({ p, i }: { p: Project; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
    className="group relative flex flex-col rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/40 transition-all hover:shadow-glow"
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

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Work"
    title="Selected projects."
    description="A snapshot of platforms, AI products, and experiments I've built — from MVPs to production."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p, i) => (
        <ProjectCard key={p.name} p={p} i={i} />
      ))}
    </div>
  </Section>
);
