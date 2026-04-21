import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Projects } from "@/components/portfolio/Projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-10 pb-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
