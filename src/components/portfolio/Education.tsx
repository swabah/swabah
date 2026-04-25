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
							<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-transparent rounded-3xl blur opacity-0 group-hover/card:opacity-100 transition duration-500" />
							<div className="relative p-6 sm:p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl hover:bg-card/50 transition-all duration-500 shadow-xl overflow-hidden">
								{/* Decorative corner */}
								<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover/card:bg-primary/10 transition-colors duration-500" />
								
								<div className="flex flex-wrap items-center gap-3 mb-6">
									<div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
										<Calendar className="w-3.5 h-3.5" />
										{item.period}
									</div>
									{item.location && (
										<div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground font-semibold tracking-wide">
											<MapPin className="w-3.5 h-3.5" />
											{item.location}
										</div>
									)}
								</div>

								<h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight group-hover/card:text-primary transition-colors duration-300 leading-tight">
									{item.degree}
								</h3>
								
								<div className="text-sm sm:text-base font-bold text-foreground/80 mb-6 flex items-center gap-2">
									<span className="w-4 h-[1px] bg-primary/40" />
									{item.institution}
								</div>

								{item.description && (
									<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
										{item.description}
									</p>
								)}

								{/* Hover reveal accent */}
								<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 ease-out" />
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
