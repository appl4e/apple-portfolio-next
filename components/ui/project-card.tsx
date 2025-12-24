"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/data";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] group">
        <div className="relative h-48 w-full overflow-hidden bg-muted/50">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              <span className="text-sm font-mono">Image coming soon</span>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          {/* If link exists, show button */}
          {project.link ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full gap-2 group"
            >
              <Link href={project.link} target="_blank">
                View Project
                <ArrowUpRight className="h-4 w-4 transition-transform  group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="w-full" disabled>
              Demo Not Available
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
