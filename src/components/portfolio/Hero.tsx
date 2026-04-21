import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { HeroScene } from "./HeroScene";
import ahmed from "@/assets/ahmed.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Minimal text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-gradient">Ahmed Swabah</span>
            </h1>

            <p className="font-mono text-sm md:text-base text-muted-foreground mb-8">
              Full-Stack Developer{" "}
              <span className="text-primary">/</span> AI Engineer
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full px-6"
              >
                <a href="#projects">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-6 hover:bg-primary/10 hover:text-primary"
              >
                <a href="/Ahmed-Swabah-Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT — Portrait + Three.js scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-1 lg:order-2 mx-auto w-full max-w-[480px] aspect-square"
          >
            {/* Three.js scene */}
            <HeroScene />

            {/* Glow halo behind portrait */}
            <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-primary/40 via-primary-glow/20 to-transparent blur-3xl pointer-events-none" />

            {/* Portrait — floats subtly */}
            <motion.img
              src={ahmed}
              alt="Ahmed Swabah"
              className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_30px_60px_hsl(265_89%_50%/0.45)] z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floor reflection / shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-6 bg-primary/40 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
