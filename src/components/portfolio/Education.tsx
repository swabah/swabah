import { motion } from "framer-motion";
import { Section } from "./Section";
import { educationData } from "@/data/education";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EducationProps {
	isPreview?: boolean;
}

export const Education = ({ isPreview = false }: EducationProps) => {
	const displayData = isPreview ? educationData.slice(0, 3) : educationData;
	return (
		<Section
			id="education"
			eyebrow="Journey"
			title="Education"
			description="My academic path and specialized studies that have shaped my knowledge and skills."
		>
			<div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent pt-10">
				{displayData.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
					>
						{/* Icon/Dot */}
						<div className="flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md shadow-2xl shrink-0 ml-0 md:ml-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-primary/20 z-10">
							{item.type === "academic" ? (
								<GraduationCap className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
							) : (
								<BookOpen className="w-6 h-6 text-primary transition-transform duration-500 group-hover:-rotate-12" />
							)}
							<div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
						</div>

						{/* Content */}
						<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] group/card relative">
							<div className="relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm hover:bg-card/40 hover:border-primary/40 transition-all duration-500 shadow-xl overflow-hidden">
								<div className="flex flex-wrap items-center gap-3 mb-4">
									<div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-primary/80 bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10">
										<Calendar className="w-3.5 h-3.5" />
										{item.period}
									</div>
									{item.location && (
										<div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium">
											<MapPin className="w-3.5 h-3.5" />
											{item.location}
										</div>
									)}
								</div>

								<h3 className="text-xl sm:text-2xl font-bold mb-1.5 tracking-tight group-hover/card:text-primary transition-colors duration-300 leading-tight">
									{item.degree}
								</h3>
								
								<div className="text-sm sm:text-base font-semibold text-foreground/70 mb-5">
									{item.institution}
								</div>

								{item.description && (
									<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{isPreview && (
				<div className="mt-12 text-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<Link
							to="/education"
							className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
						>
							View Full Journey
						</Link>
					</motion.div>
				</div>
			)}
		</Section>
	);
};
