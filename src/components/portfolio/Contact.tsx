import { motion } from "framer-motion";
import { Section } from "./Section";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export const Contact = () => {
	return (
		<Section id="contact">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
				className="max-w-7xl mx-auto relative"
			>
				{/* Animated Gradient Border Wrapper */}
				<div className="absolute -inset-[1px] rounded-[3rem] bg-gradient-to-r from-primary/50 via-primary-glow/50 to-primary/50 opacity-50 blur-sm animate-pulse" />

				<div className="relative bg-background/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 text-center overflow-hidden">
					{/* Background elements */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-primary/10 blur-[120px] pointer-events-none" />

					<div className="relative z-10 flex flex-col items-center">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 shadow-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
							<span className="text-sm font-semibold text-foreground/80">
								Available for new opportunities
							</span>
						</div>

						<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground overflow-hidden">
							<AnimatedText text="Let's build something" delay={0.2} />{" "}
							<span className="text-primary italic inline-block">
								<AnimatedText text="exceptional." delay={0.8} />
							</span>
						</h2>

						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
							Whether you have an ambitious project in mind, need an engineering
							partner, or just want to chat about AI and web tech, I'm just an
							email away.
						</p>

						<a
							href="mailto:ahmedswabah.dev@gmail.com"
							className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-5 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)]"
						>
							<span className="relative z-10 flex items-center gap-2">
								Say Hello{" "}
								<Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
							</span>
							{/* Hover sweep effect */}
							<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
						</a>

						<div className="flex items-center justify-center gap-8 mt-20 pt-8 border-t border-white/10 w-full max-w-lg">
							<a
								href="mailto:ahmedswabah.dev@gmail.com"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-semibold"
							>
								<Mail className="h-4 w-4" /> Email
							</a>
							<a
								href="https://github.com/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-semibold"
							>
								<Github className="h-4 w-4" /> GitHub
							</a>
							<a
								href="https://linkedin.com/in/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-semibold"
							>
								<Linkedin className="h-4 w-4" /> LinkedIn
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</Section>
	);
};
