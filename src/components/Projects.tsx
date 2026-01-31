import ProjectsClient from "./ProjectsClient";
import { getGithubRepos } from "@/lib/github";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages: string[];
  stargazers_count: number;
  readme?: string;
}

export default async function Projects() {
  let repos: Repo[] = [];
  
  try {
    repos = await getGithubRepos();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
  
  // Fallback to demo projects if API fails
  if (!repos || repos.length === 0) {
    repos = [
      {
        id: 1,
        name: "ZEN-BEAUTY",
        description: "E-commerce platform for organic beauty products with product filtering and secure checkout.",
        html_url: "https://github.com/MohamedAmineAitJaakike/ZEN-BEAUTY",
        languages: ["React", "Node.js", "MongoDB", "Stripe"],
        stargazers_count: 12,
        readme: "A modern e-commerce platform featuring product catalog, user authentication, shopping cart management, and integrated payment processing.",
      },
      {
        id: 2,
        name: "E-LearningPlatform",
        description: "Interactive online learning platform with course management and progress tracking.",
        html_url: "https://github.com/MohamedAmineAitJaakike/E-LearningPlatform",
        languages: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
        stargazers_count: 8,
        readme: "Comprehensive e-learning solution with video streaming, course modules, quiz system, and learner analytics dashboard.",
      },
      {
        id: 3,
        name: "Web-Scraping-Project",
        description: "Advanced web scraping solution for data collection and analysis.",
        html_url: "https://github.com/MohamedAmineAitJaakike/Web-Scraping-Project",
        languages: ["Python", "BeautifulSoup", "Selenium", "Pandas"],
        stargazers_count: 5,
        readme: "Robust web scraping framework with JavaScript support, rate limiting, and data pipeline for analysis.",
      },
    ];
  }
  
  return <ProjectsClient projects={repos} />;
}

