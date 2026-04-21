import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import ahmed from "@/assets/ahmed.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black pointer-events-none" />

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

          {/* RIGHT — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-1 p-10 lg:order-2 mx-auto w-full max-w-[350px] aspect-square"
          >
            {/* Portrait image with circular mask */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.img
                src={ahmed}
                alt="Ahmed Swabah"
                className="w-full h-full object-cover object-bottom"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Soft glow behind portrait */}
            <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-primary/30 via-primary-glow/15 to-transparent blur-3xl pointer-events-none" />

            {/* Thin ring */}
            <div className="absolute inset-0 rounded-full border border-primary/30" />
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
