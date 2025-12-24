"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

const skills = [...DATA.top_skills, ...DATA.tech_stack.languages, ...DATA.tech_stack.frameworks, ...DATA.tech_stack.backend_data];
// Duplicate for seamless loop
const allSkills = [...skills, ...skills, ...skills];

export function TechTicker() {
	return (
		<div className="w-full overflow-hidden bg-muted/20 py-10 border-y border-border/50">
			<div className="container relative">
				<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
				<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

				<motion.div
					className="flex gap-16 w-max"
					animate={{ x: ["0%", "-50%"] }}
					transition={{
						repeat: Infinity,
						ease: "linear",
						duration: 40,
					}}
				>
					{allSkills.map((skill, i) => (
						<span
							key={`${skill}-${i}`}
							className="text-xl font-bold text-muted-foreground/30 uppercase tracking-widest whitespace-nowrap hover:text-primary/80 transition-colors cursor-default"
						>
							{skill}
						</span>
					))}
				</motion.div>
			</div>
		</div>
	);
}
