import { Experience } from "@/components/portfolio/Experience";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen pt-24 pb-16">
			<div className="container mb-4">
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					Back to Home
				</Link>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Experience isPreview={false} />
			</motion.div>
		</div>
	);
};

export default ExperiencePage;
