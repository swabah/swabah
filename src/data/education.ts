export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description?: string;
  details?: string[];
  type: 'academic' | 'islamic';
}

export const educationData: EducationItem[] = [
  {
    id: "ignou-bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "2023 - 2026",
    description: "3-year (up to 6 years) distance learning program aimed at providing foundational IT skills for entry-level careers or higher studies (like MCA).",
    type: "academic"
  },
  {
    id: "ahlussuffa-dars",
    degree: "Integrated Islamic Studies",
    institution: "Ahlussuffa Integrated Studies, Parapram, Kannur, Kerala",
    location: "Kannur, Kerala",
    period: "2022 - Present",
    description: "Affiliated institution of the Jamiathul Hind Al Islamiyya. It specializes in integrated Islamic studies and is recognized for its educational role in the area.",
    type: "islamic"
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education",
    institution: "Darul Hidaya Higher Secondary School (DHHSS) & GHSS Edappal",
    period: "March 2022",
    description: "Completed higher secondary education from Darul Hidaya Higher Secondary School (est. 1984) and GHSS Edappal (code 32050700512).",
    type: "academic"
  },
  {
    id: "dalaelul-khairat",
    degree: "Islamic Studies (Senior & Bachelor)",
    institution: "Dalaelul Khairat, Kakkidippuram, Malappuram",
    location: "Malappuram, Kerala",
    period: "2020 - 2022",
    description: "Senior & Bachelor studies under Jamal Nurani. Focus on classical Islamic texts and spiritual development.",
    type: "islamic"
  },
  {
    id: "sslc",
    degree: "10th | SSLC",
    institution: "KKM Higher Secondary School (KKMHSS) Cheekode",
    location: "Malappuram, Kerala",
    period: "2020",
    description: "A co-educational, state-board affiliated school in Malappuram, Kerala (est. 1976), serving grades 8–12.",
    type: "academic"
  }
];
