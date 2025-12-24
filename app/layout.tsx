import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/layout/page-transition";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Apple Mahmood | Senior Frontend Engineer & Architect",
		template: "%s | Apple Mahmood",
	},
	description: "Senior Frontend Engineer & Architect with 10+ years of experience specializing in React, Next.js, and scaling frontend systems.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("antialiased isolate", inter.variable, jetbrainsMono.variable, playfair.variable)}>
				<Header />
				<main className="pt-16 min-h-screen">
					<PageTransition>{children}</PageTransition>
				</main>
				<Footer />
			</body>
		</html>
	);
}
