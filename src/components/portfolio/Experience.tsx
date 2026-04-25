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
			initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
			className="relative group"
		>
			<div 
				onMouseMove={onMouseMove}
				className="relative p-8 sm:p-10 rounded-[2.5rem] border border-border/40 bg-card/10 backdrop-blur-md transition-all duration-700 shadow-2xl overflow-hidden group/card"
			>
				{/* Mouse Spotlight Background */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 transition duration-500 z-0"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								600px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.08),
								transparent 80%
							)
						`,
					}}
				/>
				
				{/* Mouse Spotlight Border */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 transition duration-500 z-10"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								400px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.3),
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

				<div className="flex flex-col gap-8 relative z-20">
					<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
						<div className="flex flex-col sm:flex-row items-start gap-6">
							{/* Company Logo / Brand Accent */}
							<div className="relative shrink-0">
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-700 ease-out shadow-lg">
									<Briefcase className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
								</div>
								<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-background border border-border flex items-center justify-center shadow-sm">
									<Sparkles className="w-3 h-3 text-primary" />
								</div>
							</div>

							<div className="space-y-3">
								<div className="flex flex-wrap items-center gap-3">
									<h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
										{item.role}
									</h3>
									<span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono font-bold uppercase tracking-widest border border-primary/20">
										{item.type}
									</span>
								</div>
								
								<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-muted-foreground/80 font-semibold">
									<div className="flex items-center gap-2 group/company">
										{item.companyUrl ? (
											<a 
												href={item.companyUrl} 
												target="_blank" 
												rel="noreferrer"
												className="hover:text-primary transition-colors flex items-center gap-2 underline decoration-primary/20 underline-offset-4"
											>
												{item.company}
												<ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/company:opacity-100 -translate-y-1 translate-x-[-4px] group-hover/company:translate-x-0 transition-all" />
											</a>
										) : (
											<span>{item.company}</span>
										)}
									</div>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4 text-primary/60" />
										<span className="font-mono text-xs uppercase tracking-wider">{item.period}</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="w-4 h-4 text-primary/60" />
										<span className="text-xs uppercase tracking-wider">{item.location}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						{item.description && (
							<p className="text-sm sm:text-base text-muted-foreground/70 leading-relaxed font-medium max-w-3xl">
								{item.description}
							</p>
						)}

						<div className="flex flex-wrap gap-2.5">
							{item.skills.map((skill: string) => (
								<span 
									key={skill}
									className="text-[10px] sm:text-xs font-mono px-4 py-1.5 rounded-xl bg-secondary/30 border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Corner Decorative Element */}
				<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
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
