import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
	text: string | React.ReactNode;
	className?: string;
	once?: boolean;
	delay?: number;
	byWord?: boolean;
};

const defaultAnimations = {
	hidden: {
		opacity: 0,
		y: 10,
		filter: "blur(3px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
	},
};

export const AnimatedText = ({
	text,
	className,
	once = true,
	delay = 0,
	byWord = true,
}: AnimatedTextProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once });

	if (typeof text === "string" && byWord) {
		const words = text.split(" ");
		return (
			<span ref={ref} className={className} aria-label={text}>
				<motion.span
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					transition={{ staggerChildren: 0.15, delayChildren: delay }}
					aria-hidden
				>
					{words.map((word, i) => (
						<span key={i} className="inline-block whitespace-pre">
							<motion.span
								variants={defaultAnimations}
								transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
								className="inline-block"
							>
								{word}
							</motion.span>
							{i !== words.length - 1 && " "}
						</span>
					))}
				</motion.span>
			</span>
		);
	}

	// Fallback for ReactNode or character-by-character
	const textStr = typeof text === "string" ? text : "";
	const characters = textStr ? textStr.split("") : [];

	return (
		<span ref={ref} className={className}>
			<motion.span
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				transition={{ staggerChildren: 0.05, delayChildren: delay }}
			>
				{textStr ? (
					characters.map((char, i) => (
						<motion.span
							key={i}
							variants={defaultAnimations}
							transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
							className="inline-block whitespace-pre"
						>
							{char}
						</motion.span>
					))
				) : (
					<motion.span
						variants={defaultAnimations}
						transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
						className="inline-block"
					>
						{text}
					</motion.span>
				)}
			</motion.span>
		</span>
	);
};
