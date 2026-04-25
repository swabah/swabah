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
      
      {/* Hero-like Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              My <span className="text-primary">Educational</span> Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive overview of my academic background, technical training, and specialized Islamic studies.
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      <Education isPreview={false} />
      
      <Footer />
    </main>
  );
};

export default EducationPage;
