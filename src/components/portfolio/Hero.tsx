import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const titles = ["Full-Stack Developer", "AI Engineer", "Prompt Engineer"];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient">Ahmed Swabah</span>
          </h1>

          <div className="font-mono text-base md:text-lg text-muted-foreground mb-6 flex flex-wrap gap-x-3 gap-y-1">
            {titles.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span className="text-primary">/</span>}
                <span>{t}</span>
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Building scalable, intelligent, and user-centered web applications.
            I blend modern <span className="text-foreground">JavaScript</span> ecosystems with
            <span className="text-foreground"> AI-powered systems</span> to ship products that solve real problems.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full px-6">
              <a href="#projects">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-border hover:border-primary/50 hover:bg-primary/10">
              <a href="#contact">Contact me</a>
            </Button>

            <div className="flex items-center gap-2 ml-2">
              {[
                { href: "https://github.com/swabah", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sw-abah/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:ahmedswabah.dev@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
