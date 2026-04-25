import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/experience", label: "Experience" },
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
	{ href: "https://x.com/swabah", label: "X" }, // Added X as seen in image
	{ href: "https://instagram.com/swabah", label: "Instagram" }, // Added Instagram as seen in image
	{ href: "mailto:ahmedswabah.dev@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => (
	<footer className="pt-24 pb-12 mt-20 border-t border-border/30 bg-background relative overflow-hidden flex flex-col items-center">
		{/* Giant Text - Positioned Absolutely Behind Everything */}
		<div className="absolute top-3/4 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] pointer-events-none select-none overflow-hidden flex items-center justify-center -z-0">
			<motion.h2
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
				className="text-[60vw] md:text-[30vw] font-black leading-none tracking-tighter text-foreground/[0.03] uppercase whitespace-nowrap"
			>
				swabah<span className="text-blue-500/10">.</span>
			</motion.h2>
		</div>

		<div className="container relative z-10 w-full">
			{/* Top Section: Links Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
				<div className="space-y-6">
					<h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
						Navigation
					</h4>
					<ul className="flex flex-col gap-4">
						{links.map((l) => (
							<li key={l.href}>
								<Link
									to={l.href}
									className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="space-y-6">
					<h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
						Social
					</h4>
					<ul className="flex flex-col gap-4">
						{socialLinks.map((l) => (
							<li key={l.label}>
								<a
									href={l.href}
									target="_blank"
									rel="noreferrer"
									className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
								>
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="sm:col-span-2 lg:flex lg:flex-col lg:justify-between lg:items-end lg:text-right space-y-4">
					<div className="space-y-2">
						<p className="text-sm text-muted-foreground">
							Based in Kozhikode, Kerala
						</p>
						<p className="text-sm text-muted-foreground italic font-serif">
							Working remotely worldwide.
						</p>
					</div>
					<div className="pt-4 border-t border-border/10 lg:border-none">
						<a
							href="mailto:ahmedswabah.dev@gmail.com"
							className="text-lg md:text-2xl font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-8"
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Section: Copyright & Built Info */}
			<div className="pt-20 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8 border-t border-border/20 w-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
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
