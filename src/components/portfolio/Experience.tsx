import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { Section } from "./Section";
import { experienceData, ExperienceItem } from "@/data/experience";
import {
	Briefcase,
	Calendar,
	MapPin,
	ExternalLink,
	CheckCircle2,
	Building2,
	Clock,
	Sparkles,
	ArrowRight,
	TrendingUp,
	Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceProps {
	isPreview?: boolean;
}

const STATS = [
	{ label: "Track Record", value: "3+ Years", icon: TrendingUp },
	{ label: "Organizations", value: "5 Companies", icon: Building2 },
	{ label: "Active Roles", value: "2 Present", icon: Sparkles },
	{ label: "Core Focus", value: "Full Stack & AI", icon: Briefcase },
];

const ExperienceCard = ({
	item,
	index,
}: {
	item: ExperienceItem;
	index: number;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const isCurrent =
		item.isCurrent ?? item.period.toLowerCase().includes("present");

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.08,
				ease: [0.16, 1, 0.3, 1],
			}}
			className="relative group pl-7 sm:pl-10 md:pl-14"
		>
			{/* Timeline Connector Line */}
			<div className="absolute left-2.5 sm:left-3.5 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border/60 to-transparent group-last:bottom-8" />

			{/* Timeline Node */}
			<div className="absolute left-0 sm:left-1 md:left-2.5 top-7 z-20 flex items-center justify-center">
				{isCurrent ? (
					<div className="relative flex items-center justify-center">
						<span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-primary/40 opacity-75" />
						<span className="relative flex items-center justify-center h-5 w-5 rounded-full bg-background border-2 border-primary shadow-[0_0_14px_rgba(174,110,247,0.8)]">
							<span className="h-2 w-2 rounded-full bg-primary" />
						</span>
					</div>
				) : (
					<div className="flex items-center justify-center h-5 w-5 rounded-full bg-background border-2 border-border/80 group-hover:border-primary/80 group-hover:scale-110 transition-all duration-300">
						<span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors" />
					</div>
				)}
			</div>

			{/* Card Container */}
			<div
				onMouseMove={onMouseMove}
				className="relative p-[1px] rounded-3xl bg-gradient-to-b from-border/50 via-border/20 to-transparent hover:from-primary/40 hover:via-primary/10 transition-all duration-500 group/card shadow-xl"
			>
				{/* Mouse Spotlight */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/card:opacity-100 transition duration-500 z-10"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								550px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.12),
								transparent 80%
							)
						`,
					}}
				/>

				<div className="relative p-6 sm:p-9 rounded-[23px] bg-card/60 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10">
					{/* Header Information */}
					<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-20 mb-6">
						<div className="space-y-3">
							{/* Badges / Status row */}
							<div className="flex flex-wrap items-center gap-2.5">
								{isCurrent ? (
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_rgba(174,110,247,0.25)]">
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
											<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
										</span>
										Active Role
									</span>
								) : (
									<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-muted/60 text-muted-foreground border border-border/50">
										Completed
									</span>
								)}

								<span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-secondary/60 text-foreground/80 border border-border/40">
									{item.type}
								</span>

								{item.duration && (
									<span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/90 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
										<Clock className="w-3.5 h-3.5 text-primary/70" />
										{item.duration}
									</span>
								)}
							</div>

							{/* Role & Company */}
							<div>
								<h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground group-hover/card:text-primary transition-colors duration-300">
									{item.role}
								</h3>

								<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-base sm:text-lg">
									{item.companyUrl ? (
										<a
											href={item.companyUrl}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-1.5 font-bold text-foreground/90 hover:text-primary transition-colors underline-offset-4 hover:underline"
										>
											<Building2 className="w-4 h-4 text-primary/70" />
											{item.company}
											<ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/card:opacity-100 transition-opacity" />
										</a>
									) : (
										<span className="inline-flex items-center gap-1.5 font-bold text-foreground/90">
											<Building2 className="w-4 h-4 text-primary/70" />
											{item.company}
										</span>
									)}
								</div>
							</div>
						</div>

						{/* Timeline & Location Info */}
						<div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-sm text-muted-foreground font-medium shrink-0">
							<div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-foreground/90 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/5 shadow-sm">
								<Calendar className="w-4 h-4 text-primary" />
								{item.period}
							</div>
							<div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground/80 px-1">
								<MapPin className="w-3.5 h-3.5 text-muted-foreground/60" />
								{item.location}
							</div>
						</div>
					</div>

					{/* Description */}
					{item.description && (
						<p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal mb-5 relative z-20">
							{item.description}
						</p>
					)}

					{/* Key Highlights Bullet points */}
					{item.highlights && item.highlights.length > 0 && (
						<div className="space-y-2 mb-6 relative z-20">
							{item.highlights.map((highlight, idx) => (
								<div
									key={idx}
									className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed"
								>
									<CheckCircle2 className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
									<span>{highlight}</span>
								</div>
							))}
						</div>
					)}

					{/* Skills Pill Badges */}
					<div className="pt-3 border-t border-white/5 flex flex-wrap gap-2 relative z-20">
						{item.skills.map((skill: string) => (
							<span
								key={skill}
								className="px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono font-medium text-muted-foreground/80 group-hover/card:border-primary/20 group-hover/card:text-foreground/90 hover:!border-primary hover:!text-primary transition-all duration-300"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export const Experience = ({ isPreview = false }: ExperienceProps) => {
	const [activeFilter, setActiveFilter] = useState<string>("all");

	// Filter data based on active tab
	const filteredData = experienceData.filter((item) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "active") {
			return item.isCurrent ?? item.period.toLowerCase().includes("present");
		}
		if (activeFilter === "fulltime") {
			return item.type.toLowerCase().includes("full-time");
		}
		if (activeFilter === "remote-hybrid") {
			return (
				item.location.toLowerCase().includes("remote") ||
				item.location.toLowerCase().includes("hybrid") ||
				item.type.toLowerCase().includes("hybrid")
			);
		}
		return true;
	});

	const displayData = isPreview ? filteredData.slice(0, 3) : filteredData;

	return (
		<Section
			id="experience"
			eyebrow="Career Path"
			title="Work Experience"
			description="Professional milestones, startup leadership, and hands-on contributions across modern software and AI ecosystems."
		>
			{/* Career Stats Bar */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
			>
				{STATS.map((stat, i) => {
					const Icon = stat.icon;
					return (
						<div
							key={i}
							className="relative p-5 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md overflow-hidden group hover:border-primary/30 transition-all duration-300"
						>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
									<Icon className="w-5 h-5" />
								</div>
								<div>
									<div className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
										{stat.value}
									</div>
									<div className="text-xs text-muted-foreground font-medium">
										{stat.label}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>

			{/* Interactive Filter Pills */}
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border/40"
			>
				<span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground mr-2">
					<Filter className="w-3.5 h-3.5 text-primary" />
					Filter:
				</span>

				{[
					{ id: "all", label: `All Roles (${experienceData.length})` },
					{
						id: "active",
						label: `Active (${experienceData.filter((d) => d.isCurrent).length})`,
					},
					{
						id: "fulltime",
						label: `Full-time (${experienceData.filter((d) => d.type.toLowerCase().includes("full-time")).length})`,
					},
					{
						id: "remote-hybrid",
						label: "Remote & Hybrid",
					},
				].map((filter) => {
					const isActive = activeFilter === filter.id;
					return (
						<button
							key={filter.id}
							onClick={() => setActiveFilter(filter.id)}
							className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-300 ${
								isActive
									? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(174,110,247,0.4)]"
									: "bg-white/[0.03] text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-white/5"
							}`}
						>
							{filter.label}
						</button>
					);
				})}
			</motion.div>

			{/* Timeline Experience Cards */}
			<div className="space-y-8 relative">
				<AnimatePresence mode="popLayout">
					{displayData.map((item, index) => (
						<ExperienceCard key={item.id} item={item} index={index} />
					))}
				</AnimatePresence>

				{displayData.length === 0 && (
					<div className="text-center py-12 text-muted-foreground">
						No experience entries found under this filter.
					</div>
				)}
			</div>

			{/* View Full History Button on Preview Mode */}
			{isPreview && (
				<div className="mt-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<Link
							to="/experience"
							className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-8 py-4 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/15 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
						>
							<span>Explore All {experienceData.length} Roles & Timeline</span>
							<ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1.5 transition-transform" />
						</Link>
					</motion.div>
				</div>
			)}
		</Section>
	);
};
