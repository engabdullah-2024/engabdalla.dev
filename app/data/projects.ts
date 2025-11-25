// /data/projects.ts

export interface Project {
  slug: string;              // ✅ Added slug
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "mogtax-easy-pay", // ✅ added
    title: "MogTax Easy Pay",
    description:
      "Scalable property management app built with React.js, Express, Tailwind CSS, Shadcn UI, MongoDB, and JWT. Designed for real-world data modeling and authentication flows.",
    tech: [
      "React.js",
      "Express",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/images/mog.png",
  },

  {
    slug: "portfolio", // ✅ added
    title: "Portfolio",
    description:
      "A sleek, modern portfolio built with Next.js, TypeScript, and Shadcn UI, showcasing responsive design, clean code, and seamless user experience.",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Framer-Motion"],
    liveLink: "https://engabdalla-dev.vercel.app/",
    githubLink: "https://github.com/engabdullah-2024/engabdalla.dev",
    image: "/images/portfolio.PNG",
  },

  {
    slug: "ecommerce-platform", // ✅ added
    title: "E-commerce",
    description:
      "Robust full-stack MERN e-commerce platform with user authentication, admin panel, product CRUD operations, and responsive UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://iltire-e-commerce.vercel.app/",
    githubLink: "https://github.com/engabdullah-2024/Iltire-E-commerce",
    image: "/images/eco.PNG",
  },

  {
    slug: "calculator-app", // ✅ added
    title: "Calculator",
    description:
      "A sleek and responsive calculator app built with vanilla JavaScript and styled using Tailwind CSS for a clean user experience.",
    tech: ["JavaScript", "Tailwind CSS"],
    liveLink: "https://calculator-app-chi-vert.vercel.app/",
    githubLink: "https://github.com/engabdullah-2024/calculator",
    image: "/images/cal.PNG",
  },

  {
    slug: "cimilo-tracker", // ✅ added
    title: "Cimilo Tracker",
    description:
      "A sleek and responsive mileage tracker app built with vanilla JavaScript and Tailwind CSS, designed to help users efficiently log and monitor their trips.",
    tech: ["JavaScript", "Tailwind CSS"],
    liveLink: "https://cimilo-tracker.vercel.app/",
    githubLink: "https://github.com/engabdullah-2024/Cimilo-Tracker",
    image: "/images/cimilo.PNG",
  },

  {
    slug: "dugsi-hub", // ✅ added
    title: "Dugsi Hub",
    description:
      "A free platform offering Grade 12 students access to downloadable exam PDFs, quizzes, and educational resources — designed with Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    liveLink: "https://dugsihubcom.vercel.app/",
    githubLink: "https://github.com/engabdullah-2024/DugsiHub.com",
    image: "/images/dugsi.PNG",
  },
];
