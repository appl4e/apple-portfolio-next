"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillBubbles() {
	return (
		<section className="py-20">
			<div className="container px-4 md:px-6 text-center">
				<h2 className="text-2xl font-bold tracking-tighter mb-8 text-muted-foreground">Core Competencies</h2>
				<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
					{DATA.soft_skills.map((skill, index) => (
						<motion.div
							key={skill}
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary font-medium text-lg shadow-sm hover:scale-110 transition-transform cursor-default"
						>
							{skill}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
