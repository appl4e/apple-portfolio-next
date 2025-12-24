"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Wave } from "@/components/ui/background-shapes";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { DATA } from "@/lib/data";

export function ProjectCarousel() {
  const topProjects = DATA.projects.slice(0, 3);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <Wave className="top-0 opacity-50" color="rgba(255, 165, 0, 0.05)" />
      <Wave
        className="bottom-0 opacity-50"
        color="rgba(255, 165, 0, 0.05)"
        flip
      />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Work
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              A selection of my recent frontend and architectural projects.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2 hidden md:flex">
            <Link href="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {topProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline" className="w-full gap-2">
            <Link href="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
