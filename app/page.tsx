import { HeroSection } from "@/components/sections/hero";
import { ProjectCarousel } from "@/components/sections/project-carousel";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { TestimonialSlider } from "@/components/sections/testimonials";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ServicesGrid />
			<SkillsShowcase />
			<ProjectCarousel />
			<TestimonialSlider />
		</>
	);
}
