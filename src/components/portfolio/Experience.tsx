import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Section } from "./Section";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceProps {
	isPreview?: boolean;
}

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
			className="relative group"
		>
			<div 
				onMouseMove={onMouseMove}
				className="relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm transition-all duration-500 shadow-xl overflow-hidden group/card"
			>
				{/* Mouse Spotlight */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-300 z-10"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								400px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.15),
								transparent 80%
							)
						`,
						maskImage: useMotionTemplate`
							radial-gradient(
								400px circle at ${mouseX}px ${mouseY}px,
								black,
								transparent 80%
							)
						`,
					}}
				/>

				<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-20">
					<div className="flex flex-col sm:flex-row items-start gap-5">
						{/* Company Logo Placeholder / Icon */}
						<div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
							<Briefcase className="w-6 h-6 text-primary" />
						</div>

						<div className="space-y-2">
							<div className="flex flex-wrap items-center gap-2">
								<h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
									{item.role}
								</h3>
								<span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-mono uppercase tracking-wider">
									{item.type}
								</span>
							</div>
							
							<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-medium">
								<span className="flex items-center gap-1.5 text-foreground/80 font-bold">
									<Sparkles className="w-3.5 h-3.5 text-primary" />
									{item.company}
								</span>
								<span className="flex items-center gap-1.5">
									<Calendar className="w-3.5 h-3.5" />
									{item.period}
								</span>
								<span className="flex items-center gap-1.5">
									<MapPin className="w-3.5 h-3.5" />
									{item.location}
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-2 md:justify-end max-w-md">
						{item.skills.map((skill: string) => (
							<span 
								key={skill}
								className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded-md bg-primary/5 border border-primary/10 text-primary/80 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
							>
								{skill}
							</span>
						))}
					</div>
				</div>

				{item.description && (
					<p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl relative z-20">
						{item.description}
					</p>
				)}
			</div>
		</motion.div>
	);
};

export const Experience = ({ isPreview = false }: ExperienceProps) => {
	const displayData = isPreview ? experienceData.slice(0, 3) : experienceData;
	
	return (
		<Section
			id="experience"
			eyebrow="Career"
			title="Experience"
			description="Professional journey and contributions to innovative companies and projects."
		>
			<div className="space-y-6 pt-10">
				{displayData.map((item, index) => (
					<ExperienceCard key={item.id} item={item} index={index} />
				))}
			</div>

			{isPreview && (
				<div className="mt-16 text-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<Link
							to="/experience"
							className="inline-flex items-center gap-2 rounded-full border border-border/50 px-8 py-4 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all group"
						>
							View Full History
							<ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</Link>
					</motion.div>
				</div>
			)}
		</Section>
	);
};
