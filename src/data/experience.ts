export interface ExperienceItem {
	id: string;
	role: string;
	company: string;
	companyUrl?: string;
	type: "Full-time" | "Part-time" | "Hybrid" | "Contract" | "Internship" | string;
	period: string;
	duration?: string;
	location: string;
	description?: string;
	highlights?: string[];
	skills: string[];
	isCurrent?: boolean;
}

export const experienceData: ExperienceItem[] = [
	{
		id: "galamine-ai",
		role: "Full Stack Developer",
		company: "Galamine AI",
		companyUrl: "https://www.linkedin.com/company/galamine-ai/",
		type: "Full-time",
		period: "Sep 2025 - Present",
		duration: "1 yr 2 mos",
		location: "India · Remote",
		isCurrent: true,
		description:
			"Leading full-stack engineering initiatives and responsive front-end architecture, delivering robust web solutions and intelligent AI integrations.",
		highlights: [
			"Architecting modern web applications with Node.js, React, and Next.js.",
			"Engineering seamless AI integrations and performant backend services.",
			"Driving frontend performance optimization and modern UI design practices.",
		],
		skills: [
			"Node.js",
			"Front-End Development",
			"React",
			"AI Integration",
			"TypeScript",
			"Next.js",
			"REST APIs",
		],
	},
	{
		id: "luminexis",
		role: "Co-Founder",
		company: "Luminexis",
		companyUrl: "https://www.linkedin.com/company/echosight-ai/",
		type: "Full-time",
		period: "Jun 2025 - Present",
		duration: "1 yr 5 mos",
		location: "Kozhikode, Kerala, India · Hybrid",
		isCurrent: true,
		description:
			"Co-founded Luminexis, spearheading company vision, engineering architecture, product strategy, and cross-functional team management.",
		highlights: [
			"Directing end-to-end product roadmap and core software architectural decisions.",
			"Leading high-performance developer teams and establishing agile delivery workflows.",
			"Defining technical roadmap, business alignment, and client collaboration.",
		],
		skills: [
			"Project Management",
			"Team Management",
			"Architecture",
			"Product Strategy",
			"System Design",
		],
	},
	{
		id: "trizo-creatives",
		role: "Web Developer",
		company: "Trizo Creatives",
		companyUrl: "https://www.linkedin.com/company/trizo-creatives",
		type: "Hybrid",
		period: "Sep 2023 - Oct 2026",
		duration: "3 yrs 2 mos",
		location: "Kerala, India · Hybrid",
		isCurrent: false,
		description:
			"Engineered client-focused digital web platforms, incorporating interactive motion design, AI capabilities, and scalable database backends.",
		highlights: [
			"Built reactive, animation-rich web applications with Next.js and Framer Motion.",
			"Implemented AI-driven features and Supabase database integrations.",
			"Collaborated with design teams to translate Figma prototypes into pixel-perfect code.",
		],
		skills: [
			"Node.js",
			"Artificial Intelligence (AI)",
			"Next.js",
			"UI/UX Design",
			"Framer Motion",
			"Supabase",
		],
	},
	{
		id: "upskillabs",
		role: "Full Stack Developer",
		company: "upskillabs",
		companyUrl: "https://www.linkedin.com/company/upskillabs/",
		type: "Part-time",
		period: "Mar 2025 - Mar 2026",
		duration: "1 yr 1 mo",
		location: "Kerala, India · Hybrid",
		isCurrent: false,
		description:
			"Engineered full-stack features using the MERN stack and TypeScript, building responsive interfaces and robust backend endpoints.",
		highlights: [
			"Developed responsive web interfaces using Tailwind CSS and React.",
			"Designed and maintained RESTful APIs with Node.js and Express.",
			"Enhanced test coverage and integrated database optimizations with MongoDB.",
		],
		skills: [
			"Node.js",
			"MERN Stack",
			"Tailwind CSS",
			"TypeScript",
			"MongoDB",
		],
	},
	{
		id: "amri-foundation",
		role: "Developer",
		company: "Amri Foundation",
		companyUrl: "https://www.linkedin.com/company/amri-foundation/",
		type: "Part-time",
		period: "Jun 2023 - 2024",
		duration: "8 mos",
		location: "India · Remote",
		isCurrent: false,
		description:
			"Supported community tech operations and web development initiatives, ensuring accessible online tools and consistent technical support.",
		highlights: [
			"Built and deployed accessible web pages using modern HTML, CSS, and JavaScript.",
			"Delivered ongoing technical support and community platform enhancements.",
		],
		skills: [
			"Web Development",
			"Community Support",
			"JavaScript",
			"HTML/CSS",
		],
	},
];
