import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectCard = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: Math.min(i * 0.1, 0.5), ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/40 transition-all h-full"
    >
      {/* Image Area - 3D Tilt Container */}
      <div 
        className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background/50"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
      >
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full relative flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out p-3 sm:p-4"
        >
          {/* Cross lines pattern highlight */}
          <div 
            className="absolute inset-3 sm:inset-4 pointer-events-none z-0 rounded-2xl border border-white/5 bg-background/50 transition-all duration-700 opacity-40 group-hover:opacity-80"
            style={{ 
              transform: "translateZ(0px)",
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L24 24M24 0L0 24' stroke='%238b5cf6' stroke-width='0.5' fill='none' opacity='0.4'/%3E%3C/svg%3E\")"
            }} 
          />

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none p-4" style={{ transform: "translateZ(40px)" }}>
            <span className="font-mono text-lg sm:text-2xl md:text-3xl font-bold text-foreground/90 tracking-tight text-center group-hover:scale-105 group-hover:text-primary transition-all duration-700 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] break-words w-full px-2 sm:px-4">
              {p.name}
            </span>
          </div>

          {p.featured && (
            <span className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[8px] sm:text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-background/80 backdrop-blur-md border border-primary/50 text-primary shadow-xl" style={{ transform: "translateZ(30px)" }}>
              Featured
            </span>
          )}
          {p.caseStudy && (
            <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[8px] sm:text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-background/80 backdrop-blur-md border border-border text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(30px)" }}>
              Case Study
            </span>
          )}
        </motion.div>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{p.name}</h3>
        <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
          {p.tech.map((t) => (
            <span key={t} className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:py-1 rounded bg-secondary border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 mt-auto flex-wrap">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
            >
              <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Code
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 transition-all"
            >
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Live
            </a>
          )}
          {p.caseStudy && (
            <span className="ml-auto text-[10px] sm:text-xs text-primary flex items-center gap-1 font-medium group-hover:underline pt-1 sm:pt-0">
              View Case Study <ArrowRight className="h-3 w-3" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );

  if (p.caseStudy) {
    return <Link to={`/projects/${p.slug}`}>{cardContent}</Link>;
  }

  return cardContent;
};

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Work"
    title="Selected projects."
    description="A snapshot of platforms, AI products, and experiments I've built — from MVPs to production."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} p={p} i={i} />
      ))}
    </div>
  </Section>
);
