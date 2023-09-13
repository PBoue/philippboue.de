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
				"flex bg-white dark:bg-black items-center justify-between pt-10 md:pt-20 pb-10 md:pb-20 overflow-hidden w-screen",
				className
			)}
			{...restProps}
		>
			<div className="container max-w-7xl mx-auto px-4">{children}</div>
		</Comp>
	);
}
