"use client";

import { HexGrid } from "@/components/ui/background-shapes";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Activity,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Lightbulb,
  Palette,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

export function SkillsShowcase() {
  const techStackEntries = [
    { title: "Languages", items: DATA.tech_stack.languages, icon: Code2 },
    {
      title: "Frameworks & Libs",
      items: DATA.tech_stack.frameworks,
      icon: Layers,
    },
    {
      title: "CMS & WordPress",
      items: DATA.tech_stack.cms_specialties,
      icon: Globe,
    },
    {
      title: "UI & Styling",
      items: DATA.tech_stack.ui_libraries,
      icon: Palette,
    },
    {
      title: "Logic & Forms",
      items: DATA.tech_stack.state_management_forms,
      icon: Zap,
    },
    {
      title: "Visuals & Animation",
      items: DATA.tech_stack.visuals_charts,
      icon: Activity,
    },
    {
      title: "Backend & Data",
      items: DATA.tech_stack.backend_data,
      icon: Database,
    },
    { title: "Tools & DevOps", items: DATA.tech_stack.tools, icon: Wrench },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[radial-gradient(circle_at_center,rgba(98,14,255,0.01),transparent_90%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_95%)] overflow-hidden">
      <HexGrid className="opacity-[0.03]" />

      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono text-primary font-medium mb-4">
              Expertise & Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-serif">
              Mastering the <span className="text-primary">Digital Craft</span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 mx-auto">
              A comprehensive overview of my technical arsenal and interpersonal
              strengths, honed over a decade of high-stakes engineering.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Top Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <div className="flex items-center gap-3 mb-8">
							<div className="p-2 rounded-lg bg-primary/10 text-primary">
								<Cpu className="w-6 h-6" />
							</div>
							<h3 className="text-2xl font-bold font-serif">Technical Core</h3>
						</div> */}

            <Card className="border-none bg-white/4 backdrop-blur-xs shadow-xl shadow-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">
                    Technical Core
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {DATA.top_skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-md text-primary font-medium bg-background/50 hover:bg-primary hover:text-white transition-all duration-300 border-primary/10"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-8 mb-6">
                  <div className="p-2 rounded-lg  bg-primary/10 text-primary">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">
                    Human Engineering
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DATA.soft_skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="h-full border-primary/5 bg-background/40 backdrop-blur-sm hover:border-primary/20 transition-all group overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="p-6 flex items-center gap-4 relative z-10">
                          <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                          <span className="font-semibold text-lg">{skill}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-none bg-white/4 backdrop-blur-xs shadow-xl shadow-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg  bg-primary/10 text-primary">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">
                    Full Technical Stack
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {techStackEntries.map((category, idx) => (
                    <div key={category.title} className="space-y-4">
                      <div className="flex items-center gap-2 text-primary/80">
                        <category.icon className="w-4 h-4" />
                        <h5 className="text-xs font-bold uppercase tracking-wider">
                          {category.title}
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className="cursor-pointer text-[10px] font-mono font-medium text-foreground bg-muted/40 px-2 py-0.5 rounded border border-secondary/5 hover:bg-secondary/5 hover:text-secondary hover:border-secondary/10 transition-all"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-sm italic text-muted-foreground">
                "Technology is most powerful when amplified by effective
                communication and strategic leadership."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
