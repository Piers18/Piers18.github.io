"use client";

import ProjectCard from "@/components/ProjectCard";
import ComingSoonCard from "@/components/ComingSoonCard";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/helpers/FadeIn";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-light tracking-tight sm:text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
        <FadeIn delay={projects.length * 0.1}>
          <ComingSoonCard />
        </FadeIn>
      </div>
    </main>
  );
}
