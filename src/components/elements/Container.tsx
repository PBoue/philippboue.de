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
				"flex bg-background items-center justify-between py-4 md:py-6 lg:py-12 overflow-hidden w-screen relative",
				className,
			)}
			{...restProps}
		>
			<div className="container max-w-400 mx-auto px-4">{children}</div>
		</Comp>
	);
}
