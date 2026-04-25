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
	{ href: "https://www.linkedin.com/in/sw-abah/", icon: Linkedin, label: "LinkedIn" },
	{ href: "https://x.com/swabah", label: "X" }, // Added X as seen in image
	{ href: "https://instagram.com/swabah", label: "Instagram" }, // Added Instagram as seen in image
	{ href: "mailto:ahmedswabah.dev@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => (
	<footer className="pt-24 pb-12 mt-20 border-t border-border/30 bg-background relative overflow-hidden">
		<div className="container relative z-10">
			{/* Top Section: Links Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
				<div className="space-y-6">
					<h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Navigation</h4>
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
					<h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Social</h4>
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
				<div className="md:col-span-2 flex flex-col justify-between items-end">
					<div className="text-right space-y-2">
						<p className="text-sm text-muted-foreground">Based in Kozhikode, Kerala</p>
						<p className="text-sm text-muted-foreground italic font-serif">Working remotely worldwide.</p>
					</div>
				</div>
			</div>

			{/* Middle Section: Giant Text */}
			<div className="relative mb-20 select-none">
				<motion.h2 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="text-[14vw] font-black leading-[0.8] tracking-tighter text-foreground/5 text-center md:text-left"
				>
					@swabah.dev
				</motion.h2>
				<motion.h2 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="absolute top-0 left-0 text-[14vw] font-black leading-[0.8] tracking-tighter text-foreground text-center md:text-left mix-blend-difference"
				>
					@swabah.dev
				</motion.h2>
			</div>

			{/* Bottom Section: Copyright & Built Info */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/20 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
				<div>
					© {new Date().getFullYear()} Ahmed Swabah.
				</div>
				<div className="flex items-center gap-4">
					<span>Designed & Built by hand</span>
					<div className="flex items-center gap-2">
						{socialLinks.filter(s => s.icon).map(({ href, icon: Icon, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Icon className="h-3 w-3" />
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
