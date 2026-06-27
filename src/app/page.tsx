"use client";

import Hero from "@/components/Hero";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import Stats from "@/components/Stats";
import QuoteSection from "@/components/QuoteSection";
import { FadeIn } from "@/components/helpers/FadeIn";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-20 px-6 pb-6 sm:gap-20 sm:pb-20 overflow-hidden">
      <Hero />
      <FadeIn>
        <SkillSection />
      </FadeIn>
      <FadeIn>
        <ProjectSection />
      </FadeIn>
      <FadeIn>
        <ExperienceSection />
      </FadeIn>
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn>
        <QuoteSection />
      </FadeIn>
    </main>
  );
}
