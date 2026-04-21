import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Clock, User, CheckCircle2, Wrench, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type CaseStudy } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.caseStudy) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link to="/projects">
              <Button variant="outline">Back to Projects</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const cs = project.caseStudy;
  const {
    overview,
    problem,
    solution,
    challenges,
    techStack,
    features,
    results,
    timeline,
    role,
  } = cs;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-32 pb-16">
        {/* Header */}
        <div className="container mb-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.featured && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-primary/20 border border-primary/40 text-primary">
                  Featured
                </span>
              )}
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-secondary border border-border text-muted-foreground">
                Case Study
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{project.name}</h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Github className="h-4 w-4" /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 transition-all"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <hr className="my-12" />

        {/* Case Study Content */}
        <div className="container max-w-7xl">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
          </motion.section>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-destructive/10">
                <Lightbulb className="h-5 w-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">The Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{problem}</p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">The Solution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{solution}</p>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary">
                <Wrench className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Challenges</h2>
            </div>
            <ul className="space-y-3">
              {challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary">
                <Wrench className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {techStack.ai && (
                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">AI / ML</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.ai.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Results</h2>
            </div>
            <ul className="space-y-3">
              {results.map((result, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Timeline & Role */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-secondary/30">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Timeline</h3>
                </div>
                <p className="text-muted-foreground">{timeline}</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-secondary/30">
                <div className="flex items-center gap-3 mb-3">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">My Role</h3>
                </div>
                <p className="text-muted-foreground">{role}</p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-muted-foreground mb-6">Interested in working together on a similar project?</p>
            <Button size="lg" className="rounded-full px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default ProjectDetail;
