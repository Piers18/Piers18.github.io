"use client";

import { projects } from "@/data/projects";
import TechIcon from "@/components/helpers/TechIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 py-32">
        <p className="text-xl text-muted-foreground">Project not found</p>
        <Button asChild variant="outline">
          <Link href="/projects">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 sm:py-16">
      <Link
        href="/projects"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="rounded-xl overflow-hidden border border-border/80">
          <Image
            src={project.imgSrc}
            alt={project.name}
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="text-base font-light leading-7 text-muted-foreground sm:text-lg">
            {project.about}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-md border border-dashed px-2.5 py-1 text-sm bg-card"
            >
              <TechIcon item={tech} className="w-4 h-4" />
              {tech.name}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-light tracking-tight">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="text-sm font-light text-muted-foreground pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-muted-foreground/50"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 pt-4">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <Button size="lg">
              Live Demo
              <ExternalLink size={16} />
            </Button>
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg" className="bg-card border-dashed">
              Source Code
              <LuGithub size={16} />
            </Button>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
