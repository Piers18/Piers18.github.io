export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "Java", icon: "/tech/java.svg" },
  { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
];

export const backendSkills: TechItem[] = [
  { name: "Java", icon: "/tech/java.svg" },
  { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "Go", icon: "/tech/go.svg" },
  { name: ".NET", icon: "/tech/dotnet.svg" },
  { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "SQL Server", icon: "/tech/sqlserver.svg" },
  { name: "Redis", icon: "/tech/redis.svg" },
  {
    name: "Kafka",
    icon: "/tech/kafka.svg",
    darkIcon: "/tech/kafka-light.svg",
  },
  {
    name: "JWT",
    icon: "/tech/jwt-light.svg",
    darkIcon: "/tech/jwt-dark.svg",
  },
];

export const frontendSkills: TechItem[] = [
  { name: "React", icon: "/tech/react.svg" },
  {
    name: "Next.js",
    icon: "/tech/nextjs-light.svg",
    darkIcon: "/tech/nextjs.svg",
  },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  { name: "HTML5", icon: "/tech/html5.svg" },
  {
    name: "CSS",
    icon: "/tech/css3.svg",
    darkIcon: "/tech/css3-dark.svg",
  },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
  { name: "Azure", icon: "/tech/azure.svg" },
  { name: "Maven", icon: "/tech/apachemaven.svg" },
  { name: "Gradle", icon: "/tech/gradle.svg" },
  { name: "Postman", icon: "/tech/postman.svg" },
  {
    name: "Vercel",
    icon: "/tech/vercel-light.svg",
    darkIcon: "/tech/vercel-dark.svg",
  },
  { name: "NPM", icon: "/tech/npm.svg" },
];

export const skillRows: {
  direction: "left" | "right";
  category: string;
  items: TechItem[];
}[] = [
  { direction: "left", category: "Backend", items: backendSkills },
  { direction: "right", category: "Frontend", items: frontendSkills },
  { direction: "left", category: "Tools & DevOps", items: toolsSkills },
];

export const projectTech = {
  react: { name: "React", icon: "/tech/react.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  vite: { name: "Vite", icon: "/tech/vite.svg" },
  motion: { name: "Framer Motion", icon: "/tech/motion.svg" },
  springboot: { name: "Spring Boot", icon: "/tech/springboot.svg" },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  redis: { name: "Redis", icon: "/tech/redis.svg" },
  jwt: {
    name: "JWT",
    icon: "/tech/jwt-light.svg",
    darkIcon: "/tech/jwt-dark.svg",
  },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
  nodejs: {
    name: "Node.js",
    icon: "/tech/nodejs-light.svg",
    darkIcon: "/tech/nodejs-dark.svg",
  },
  java: { name: "Java", icon: "/tech/java.svg" },
} as const;
