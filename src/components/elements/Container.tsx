import clsx from "clsx";

export type ContainerProps = {
	as?: React.ElementType;
	className?: string;
	children: React.ReactNode;
};

export function Container({
	as: Comp = "section",
	className,
	children,
	...restProps
}: ContainerProps) {
	return (
		<Comp
			className={clsx(
				"flex dark:bg-black items-center justify-between py-6 lg:py-12 overflow-hidden w-screen relative z-30",
				className,
			)}
			{...restProps}
		>
			<div className="container max-w-7xl mx-auto px-4">{children}</div>
		</Comp>
	);
}
