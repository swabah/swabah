import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import swabahImg from "@/assets/swabah.png";

export const Hero = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen bg-background overflow-hidden flex items-center"
		>
			{/* LEFT: Image fading into background */}
			<div className="absolute top-0 left-0 w-full lg:w-2/3 h-full z-0">
				{/* Fade to background on the right */}
				<div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-r from-transparent via-background/80 to-background z-10" />
				{/* Fade to background on the bottom */}
				<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10" />
				<img
					src={swabahImg}
					alt="Ahmed Swabah"
					className="w-full h-full object-cover object-center lg:object-[center_20%] grayscale opacity-70"
				/>
			</div>

			{/* RIGHT: Content */}
			<div className="container relative z-20 flex justify-end">
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16 pt-32 lg:pt-0">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-3"
					>
						Ahmed Swabah<span className="text-primary">.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="text-lg md:text-xl text-muted-foreground mb-8 font-medium"
					>
						Full Stack Software Engineer
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="flex items-center gap-6"
					>
						<a
							href="https://github.com/Ahmed-Swabah"
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com/in/Ahmed-Swabah"
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://twitter.com/Ahmed-Swabah"
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Twitter className="w-6 h-6" />
						</a>
						<a
							href="mailto:ahmedswabah@example.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Mail className="w-6 h-6" />
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
