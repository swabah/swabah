import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { motion } from "framer-motion";
import {
	Github,
	ExternalLink,
	ArrowLeft,
	Clock,
	User,
	CheckCircle2,
	Wrench,
	Lightbulb,
	Target,
	Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useEffect } from "react";
import { AnimatedText } from "@/components/portfolio/AnimatedText";

const ProjectDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const project = projects.find((p) => p.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!project || !project.caseStudy) {
		return (
			<main className="min-h-screen bg-background text-foreground">
				<Navbar />
				<div className="container pt-32 pb-16">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-4">Project not found</h1>
						<Link to="/projects">
							<Button variant="outline">Back to Projects</Button>
						</Link>
					</div>
				</div>
				<Footer />
			</main>
		);
	}

	const cs = project.caseStudy;
	const {
		overview,
		problem,
		solution,
		challenges,
		techStack,
		features,
		results,
		timeline,
		role,
	} = cs;

	// Render Tech Pills
	const renderTechPills = (techs: string[]) => (
		<div className="flex flex-wrap gap-2">
			{techs.map((t) => (
				<span
					key={t}
					className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary border border-border text-foreground/80"
				>
					{t}
				</span>
			))}
		</div>
	);

	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
			<Navbar />

			{/* Hero Section */}
			<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border/50 bg-background/50">
				{/* Cross lines pattern highlight */}
				<div
					className="absolute inset-0 pointer-events-none z-0 opacity-20"
					style={{
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='%238b5cf6' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3C/svg%3E\")",
						maskImage:
							"linear-gradient(to bottom, black 40%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, black 40%, transparent 100%)",
					}}
				/>

				<div className="container relative z-10">
					<Link
						to="/projects"
						className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary mb-10 transition-colors"
					>
						<ArrowLeft className="h-4 w-4" /> All Projects
					</Link>

					<div className="max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="flex flex-wrap gap-3 mb-6"
						>
							{project.featured && (
								<span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
									Featured
								</span>
							)}
							<span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-background/50 border border-border backdrop-blur-sm text-foreground">
								Case Study
							</span>
						</motion.div>

						<AnimatedText
							text={project.name}
							className="block text-5xl md:text-7xl font-bold tracking-tight mb-8 drop-shadow-xl"
							delay={0.1}
						/>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
							className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl"
						>
							{project.description}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
							className="flex flex-wrap gap-4"
						>
							{project.live && (
								<a
									href={project.live}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40"
								>
									<ExternalLink className="h-5 w-5" /> Visit Live Project
								</a>
							)}
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all font-semibold"
								>
									<Github className="h-5 w-5" /> Source Code
								</a>
							)}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Bento Meta Grid */}
			<section className="py-12 border-b border-border/30 bg-muted/5 relative z-20">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="grid lg:grid-cols-3 gap-6"
					>
						<div className="lg:col-span-2 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 md:p-10 hover:border-border transition-colors">
							<div className="flex items-center gap-3 mb-6">
								<Wrench className="h-5 w-5 text-primary" />
								<h3 className="text-xl font-bold">Tech Stack</h3>
							</div>
							<div className="grid sm:grid-cols-2 gap-8">
								{techStack.frontend.length > 0 && (
									<div>
										<div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">
											Frontend
										</div>
										{renderTechPills(techStack.frontend)}
									</div>
								)}
								{techStack.backend.length > 0 && (
									<div>
										<div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">
											Backend
										</div>
										{renderTechPills(techStack.backend)}
									</div>
								)}
								{techStack.ai && techStack.ai.length > 0 && (
									<div>
										<div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">
											AI / ML
										</div>
										{renderTechPills(techStack.ai)}
									</div>
								)}
								{techStack.tools.length > 0 && (
									<div>
										<div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">
											Tools
										</div>
										{renderTechPills(techStack.tools)}
									</div>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<div className="flex-1 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:border-border transition-colors flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-2 text-muted-foreground">
									<User className="h-4 w-4" />
									<span className="text-xs uppercase tracking-widest font-mono">
										Role
									</span>
								</div>
								<div className="text-lg font-semibold">{role}</div>
							</div>
							<div className="flex-1 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md p-8 hover:border-border transition-colors flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-2 text-muted-foreground">
									<Clock className="h-4 w-4" />
									<span className="text-xs uppercase tracking-widest font-mono">
										Timeline
									</span>
								</div>
								<div className="text-lg font-semibold">{timeline}</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Main Narrative */}
			<article className="py-20 md:py-32">
				<div className="container max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="prose prose-invert prose-lg md:prose-xl max-w-none"
					>
						{/* Overview */}
						<div className="mb-20">
							<div className="flex items-center gap-4 mb-6">
								<div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
									<Target className="h-6 w-6 text-primary" />
								</div>
								<AnimatedText
									text="The Vision"
									className="block text-3xl md:text-4xl font-bold m-0"
								/>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								{overview}
							</p>
						</div>

						{/* Problem & Solution Grid */}
						<div className="grid md:grid-cols-2 gap-10 mb-20">
							<div className="rounded-3xl bg-destructive/5 border border-destructive/10 p-8">
								<div className="flex items-center gap-3 mb-4">
									<Lightbulb className="h-6 w-6 text-destructive" />
									<AnimatedText text="Problem" className="block text-2xl font-bold m-0" />
								</div>
								<p className="text-base text-muted-foreground m-0">{problem}</p>
							</div>

							<div className="rounded-3xl bg-primary/5 border border-primary/10 p-8">
								<div className="flex items-center gap-3 mb-4">
									<Zap className="h-6 w-6 text-primary" />
									<AnimatedText text="Solution" className="block text-2xl font-bold m-0" />
								</div>
								<p className="text-base text-muted-foreground m-0">
									{solution}
								</p>
							</div>
						</div>
					</motion.div>

					{/* Features as Cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="mb-24"
					>
						<AnimatedText
							text="Key Architecture & Features"
							className="block text-3xl md:text-4xl font-bold mb-8"
						/>
						<div className="grid sm:grid-cols-2 gap-4">
							{features.map((feature, i) => (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1 }}
									key={feature.length}
									className="p-6 rounded-2xl border border-border/50 bg-card/20 hover:bg-card/40 transition-colors flex gap-4"
								>
									<CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
									<p className="text-muted-foreground leading-relaxed m-0">
										{feature}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Results & Challenges */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<AnimatedText
							text="Impact & Learnings"
							className="block text-3xl md:text-4xl font-bold mb-8"
						/>

						<div className="space-y-8">
							<div className="p-8 md:p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-card/40 to-background relative overflow-hidden">
								<div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
									<Zap className="w-64 h-64" />
								</div>
								<h3 className="text-2xl font-bold mb-6 relative z-10">
									Results Delivered
								</h3>
								<ul className="space-y-4 relative z-10">
									{results.map((result) => (
										<li
											key={result.length}
											className="flex items-start gap-4 text-lg text-foreground/90 font-medium"
										>
											<span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
											{result}
										</li>
									))}
								</ul>
							</div>

							<div className="p-8 rounded-3xl border border-border/50 bg-card/20">
								<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
									<Wrench className="h-5 w-5 text-muted-foreground" />{" "}
									Overcoming Challenges
								</h3>
								<ul className="space-y-3">
									{challenges.map((challenge) => (
										<li
											key={challenge.length}
											className="flex items-start gap-3 text-muted-foreground"
										>
											<div className="mt-2 w-1.5 h-1.5 rounded-sm bg-muted-foreground/50 flex-shrink-0" />
											{challenge}
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</article>

			{/* Footer CTA */}
			<section className="py-24 border-t border-border/50 bg-muted/5">
				<div className="container max-w-3xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<AnimatedText
							text="Let's build something next."
							className="block text-3xl md:text-5xl font-bold tracking-tight mb-6"
						/>
						<p className="text-xl text-muted-foreground mb-10">
							Interested in working together on a similar project?
						</p>
						<Link to="/#contact">
							<Button
								size="lg"
								className="rounded-full px-10 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
							>
								Start a Conversation
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default ProjectDetail;
