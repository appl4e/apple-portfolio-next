"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export const Blob = ({
	className = "",
	color = "rgba(59, 130, 246, 0.2)",
	delay = 0,
	duration = 10,
}: {
	className?: string;
	color?: string;
	delay?: number;
	duration?: number;
}) => (
	<motion.div
		className={`absolute rounded-full blur-[100px] pointer-events-none -z-10 ${className}`}
		style={{ backgroundColor: color }}
		animate={{
			x: [0, 50, -30, 0],
			y: [0, -40, 60, 0],
			scale: [1, 1.1, 0.9, 1],
		}}
		transition={{
			duration,
			repeat: Infinity,
			delay,
			ease: "easeInOut",
		}}
	/>
);

export const HexGrid = ({ className = "" }: { className?: string }) => (
	<div
		className={`absolute inset-0 pointer-events-none opacity-[0.03] -z-10 ${className}`}
		style={{
			backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
			backgroundSize: "60px 60px",
		}}
	/>
);

export const Wave = ({
	className = "",
	color = "rgba(59, 130, 246, 0.05)",
	gradientColors,
	flip = false,
}: {
	className?: string;
	color?: string;
	gradientColors?: [string, string];
	flip?: boolean;
}) => {
	const id = useId();
	const gradientId = `wave-gradient-${id.replace(/:/g, "")}`;

	return (
		<div className={`absolute left-0 right-0 w-full pointer-events-none -z-10 ${className} ${flip ? "rotate-180" : ""}`}>
			<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
				{gradientColors && (
					<defs>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor={gradientColors[0]} />
							<stop offset="100%" stopColor={gradientColors[1]} />
						</linearGradient>
					</defs>
				)}
				<path
					fill={gradientColors ? `url(#${gradientId})` : color}
					fillOpacity="1"
					d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</div>
	);
};

export const FloatingPill = ({ className = "", color = "rgba(59, 130, 246, 0.1)", delay = 0 }: { className?: string; color?: string; delay?: number }) => (
	<motion.div
		className={`absolute rounded-full pointer-events-none -z-10 ${className}`}
		style={{ backgroundColor: color, width: "100px", height: "40px" }}
		animate={{
			y: [0, -20, 0],
			rotate: [0, 5, -5, 0],
		}}
		transition={{
			duration: 6,
			repeat: Infinity,
			delay,
			ease: "easeInOut",
		}}
	/>
);
