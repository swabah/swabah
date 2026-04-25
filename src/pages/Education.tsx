import { Education } from "@/components/portfolio/Education";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const EducationPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="min-h-screen bg-background text-foreground">
			<Navbar />
			<div className="pt-10 pb-16">
				<Education isPreview={false} />
			</div>

			<Footer />
		</main>
	);
};

export default EducationPage;
