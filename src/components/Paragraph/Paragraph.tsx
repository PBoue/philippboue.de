import clsx from "clsx";

type ParagraphProps = {
	size?: "sm" | "default";
	color?: "default" | "black" | "white";
	className?: string;
	children: React.ReactNode;
};

export function Paragraph({
	className,
	children,
	size = "default",
	color = "default",
}: ParagraphProps) {
	return (
		<p
			className={clsx(
				size === "default" && "text-base sm:text-lg",
				size === "sm" && "text-sm sm:text-base",
				color === "default" && "text-black dark:text-white",
				color === "black" && "text-black dark:text-black",
				color === "white" && "text-white dark:text-white",
				className
			)}
		>
			{children}
		</p>
	);
}
