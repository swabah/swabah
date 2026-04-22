import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

const links = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#contact", label: "Contact" },
];

export const Footer = () => (
	<footer className="border-t border-border py-10 mt-10">
		<div className="container flex flex-col md:flex-row items-center justify-between gap-6">
			<div className="text-sm text-muted-foreground font-mono">
				<AnimatedText
					text={`© ${new Date().getFullYear()} Ahmed Swabah. Crafted with care.`}
				/>
			</div>
			<ul className="flex items-center gap-6">
				{links.map((l) => (
					<li key={l.href}>
						<a
							href={l.href}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							{l.label}
						</a>
					</li>
				))}
			</ul>
			<div className="flex items-center gap-2">
				{[
					{ href: "https://github.com/swabah", icon: Github, label: "GitHub" },
					{
						href: "https://www.linkedin.com/in/sw-abah/",
						icon: Linkedin,
						label: "LinkedIn",
					},
					{
						href: "mailto:ahmedswabah.dev@gmail.com",
						icon: Mail,
						label: "Email",
					},
				].map(({ href, icon: Icon, label }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={label}
						className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
					>
						<Icon className="h-3.5 w-3.5" />
					</a>
				))}
			</div>
		</div>
	</footer>
);
