"use client";

import { FloatingPill } from "@/components/ui/background-shapes";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { Quote } from "lucide-react";

export function TestimonialSlider() {
	return (
		<section className="relative py-20 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1),transparent_70%)] border-t border-border/50 overflow-hidden">
			<FloatingPill className="top-20 left-[10%]" color="rgba(244, 63, 94, 0.05)" delay={0} />
			<FloatingPill className="bottom-20 right-[10%]" color="rgba(244, 63, 94, 0.05)" delay={3} />
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 font-serif">Client Feedback</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{DATA.testimonials.map((t, i) => (
						<Card key={i} className="bg-white/5 border-white/10 hover:bg-rose-500/5 hover:border-rose-500/20 transition-all duration-500 group">
							<CardContent className="pt-6 relative">
								<Quote className="absolute top-6 left-6 h-8 w-8 text-primary/10 group-hover:text-rose-500/20 transition-colors" />
								<p className="relative z-10 text-muted-foreground italic mb-6 pl-8">"{t.text}"</p>
								<div className="flex items-center gap-3 pl-8">
									<div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
									<div>
										<p className="text-sm font-semibold">{t.name}</p>
										<p className="text-xs text-muted-foreground">{t.role}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
