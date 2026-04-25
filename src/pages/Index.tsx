import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectsPreview } from "@/components/portfolio/ProjectsPreview";
import { Skills } from "@/components/portfolio/Skills";

const Index = () => {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Education isPreview={true} />
			<ProjectsPreview />
			<Contact />
			<Footer />
		</main>
	);
};

export default Index;
