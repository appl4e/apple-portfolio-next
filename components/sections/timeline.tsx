"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function Timeline() {
	return (
		<section className="relative py-20 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)] overflow-hidden">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter text-center mb-16 sm:text-4xl font-serif">Professional Journey</h2>

				<div className="relative max-w-3xl mx-auto">
					{/* Vertical Line */}
					<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 ml-4 md:ml-0" />

					<div className="space-y-12">
						{DATA.experience.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
							>
								{/* Timeline Dot */}
								<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10 ml-4 md:ml-0 mt-1" />

								{/* Content */}
								<div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
									<div
										className={`p-6 bg-white/5 border-white/10 backdrop-blur-md rounded-lg shadow-sm hover:bg-primary/5 hover:border-primary/20 transition-all group ${
											index % 2 === 0 ? "md:text-left" : "md:text-right"
										}`}
									>
										<span className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
											{item.year}
										</span>
										<h3 className="text-xl font-bold mt-1">{item.role}</h3>
										<h4 className="text-lg font-medium text-primary mb-4">{item.company}</h4>
										<p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
									</div>
								</div>

								{/* Empty Space for alternate side */}
								<div className="hidden md:block md:w-1/2" />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
