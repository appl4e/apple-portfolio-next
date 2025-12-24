"use client";

import { Blob } from "@/components/ui/background-shapes";
import { Button } from "@/components/ui/button";
import { DATA as PROJECT_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Particles from "../ui/particles";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-32 bg-[radial-gradient(circle_at_top_right,rgba(37,121,255,0.48),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(98,14,255,0.6),transparent_45%)]">
      {/* Particles Animation */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={1600}
        color="#0051d4ff"
      />

      {/* Background Shapes */}
      <Blob
        className="top-[-10%] left-[-10%] w-[500px] h-[500px]"
        color="rgba(82, 203, 255, 0.4)"
        delay={0}
      />
      <Blob
        className="bottom-[-10%] right-[-10%] w-[600px] h-[600px]"
        color="rgba(126, 179, 175, 0.5)"
        delay={2}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8 text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant}>
            <span className="rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary ring-1 ring-inset ring-secondary/20">
              Available for Hire
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUpVariant} className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif">
              Hi, I'm{" "}
              <span className="text-primary">{PROJECT_DATA.profile.name}</span>
            </h1>
            <h2 className="text-2xl font-bold text-muted-foreground sm:text-3xl font-mono">
              {PROJECT_DATA.profile.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {PROJECT_DATA.profile.tagline}.{" "}
              <br className="hidden md:inline" />
              Building high-performance, AI-augmented web experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col gap-4 min-[400px]:flex-row z-10"
          >
            <Button size="lg" asChild className="gap-2">
              <Link href="/projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a
                href={PROJECT_DATA.contact.resume_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Tech Stack Hints */}
          <motion.div
            variants={fadeUpVariant}
            className="pt-8 text-sm text-muted-foreground"
          >
            <p className="mb-4 font-medium uppercase tracking-wider text-xs">
              Trusted Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-4 opacity-75">
              {PROJECT_DATA.top_skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md bg-primary/20 text-primary border border-border text-xs font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
