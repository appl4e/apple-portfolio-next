"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export function CertGrid() {
	return (
		<section className="py-20">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Education Column */}
					<div className="space-y-8">
						<div className="flex items-center gap-3 mb-8">
							<div className="p-2 bg-primary/10 rounded-lg text-primary">
								<GraduationCap className="h-6 w-6" />
							</div>
							<h2 className="text-2xl font-bold tracking-tight font-serif">Education</h2>
						</div>
						<div className="grid gap-4">
							{DATA.education.map((edu, i) => (
								<motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
									<Card className="hover:bg-primary/5 hover:border-primary/30 transition-all group">
										<CardContent className="p-6">
											<div className="flex justify-between items-start mb-2">
												<h3 className="font-bold text-lg group-hover:text-primary transition-colors">{edu.degree}</h3>
												<span className="text-xs font-mono bg-primary/5 text-primary px-2 py-1 rounded group-hover:bg-primary group-hover:text-white transition-all">
													{edu.year}
												</span>
											</div>
											<p className="text-primary font-medium mb-1">{edu.institution}</p>
											<p className="text-sm text-muted-foreground">{edu.result}</p>
											{edu.note && <p className="text-xs text-muted-foreground mt-2 italic">{edu.note}</p>}
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Certifications Column */}
					<div className="space-y-8">
						<div className="flex items-center gap-3 mb-8">
							<div className="p-2 bg-secondary/10 rounded-lg text-secondary">
								<Award className="h-6 w-6" />
							</div>
							<h2 className="text-2xl font-bold tracking-tight font-serif">Certifications</h2>
						</div>
						<div className="grid gap-4">
							{DATA.certifications.map((cert, i) => (
								<motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
									<Card className="hover:bg-secondary/10 hover:border-secondary/30 transition-all group">
										<CardContent className="p-6">
											<div className="flex justify-between items-start mb-2">
												<h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{cert.title}</h3>
												<span className="text-xs font-mono bg-secondary/10 text-secondary-foreground px-2 py-1 rounded group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
													{cert.year}
												</span>
											</div>
											<p className="text-muted-foreground">{cert.institution}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
