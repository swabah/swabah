import { motion } from "framer-motion";
import { Section } from "./Section";
import {
	Send,
	Mail,
	Github,
	Linkedin,
	Copy,
	CheckCircle2,
	ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

export const Contact = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("ahmedswabah.dev@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Section
			id="contact"
			eyebrow="Contact"
			title="Let's connect."
			description="Reach out to discuss a project, an idea, or just to say hello. I'm always open to new opportunities."
		>
			<div className="max-w-7xl mx-auto w-full pt-4 sm:pt-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
					{/* Main Large Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="md:col-span-2 relative group rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-card/20 border border-border/50 p-5 sm:p-8 md:p-12 hover:bg-card/40 transition-colors"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

						{/* Subtle Grid Pattern Background */}
						<div
							className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"
							style={{
								backgroundImage:
									"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
								backgroundSize: "24px 24px",
							}}
						/>

						<div className="relative z-10 flex flex-col h-full justify-between">
							<div>
								<div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
										<span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary"></span>
									</span>
									<span className="text-[10px] sm:text-xs font-semibold text-primary">
										Available for new opportunities
									</span>
								</div>

								<h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground leading-[1.15] sm:leading-[1.1]">
									Have a project in mind? <br className="hidden sm:block" />
									<span className="text-muted-foreground italic font-medium">
										Let's build it together.
									</span>
								</h3>

								<p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mt-4 sm:mt-6 leading-relaxed">
									Whether you need an engineering partner, want to talk about AI
									and web tech, or just want to say hi—I'm just a click away.
								</p>
							</div>

							<div className="mt-8 sm:mt-12">
								<a
									href="mailto:ahmedswabah.dev@gmail.com"
									className="group/btn relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-foreground text-background font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
								>
									<span className="relative z-10 flex items-center gap-2">
										Send a message
										<Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
									</span>
									<div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
								</a>
							</div>
						</div>
					</motion.div>

					{/* Right Side Column */}
					<div className="md:col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-6">
						{/* Email Copy Card */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="flex-1 rounded-[1.5rem] sm:rounded-[2rem] bg-card/20 border border-border/50 p-5 sm:p-6 md:p-8 relative group overflow-hidden flex flex-col justify-center hover:bg-card/40 transition-colors"
						>
							<div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-[40px] sm:blur-[50px] -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 transition-opacity pointer-events-none" />

							<div className="relative z-10">
								<div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background border flex items-center justify-center mb-4 sm:mb-6 text-primary border-primary/50 transition-colors shadow-sm">
									<Mail className="h-4 w-4 sm:h-5 sm:w-5" />
								</div>

								<h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Direct Email</h4>
								<p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 break-all">
									ahmedswabah.dev@gmail.com
								</p>

								<button
									type="button"
									onClick={handleCopy}
									className="w-full py-2.5 sm:py-3 px-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 group/copy"
								>
									{copied ? (
										<>
											<CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500" />
											<span className="text-green-500">Copied!</span>
										</>
									) : (
										<>
											<Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover/copy:text-foreground transition-colors" />
											<span>Copy Email</span>
										</>
									)}
								</button>
							</div>
						</motion.div>

						{/* Social Links Row */}
						<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
							{/* Github */}
							<motion.a
								href="https://github.com/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="aspect-square rounded-[1.5rem] sm:rounded-[2rem] border p-4 sm:p-5 md:p-6 flex flex-col justify-between group bg-card/40 border-border transition-all relative overflow-hidden"
							>
								<div className="flex justify-between items-start relative z-10">
									<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform shadow-sm">
										<Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
									</div>
									<ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
								</div>
								<div className="relative z-10">
									<h4 className="text-xs sm:text-sm font-bold">GitHub</h4>
									<p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
										View Work
									</p>
								</div>
							</motion.a>

							{/* LinkedIn */}
							<motion.a
								href="https://linkedin.com/in/Ahmed-Swabah"
								target="_blank"
								rel="noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="aspect-square rounded-[1.5rem] sm:rounded-[2rem] border p-4 sm:p-5 md:p-6 flex flex-col justify-between group bg-[#0A66C2]/10 border-[#0A66C2]/30 transition-all relative overflow-hidden"
							>
								<div className="flex justify-between items-start relative z-10">
									<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background border flex items-center justify-center text-[#0A66C2] border-[#0A66C2]/50 group-hover:scale-110 transition-transform shadow-sm">
										<Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
									</div>
									<ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0A66C2] opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
								</div>
								<div className="relative z-10">
									<h4 className="text-xs sm:text-sm font-bold">LinkedIn</h4>
									<p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
										Connect
									</p>
								</div>
							</motion.a>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
