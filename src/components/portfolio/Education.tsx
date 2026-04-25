import {
	motion,
	useMotionValue,
	useSpring,
	useMotionTemplate,
} from "framer-motion";
import { Section } from "./Section";
import { educationData } from "@/data/education";
import {
	GraduationCap,
	BookOpen,
	Calendar,
	MapPin,
	ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface EducationProps {
	isPreview?: boolean;
}

const EducationCard = ({ item, index }: { item: any; index: number }) => {
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
			transition={{
				duration: 0.7,
				delay: index * 0.1,
				ease: [0.16, 1, 0.3, 1],
			}}
			className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
		>
			{/* Icon/Dot */}
			<div className="flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md shadow-2xl shrink-0 ml-0 md:ml-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-primary/20 z-10">
				{item.type === "academic" ? (
					<GraduationCap className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
				) : (
					<BookOpen className="w-6 h-6 text-primary transition-transform duration-500 group-hover:-rotate-12" />
				)}
			</div>

			{/* Content */}
			<div
				onMouseMove={onMouseMove}
				className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] group/card relative"
			>
				{/* Mouse Spotlight Background */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-300 z-0"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								650px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.1),
								transparent 80%
							)
						`,
					}}
				/>

				{/* Mouse Spotlight Border */}
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-300 z-10"
					style={{
						background: useMotionTemplate`
							radial-gradient(
								400px circle at ${mouseX}px ${mouseY}px,
								rgba(var(--primary-rgb), 0.4),
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

				<div className="relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm transition-all duration-500 shadow-xl overflow-hidden z-0">
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
	);
};

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
					<EducationCard key={item.id} item={item} index={index} />
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
							className="rounded-full px-6 sm:px-8 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-xs sm:text-base h-10 sm:h-12"
						>
							View Full Journey{" "}
							<ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
						</Link>
					</motion.div>
				</div>
			)}
		</Section>
	);
};
