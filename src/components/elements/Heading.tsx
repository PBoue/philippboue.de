import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-center leading-[1.4] py-4 md:py-10", {
	variants: {
		variant: {
			sm: "text-2xl md:text-3xl lg:text-4xl font-bold",
			md: "text-3xl md:text-4xl lg:text-5xl font-extrabold",
			lg: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
			xl: "text-8xl md:text-10xl lg:text-12xl font-extrabold",
			default: "text-5xl md:text-6xl lg:text-7xl font-extrabold",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
}

function Heading({
	className,
	variant,
	as: Comp = "h2",
	children,
	...props
}: HeadingProps) {
	return (
		<Comp className={cn(headingVariants({ variant }), className)} {...props}>
			{children}
		</Comp>
	);
}

export { Heading, headingVariants };
