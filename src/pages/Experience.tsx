import { Experience } from "@/components/portfolio/Experience";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Experience isPreview={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
