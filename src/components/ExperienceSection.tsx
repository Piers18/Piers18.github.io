"use client";

import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full space-y-6">
      <div className="flex gap-3">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">
          Experience
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex flex-col gap-3 bg-card border border-dashed border-border/80 p-4 sm:p-5 rounded-xl w-full overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase
                  size={14}
                  className="text-muted-foreground sm:size-[16px]"
                />
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
                  {exp.period}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-wider">
                {exp.tech.split(" / ").slice(0, 3).join(" · ")}
              </span>
            </div>

            <div className="mt-1">
              <span className="text-lg font-light text-foreground sm:text-xl">
                {exp.role}
              </span>
              <span className="text-muted-foreground font-light">
                {" "}
                @ {exp.company}
              </span>
            </div>

            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              {exp.description}
            </p>

            <ul className="space-y-1.5 mt-1">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm font-light text-muted-foreground pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-muted-foreground/50 before:text-xs"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
