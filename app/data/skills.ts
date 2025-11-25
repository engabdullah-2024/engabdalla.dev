import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiReact,
  SiFramer,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiShadcnui,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiGraphql
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: "frontend" | "backend";
}

export const skills: Skill[] = [
  // ==========================
  // 🟦 FRONTEND SKILLS
  // ==========================
  { name: "HTML5", Icon: SiHtml5, color: "text-orange-600", category: "frontend" },
  { name: "CSS3", Icon: SiCss3, color: "text-blue-600", category: "frontend" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400", category: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600", category: "frontend" },
  { name: "React", Icon: SiReact, color: "text-sky-500", category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white", category: "frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500", category: "frontend" },
  { name: "Shadcn UI", Icon: SiShadcnui, color: "text-black dark:text-white", category: "frontend" },
  { name: "Framer Motion", Icon: SiFramer, color: "text-pink-600", category: "frontend" },

  // ==========================
  // 🟩 BACKEND SKILLS
  // ==========================
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600", category: "backend" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-700 dark:text-gray-300", category: "backend" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600", category: "backend" },
  { name: "Prisma", Icon: SiPrisma, color: "text-indigo-600", category: "backend" },
  { name: "GitHub", Icon: SiGithub, color: "text-black dark:text-white", category: "backend" },

  // ⭐ Newly added backend skills
  { name: "Python", Icon: SiPython, color: "text-blue-500", category: "backend" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-700", category: "backend" },
  { name: "Redis", Icon: SiRedis, color: "text-red-600", category: "backend" },
  { name: "GraphQL", Icon: SiGraphql, color: "text-pink-500", category: "backend" },
];
