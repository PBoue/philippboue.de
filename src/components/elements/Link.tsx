import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

const linkVariants = cva(
	"group inline-flex items-center gap-2 text-base sm:text-lg font-bold text-cyan hover:cursor-pointer",
	{
		variants: {
			variant: {
				default: "",
				button:
					"inline-flex max-w-fit items-center justify-center rounded-md text-md font-medium font-body transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-cyan text-black shadow hover:bg-cyan/90",
				secondary:
					"bg-black text-white shadow-sm hover:bg-black/60 dark:bg-white dark:text-black dark:hover:bg-white/60",
				destructive:
					"bg-black text-white shadow-sm hover:bg-black/60 dark:bg-magenta dark:text-black dark:hover:bg-white/60",
				outline:
					"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
				ghost:
					"text-black dark:text-white hover:bg-accent hover:text-accent-foreground",
				link: "text-base sm:text-lg font-bold text-cyan",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type LinkProps = VariantProps<typeof linkVariants> & PrismicNextLinkProps;

export function Link({
	variant = "default",
	size = "default",
	className,
	children,
	...restProps
}: LinkProps) {
	return (
		<PrismicNextLink
			className={cn(linkVariants({ variant, size, className }))}
			{...restProps}
		>
			{children}
			<span
				aria-hidden="true"
				className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
			>
				&rarr;
			</span>
		</PrismicNextLink>
	);
}
