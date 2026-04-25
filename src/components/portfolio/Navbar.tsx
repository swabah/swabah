import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/experience", label: "Experience" },
	{ href: "/education", label: "Education" },
	{ href: "/projects", label: "Projects" },
	{ href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<header
			className={cn(
				"fixed top-0 inset-x-0 z-50 transition-all duration-300",
				scrolled || isMobileMenuOpen
					? "bg-background/80 backdrop-blur-xl border-b border-border/50"
					: "bg-transparent",
			)}
		>
			<nav className="container flex items-center justify-between h-16">
				<Link
					to="/"
					className="font-mono text-sm font-semibold tracking-tight z-50 relative"
				>
					<span className="text-primary">{"</"}</span>swabah
					<span className="text-primary">{">"}</span>
				</Link>
				<ul className="hidden md:flex items-center gap-8">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								to={l.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-2 z-50 relative">
					<a
						href="/Ahmed-Swabah-Resume.pdf"
						download
						className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
					>
						Resume
					</a>
					<Link
						to="/#contact"
						className="inline-flex text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
					>
						Let's talk
					</Link>

					<button
						type="button"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "100vh" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed inset-x-0 top-16 bg-background/95 backdrop-blur-xl border-b border-border/50 md:hidden overflow-y-auto"
					>
						<div className="container py-8 flex flex-col gap-8 h-full">
							<ul className="flex flex-col gap-6">
								{links.map((l) => (
									<li key={l.href}>
										<Link
											to={l.href}
											onClick={() => setIsMobileMenuOpen(false)}
											className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors block"
										>
											{l.label}
										</Link>
									</li>
								))}
							</ul>
							<div className="flex flex-col gap-4 mt-auto pb-24">
								<a
									href="/Ahmed-Swabah-Resume.pdf"
									download
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-center text-base font-semibold px-6 py-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
								>
									Download Resume
								</a>
								<Link
									to="/#contact"
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-center text-base font-semibold px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
								>
									Let's talk
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
