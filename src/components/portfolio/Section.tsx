import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AnimatedText } from "./AnimatedText";

interface Props {
	id: string;
	eyebrow: string;
	title: string;
	description?: string;
	children: ReactNode;
}

export const Section = ({
	id,
	eyebrow,
	title,
	description,
	children,
}: Props | any) => (
	<section id={id} className="py-24 md:py-32 relative">
		<div className="container">
			<div className="max-w-xl mb-14">
				<AnimatedText
					text={eyebrow}
					className="block font-mono text-xs text-primary uppercase tracking-widest mb-3"
				/>
				<AnimatedText
					text={title}
					className="block text-3xl md:text-5xl font-bold tracking-tight mb-4"
					delay={0.1}
				/>
				{description && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
						className="text-muted-foreground text-lg leading-relaxed"
					>
						{description}
					</motion.p>
				)}
			</div>
			{children}
		</div>
	</section>
);
