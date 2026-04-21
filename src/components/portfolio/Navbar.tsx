import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-primary">{"</"}</span>swabah<span className="text-primary">{">"}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
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
          <a
            href="/Ahmed-Swabah-Resume.pdf"
            download
            className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
};
