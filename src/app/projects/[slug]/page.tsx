import { projects } from "@/data/projects";
import ProjectDetailClient from "./client";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ProjectDetailClient slug={params.slug} />;
}
