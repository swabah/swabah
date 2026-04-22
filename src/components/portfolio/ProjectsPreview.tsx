import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectCard = ({ p, i }: { p: (typeof projects)[0]; i: number }) => {
	const isEven = i % 2 === 0;

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

	return (
		<motion.article
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: 0.1 }}
			className={`group relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} rounded-2xl border border-border/50 bg-card/20 overflow-hidden hover:bg-card/40 hover:border-border transition-colors duration-500 min-h-[400px]`}
		>
			{/* Minimal top highlight line */}
			<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

			{/* Image Area - 3D Tilt Container */}
			<div
				className={`relative w-full lg:w-1/2 aspect-video lg:aspect-auto border-b lg:border-b-0 ${isEven ? "lg:border-r" : "lg:border-l"} border-border/50 overflow-hidden bg-background/50`}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{ perspective: 1000 }}
			>
				<motion.div
					style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
					className="w-full h-full relative flex items-center justify-center overflow-hidden lg:overflow-visible transition-transform duration-700 ease-out p-6"
				>
					{/* Cross lines pattern highlight */}
					<div
						className="absolute inset-4 lg:inset-8 pointer-events-none z-0 rounded-2xl border border-white/5 bg-background/50 transition-all duration-700 opacity-40 group-hover:opacity-80"
						style={{
							transform: "translateZ(0px)",
							backgroundImage:
								"url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L24 24M24 0L0 24' stroke='%238b5cf6' stroke-width='0.5' fill='none' opacity='0.4'/%3E%3C/svg%3E\")",
						}}
					/>

					<div
						className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
						style={{ transform: "translateZ(40px)" }}
					>
						<span className="font-mono text-3xl md:text-5xl font-bold text-foreground/90 tracking-tight px-4 text-center group-hover:scale-105 group-hover:text-primary transition-all duration-700 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
							{p.name}
						</span>
					</div>

					{/* Decorative elements */}
					{p.featured && (
						<span
							className="absolute top-8 left-8 lg:top-12 lg:left-12 z-30 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-primary/50 text-primary shadow-xl"
							style={{ transform: "translateZ(30px)" }}
						>
							Featured
						</span>
					)}
				</motion.div>
			</div>

			{/* Content Area */}
			<div className="flex flex-col flex-1 p-8 md:p-12 justify-center relative z-20">
				<h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
					{p.name}
				</h3>
				<p className="text-base text-muted-foreground leading-relaxed mb-6">
					{p.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-8">
					{p.tech.map((t) => (
						<span
							key={t}
							className="text-xs font-mono px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-foreground/80 font-medium"
						>
							{t}
						</span>
					))}
				</div>

				<div className="flex items-center gap-4 mt-auto">
					{p.github && (
						<a
							href={p.github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-background/50 border border-border/50 hover:bg-secondary/80 transition-colors"
						>
							<Github className="h-4 w-4" /> Source
						</a>
					)}
					{p.live && (
						<a
							href={p.live}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all"
						>
							<ExternalLink className="h-4 w-4" /> View Live
						</a>
					)}
					{p.caseStudy && (
						<Link
							to={`/projects/${p.slug}`}
							className="ml-auto text-sm text-primary hover:text-primary/80 flex items-center gap-1 font-semibold group/link"
						>
							Case Study{" "}
							<ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
						</Link>
					)}
				</div>
			</div>
		</motion.article>
	);
};

export const ProjectsPreview = () => (
	<Section
		id="projects"
		eyebrow="Selected Work"
		title="Case studies & experiments."
		description="A selection of high-impact platforms, intelligent systems, and scalable web apps."
	>
		<div className="flex flex-col gap-10 mb-12 pt-6">
			{projects.slice(0, 3).map((p, i) => (
				<ProjectCard key={p.slug} p={p} i={i} />
			))}
		</div>

		<div className="flex justify-center mt-8">
			<Button
				asChild
				size="lg"
				variant="outline"
				className="rounded-full px-8 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
			>
				<Link to="/projects">
					View Full Archive <ArrowRight className="ml-2 h-4 w-4" />
				</Link>
			</Button>
		</div>
	</Section>
);
