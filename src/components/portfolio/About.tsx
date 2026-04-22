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
		<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="space-y-6"
			>
				<p className="text-xl text-muted-foreground leading-relaxed font-medium">
					I bridge the gap between complex engineering and elegant design,
					building scalable solutions that drive real impact.
				</p>
				<p className="text-lg text-muted-foreground/80 leading-relaxed">
					As a Full Stack Software Engineer, I specialize in the modern
					JavaScript ecosystem. I craft clean, performant, production-ready
					applications that not only solve real-world problems but also provide
					delightful user experiences.
				</p>
				<p className="text-lg text-muted-foreground/80 leading-relaxed">
					I also design and integrate AI-powered systems—enabling automation,
					smarter workflows, and future-ready platforms. Whether working on a
					fast-paced startup or an enterprise application, my focus is always on
					delivering value.
				</p>

				<div className="flex flex-wrap items-center gap-3 pt-4">
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
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="relative"
			>
				<div className="relative aspect-square max-h-[500px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex flex-col justify-between">
					<div className="absolute inset-0 z-0">
						<PortraitScene />
					</div>

					{/* Gradient overlay to ensure text readability */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none" />

					<div className="relative z-20 grid grid-cols-2 gap-4 p-6 mt-auto">
						{stats.map((s, i) => (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 + i * 0.1 }}
								key={s.label}
								className="rounded-2xl border border-white/10 bg-background/60 backdrop-blur-md p-4 flex flex-col justify-center items-center text-center hover:bg-background/80 transition-colors"
							>
								<div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
									{s.value}
								</div>
								<div className="text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-wider">
									{s.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	</Section>
);
