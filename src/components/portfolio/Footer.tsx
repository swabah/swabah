import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/education", label: "Education" },
	{ href: "/projects", label: "Projects" },
	{ href: "/#contact", label: "Contact" },
];

const socialLinks = [
	{ href: "https://github.com/swabah", icon: Github, label: "GitHub" },
	{
		href: "https://www.linkedin.com/in/sw-abah/",
		icon: Linkedin,
		label: "LinkedIn",
	},
	{ href: "https://x.com/swabah", label: "X" }, 
	{ href: "https://instagram.com/swabah", label: "Instagram" }, 
	{ href: "mailto:ahmedswabah.dev@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => (
	<footer className="pt-16 pb-8 sm:pt-24 sm:pb-12 mt-12 sm:mt-20 border-t border-border/30 bg-background relative overflow-hidden flex flex-col items-center">
		<div className="container relative z-10 w-full">
			{/* Top Section: Links Grid */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
				<div className="space-y-4 sm:space-y-6">
					<h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">
						Navigation
					</h4>
					<ul className="flex flex-col gap-3 sm:gap-4">
						{links.map((l) => (
							<li key={l.href}>
								<Link
									to={l.href}
									className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="space-y-4 sm:space-y-6">
					<h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground">
						Social
					</h4>
					<ul className="flex flex-col gap-3 sm:gap-4">
						{socialLinks.map((l) => (
							<li key={l.label}>
								<a
									href={l.href}
									target="_blank"
									rel="noreferrer"
									className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
								>
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-2 lg:flex lg:flex-col lg:justify-between lg:items-end lg:text-right space-y-4 mt-8 lg:mt-0">
					<div className="space-y-2">
						<p className="text-xs sm:text-sm text-muted-foreground">
							Based in Kozhikode, Kerala
						</p>
						<p className="text-xs sm:text-sm text-muted-foreground italic font-serif">
							Working remotely worldwide.
						</p>
					</div>
					<div className="pt-4 border-t border-border/10 lg:border-none">
						<a
							href="mailto:ahmedswabah.dev@gmail.com"
							className="text-base sm:text-2xl font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-8"
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>

			{/* Middle Section: Stacked Giant Text Layers */}
			<div className="relative h-[20vw] sm:h-[18vw] mb-12 sm:mb-24 select-none w-full">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex justify-center items-center overflow-visible">
					{/* Background Layer (Shadow) */}
					<motion.h2 
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
						className="absolute text-[20vw] sm:text-[25vw] font-black leading-none tracking-tighter text-foreground/[0.03] uppercase whitespace-nowrap z-0"
					>
						swabah<span className="text-blue-500/10">.</span>
					</motion.h2>

					{/* Foreground Layer (Main) */}
					<motion.h2 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="relative text-[20vw] sm:text-[25vw] font-black leading-none tracking-tighter text-foreground uppercase mix-blend-difference z-10 whitespace-nowrap"
					>
						swabah<span className="text-blue-500">.</span>
					</motion.h2>
				</div>
			</div>

			{/* Bottom Section: Copyright & Built Info */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border/20 w-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
				<div className="text-center md:text-left">
					© {new Date().getFullYear()} Ahmed Swabah.
				</div>
				<div className="flex flex-col md:flex-row items-center gap-6">
					<span className="text-center md:text-left">
						Designed & Built by hand
					</span>
					<div className="flex items-center gap-4">
						{socialLinks
							.filter((s) => s.icon)
							.map(({ href, icon: Icon, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noreferrer"
									className="hover:text-primary transition-colors p-2 rounded-full bg-secondary/50 border border-border/50"
								>
									<Icon className="h-4 w-4" />
								</a>
							))}
					</div>
				</div>
			</div>
		</div>

		{/* Decorative Background Elements */}
		<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
		<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
	</footer>
);
