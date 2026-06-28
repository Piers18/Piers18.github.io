import { projects } from "@/data/projects";
import ProjectDetailClient from "./client";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
