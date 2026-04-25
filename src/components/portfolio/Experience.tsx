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

	const isCurrent = item.period.toLowerCase().includes("present");

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
			className="relative group"
		>
			<div 
				onMouseMove={onMouseMove}
				className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-border/20 to-transparent hover:from-primary/20 transition-all duration-700 group/card"
			>
				<div className="relative p-8 sm:p-12 rounded-[2.4rem] bg-card/40 backdrop-blur-2xl border border-white/5 overflow-hidden">
					{/* Background Watermark Text */}
					<div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
						<span className="text-[12rem] font-black text-white/[0.02] leading-none uppercase tracking-tighter transition-all duration-1000 group-hover/card:text-primary/[0.04] group-hover/card:scale-110 block">
							{item.company.split(' ')[0]}
						</span>
					</div>

					{/* Mouse Spotlight */}
					<motion.div
						className="pointer-events-none absolute -inset-px rounded-[2.4rem] opacity-0 group-hover/card:opacity-100 transition duration-700 z-10"
						style={{
							background: useMotionTemplate`
								radial-gradient(
									600px circle at ${mouseX}px ${mouseY}px,
									rgba(var(--primary-rgb), 0.12),
									transparent 80%
								)
							`,
						}}
					/>

					<div className="flex flex-col gap-10 relative z-20">
						{/* Header Section */}
						<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
							<div className="flex items-center gap-8">
								{/* Floating Icon Wrapper */}
								<div className="relative group/icon">
									<div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover/card:scale-105 group-hover/card:border-primary/40 transition-all duration-700 shadow-2xl relative z-10">
										<Briefcase className="w-10 h-10 text-primary/60 group-hover/card:text-primary transition-colors" />
									</div>
									<div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
								</div>

								<div className="space-y-2">
									<div className="flex items-center gap-3">
										<h3 className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 group-hover/card:from-primary group-hover/card:to-primary/60 transition-all duration-700">
											{item.role}
										</h3>
										{isCurrent && (
											<span className="flex h-3 w-3 relative">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
												<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
											</span>
										)}
									</div>
									
									<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
										{item.companyUrl ? (
											<a 
												href={item.companyUrl} 
												target="_blank" 
												rel="noreferrer"
												className="group/link flex items-center gap-2 text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
											>
												{item.company}
												<ExternalLink className="w-4 h-4 translate-y-px opacity-0 group-hover/link:opacity-100 transition-all" />
											</a>
										) : (
											<span className="text-lg font-bold text-muted-foreground">{item.company}</span>
										)}
										<span className="h-1 w-1 rounded-full bg-border" />
										<span className="text-sm font-mono uppercase tracking-[0.2em] text-primary/60 font-bold">{item.type}</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 lg:gap-1 text-right">
								<div className="flex items-center gap-2 text-foreground font-mono text-sm font-black">
									<Calendar className="w-4 h-4 text-primary" />
									{item.period}
								</div>
								<div className="flex items-center gap-2 text-muted-foreground font-medium text-sm">
									<MapPin className="w-4 h-4" />
									{item.location}
								</div>
							</div>
						</div>

						{/* Content Grid */}
						<div className="grid lg:grid-cols-[1fr,300px] gap-12 items-end">
							<div className="space-y-6">
								{item.description && (
									<p className="text-lg text-muted-foreground/80 leading-relaxed font-medium">
										{item.description}
									</p>
								)}
								<div className="flex flex-wrap gap-2 pt-2">
									{item.skills.map((skill: string) => (
										<div 
											key={skill}
											className="px-5 py-2 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-bold text-foreground/50 group-hover/card:border-primary/20 group-hover/card:text-primary/70 transition-all duration-500"
										>
											{skill}
										</div>
									))}
								</div>
							</div>

							{/* Decorative Block */}
							<div className="hidden lg:block h-24 rounded-3xl border border-white/5 bg-white/[0.01] p-6 group-hover/card:border-primary/10 transition-colors">
								<div className="flex gap-2 opacity-20 group-hover/card:opacity-40 transition-opacity">
									{[1,2,3,4,5].map(i => (
										<div key={i} className="h-12 w-1.5 rounded-full bg-primary" style={{ height: `${20 + Math.random() * 60}%` }} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
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
