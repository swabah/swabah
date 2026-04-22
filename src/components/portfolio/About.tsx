import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin } from "lucide-react";
import { PortraitScene } from "./PortraitScene";

const stats = [
	{ value: "20+", label: "Projects Shipped" },
	{ value: "3+", label: "Years Experience" },
	{ value: "AI", label: "First Mindset" },
	{ value: "∞", label: "Curiosity" },
];

export const About = () => (
	<Section
		id="about"
		eyebrow="About Me"
		title="Bridging the gap between engineering and design."
	>
		<div className="pb-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
				className="space-y-8"
			>
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
					As a Full Stack Software Engineer, I bridge the gap between complex
					engineering and elegant design. I specialize in the modern JavaScript
					ecosystem to build scalable, AI-powered applications that drive real
					impact.
				</p>

				<div className="flex flex-wrap items-center gap-3">
					<div className="flex h-10 items-center justify-center rounded-full bg-primary/10 px-4 border border-primary/20">
						<MapPin className="mr-2 h-4 w-4 text-primary" />
						<span className="text-sm font-semibold text-primary">
							Kozhikode, Kerala
						</span>
					</div>
					<div className="flex h-10 items-center justify-center rounded-full bg-white/5 px-4 border border-white/10">
						<span className="relative flex h-2 w-2 mr-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						<span className="text-sm font-semibold">Available for work</span>
					</div>
				</div>

				{/* Minimal Stats Row */}
				<div className="pt-8 mt-2 border-t border-border flex flex-wrap gap-x-12 gap-y-6">
					{stats.slice(0, 4).map((s) => (
						<div key={s.label}>
							<div className="text-3xl font-bold text-foreground mb-1">
								{s.value}
							</div>
							<div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
				whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				className="relative w-full aspect-square max-h-[500px] mx-auto flex items-center justify-center"
			>
				<PortraitScene />
			</motion.div>
		</div>
	</Section>
);
