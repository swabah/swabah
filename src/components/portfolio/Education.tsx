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
			<div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent pt-10">
				{displayData.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
					>
						{/* Icon/Dot */}
						<div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-sm shrink-0 ml-0 md:ml-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:border-primary/50 group-hover:bg-primary/5 z-10">
							{item.type === "academic" ? (
								<GraduationCap className="w-5 h-5 text-primary" />
							) : (
								<BookOpen className="w-5 h-5 text-primary" />
							)}
						</div>

						{/* Content */}
						<div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 shadow-sm">
							<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
								<span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
									<Calendar className="w-3.5 h-3.5" />
									{item.period}
								</span>
								{item.location && (
									<span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
										<MapPin className="w-3.5 h-3.5" />
										{item.location}
									</span>
								)}
							</div>
							<h3 className="text-lg md:text-xl font-bold mb-1.5 group-hover:text-primary transition-colors leading-tight">
								{item.degree}
							</h3>
							<div className="text-sm font-semibold text-foreground/70 mb-4">
								{item.institution}
							</div>
							{item.description && (
								<p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							)}
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
