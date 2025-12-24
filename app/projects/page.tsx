import { ProjectCard } from "@/components/ui/project-card";
import { DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Apple Mahmood",
	description: "Portfolio of web applications, architectural designs, and engineering projects.",
};

export default function ProjectsPage() {
	return (
		<div className="container px-4 md:px-6 py-12 md:py-24 animate-in fade-in duration-500">
			<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
				<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Selected Works</h1>
				<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">A collection of projects spanning frontend architecture, mobile apps, and full-stack solutions.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{DATA.projects.map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</div>
		</div>
	);
}
