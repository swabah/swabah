export interface ExperienceItem {
	id: string;
	role: string;
	company: string;
	companyUrl?: string;
	type: string;
	period: string;
	location: string;
	description?: string;
	skills: string[];
	logo?: string;
}

export const experienceData: ExperienceItem[] = [
	{
		id: "upskillabs",
		role: "Full Stack Software Engineer",
		company: "upskillabs",
		companyUrl: "https://www.linkedin.com/company/upskillabs/",
		type: "Part-time",
		period: "Mar 2025 - Present",
		location: "Kerala, India · Hybrid",
		skills: ["Node.js", "MERN Stack", "Tailwind CSS", "TypeScript"],
	},
	{
		id: "luminexis",
		role: "Co-Founder",
		company: "Luminexis",
		companyUrl: "https://www.linkedin.com/company/echosight-ai/",
		type: "Full-time",
		period: "Jun 2025 - Present",
		location: "Kozhikode, Kerala, India · Hybrid",
		skills: [
			"Project Management",
			"Team Management",
			"Architecture",
			"Product Strategy",
		],
	},
	{
		id: "echosight-ai",
		role: "Software Engineer",
		company: "Echosight AI",
		companyUrl: "https://www.linkedin.com/company/echosight-ai/",
		type: "Part-time",
		period: "2024 - Present",
		location: "Remote",
		skills: ["Artificial Intelligence", "Python", "Full Stack Development"],
	},
	{
		id: "galamine-ai",
		role: "Full Stack Software Engineer",
		company: "Galamine AI",
		companyUrl: "https://www.linkedin.com/company/galamine-ai/",
		type: "Internship",
		period: "Sep 2025 - Present",
		location: "India · Remote",
		skills: ["Node.js", "Front-End Development", "AI Integration", "React"],
	},
	{
		id: "trizo-creatives",
		role: "Web Developer",
		company: "Trizo Creatives",
		companyUrl: "https://www.linkedin.com/company/trizo-creatives",
		type: "Hybrid",
		period: "Sep 2023 - Present",
		location: "Kerala, India",
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
		id: "amri-foundation",
		role: "Developer",
		company: "Amri Foundation",
		companyUrl: "https://www.linkedin.com/company/amri-foundation/",
		type: "Part-time",
		period: "Jun 2023 - 2024",
		location: "India · Remote",
		skills: ["Web Development", "Community Support", "JavaScript", "HTML/CSS"],
	},
];
