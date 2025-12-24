"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Bike, Camera, CheckCircle, LucideIcon, Users } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
	Camera: Camera,
	CheckCircle: CheckCircle,
	Users: Users,
	Bike: Bike,
};

export function BioSection() {
	return (
		<section className="relative py-20 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.05),transparent_50%)] overflow-hidden">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-serif">About Me</h2>
						<div className="prose prose-zinc dark:prose-invert">
							<p className="text-lg text-muted-foreground leading-relaxed italic">{DATA.profile.bio}</p>
							<p className="text-muted-foreground leading-relaxed mt-4">
								My journey in web development has been driven by a passion for creating efficient, scalable, and user-centric solutions. From leading teams to architecting complex
								frontend systems, I thrive on solving difficult problems with modern technology.
							</p>
						</div>
					</motion.div>

					{/* Stats / Fun Facts */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="grid grid-cols-2 gap-4"
					>
						{DATA.fun_facts.map((fact, index) => {
							const Icon = iconMap[fact.icon || "CheckCircle"];
							return (
								<Card key={index} className="bg-white/5 border-white/10 hover:bg-primary/5 hover:border-primary/20 transition-all group backdrop-blur-md">
									<CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-2">
										<div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
											<Icon className="h-6 w-6" />
										</div>
										<h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{fact.value}</h3>
										<p className="text-xs font-semibold text-muted-foreground tracking-wider group-hover:text-muted-foreground/80 transition-colors">{fact.label}</p>
									</CardContent>
								</Card>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
