import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsPreview } from "@/components/portfolio/ProjectsPreview";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";

const Index = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<ProjectsPreview />
			<Experience isPreview={true} />
			<Education isPreview={true} />
			<Contact />
		</>
	);
};

export default Index;
