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
				transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
				className="max-w-7xl mx-auto relative px-4 sm:px-6 md:px-8"
			>
				{/* Animated Gradient Border Wrapper */}
				<div className="absolute -inset-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-primary/50 via-primary-glow/50 to-primary/50 opacity-50 blur-sm animate-pulse" />

				<div className="relative bg-background/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-20 text-center overflow-hidden">
					{/* Background elements */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-primary/10 blur-[80px] md:blur-[120px] pointer-events-none" />

					<div className="relative z-10 flex flex-col items-center">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 shadow-sm">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
							<span className="text-xs sm:text-sm font-semibold text-foreground/80">
								Available for new opportunities
							</span>
						</div>

						<h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-foreground overflow-hidden">
							<AnimatedText text="Let's build something" delay={0.2} />{" "}
							<span className="text-primary italic inline-block mt-2 sm:mt-0">
								<AnimatedText text="exceptional." delay={0.8} />
							</span>
						</h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
							className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
						>
							Whether you have an ambitious project in mind, need an engineering
							partner, or just want to chat about AI and web tech, I'm just an
							email away.
						</motion.p>

						<a
							href="mailto:ahmedswabah.dev@gmail.com"
							className="group relative inline-flex items-center justify-center gap-2 md:gap-3 bg-primary text-primary-foreground font-bold text-base md:text-lg px-6 py-4 md:px-8 md:py-5 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] w-full sm:w-auto"
						>
							<span className="relative z-10 flex items-center gap-2">
								Say Hello{" "}
								<Send className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
							</span>
							{/* Hover sweep effect */}
							<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
						</a>

						<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 w-full max-w-lg">
							<a
								href="mailto:ahmedswabah.dev@gmail.com"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm font-semibold"
							>
								<Mail className="h-3.5 w-3.5 md:h-4 md:w-4" /> Email
							</a>
							<a
								href="https://github.com/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm font-semibold"
							>
								<Github className="h-3.5 w-3.5 md:h-4 md:w-4" /> GitHub
							</a>
							<a
								href="https://linkedin.com/in/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm font-semibold"
							>
								<Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" /> LinkedIn
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</Section>
	);
};

