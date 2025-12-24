"use client";

import { motion } from "framer-motion";
import { Bot, Code, Layers, Layout, LucideIcon, Server, ShoppingCart } from "lucide-react";

import { Wave } from "@/components/ui/background-shapes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/lib/data";

// Icon mapping based on strings in DATA
const iconMap: Record<string, LucideIcon> = {
	Code: Code,
	Layout: Layout,
	Server: Server,
	ShoppingCart: ShoppingCart,
	Bot: Bot,
	Layers: Layers,
};

export function ServicesGrid() {
	return (
		<section className="relative py-20 md:py-32 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_70%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_50%)] overflow-hidden">
			<Wave className="opacity-[0.25] top-0" gradientColors={["rgba(59, 130, 246, 0.4)", "rgba(20, 184, 166, 0.3)"]} flip={true} />
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
					<div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-mono text-primary font-medium">What I Do</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Engineering Excellence</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">From pixel-perfect UIs to robust backend systems, I deliver comprehensive solutions.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{DATA.services.map((service, index) => {
						const Icon = iconMap[service.icon] || Code;
						return (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="h-full border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 group">
									<CardHeader>
										<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
											<Icon className="h-6 w-6" />
										</div>
										<CardTitle>{service.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground leading-relaxed">{service.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
