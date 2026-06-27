import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "PachaTech",
    imgSrc: "/projects/pachatech.png",
    description:
      "Software factory focused on digital solutions for entrepreneurs and SMBs. Modern landing page with direct WhatsApp CTA.",
    about:
      "PachaTech is the software factory I founded to deliver digital solutions for entrepreneurs and SMBs in Peru. The landing page showcases services, agile methodology and direct contact channels. Built with a focus on conversion and user experience.",
    features: [
      "Responsive landing page with smooth animations",
      "Services, methodology and team sections",
      "Direct WhatsApp integration for instant contact",
      "Deployed in production with custom domain pachatech.pro",
    ],
    techStack: [
      projectTech.react,
      projectTech.typescript,
      projectTech.tailwindcss,
      projectTech.vite,
    ],
    liveLink: "https://pachatech.pro/",
    githubLink: "https://github.com/Piers18",
  },
  {
    name: "CheetHub",
    imgSrc: "/projects/cheethub.png",
    description:
      "Terminal-style cheatsheet library. Organize, search and browse all your cheatsheets in one place. Fast and functional.",
    about:
      "CheetHub is a platform to organize and browse development cheatsheets. With a terminal-style interface, it allows searching by tags, uploading new content and navigating cheatsheets quickly.",
    features: [
      "Search and filter by tags (SDD, spec-kit, Development)",
      "Cheatsheet upload with markdown support",
      "Terminal-style interface with dark-first design",
      "Real-time cheatsheet and tag counter",
      "Deployed on Vercel with fast rendering",
    ],
    techStack: [
      projectTech.react,
      projectTech.typescript,
      projectTech.tailwindcss,
      projectTech.vite,
    ],
    liveLink: "https://cheetsheets-blush.vercel.app/",
    githubLink: "https://github.com/Piers18",
  },
  {
    name: "SuperTodo",
    imgSrc: "/projects/supertodo.png",
    description:
      "A full-featured todo app with priorities, due dates, subtasks, and date-grouped views. Animated with Framer Motion and styled with shadcn/ui.",
    about:
      "A personal productivity app built to go beyond a basic todo list. It supports subtasks, priority levels, due dates, and groups tasks by date for a cleaner overview.",
    features: [
      "Create, edit, and delete tasks with subtask support and completion tracking",
      "Priority levels (High, Medium, Low) with visual indicators",
      "Due date picker with date-grouped task views",
      "Filter by All, Pending, and Completed — sort by status, priority, or date",
      "Smooth Framer Motion animations on task add, complete, and delete",
      "Dark and light theme toggle with persistent preference",
      "Data persisted via localStorage — survives page refresh",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.motion,
      projectTech.shadcnui,
    ],
    liveLink: "https://supertodo-v1.netlify.app/",
    githubLink: "https://github.com/Piers18/supertodo",
  },
];
