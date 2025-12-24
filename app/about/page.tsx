import { BioSection } from "@/components/sections/about-bio";
import { CertGrid } from "@/components/sections/cert-grid";
import { SkillBubbles } from "@/components/sections/skill-bubbles";
import { Timeline } from "@/components/sections/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Apple Mahmood",
	description: "10+ Years of Engineering Leadership and Architecture.",
};

export default function AboutPage() {
	return (
		<>
			<div className="bg-muted/10 border-b border-border/50">
				<div className="container px-4 md:px-6 py-12 md:py-24 space-y-4">
					<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Engineering Leadership</h1>
					<p className="text-xl text-muted-foreground max-w-[800px]">Tracing my journey from Electrical Engineering to Architecting large-scale Web Applications.</p>
				</div>
			</div>

			<BioSection />
			<SkillBubbles />
			<Timeline />
			<CertGrid />
		</>
	);
}
