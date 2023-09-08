import clsx from "clsx";

type HeadingProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "sm" | "md" | "lg" | "xl";
	color?: "default" | "black" | "white";
	className?: string;
	children: React.ReactNode;
};

export function Heading({
	as: Comp = "h2",
	className,
	children,
	size = "lg",
	color = "default",
}: HeadingProps) {
	return (
		<Comp
			className={clsx(
				"text-center py-10",
				size === "sm" && "text-2xl md:text-3xl lg:text-4xl font-bold",
				size === "md" && "text-3xl md:text-4xl lg:text-5xl font-extrabold",
				size === "lg" && "text-5xl md:text-6xl lg:text-7xl font-extrabold",
				size === "xl" && "text-8xl md:text-10xl lg:text-12xl font-extrabold",
				color === "default" && "text-black dark:text-white",
				color === "black" && "text-black dark:text-black",
				color === "white" && "text-white dark:text-white",
				className
			)}
		>
			{children}
		</Comp>
	);
}
