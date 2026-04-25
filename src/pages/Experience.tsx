import { Experience } from "@/components/portfolio/Experience";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen pt-24 pb-12">
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
