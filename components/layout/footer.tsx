import { DATA } from "@/lib/data";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-border bg-muted/30">
			<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						Built by{" "}
						<a
							href={DATA.contact.socials[1].url} // Github
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							{DATA.profile.name}
						</a>
						. The source code is available on{" "}
						<a href={DATA.contact.socials[1].url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
							GitHub
						</a>
						.
					</p>
				</div>
				<div className="flex gap-4">
					{DATA.contact.socials.map((social) => (
						<Link
							key={social.platform}
							href={social.url}
							target="_blank"
							rel="noreferrer"
							className="text-sm font-medium underline-offset-4 hover:underline text-muted-foreground transition-colors hover:text-foreground"
						>
							{social.platform}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
