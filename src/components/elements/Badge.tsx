import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"flex flex-nowrap max-w-fit basis-0 justify-center text-xs border-4 font-body font-light border rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-2 hover:cursor-pointer shadow-sm",
	{
		variants: {
			variant: {
				default:
					"border-black/40 bg-black/10 text-black/80 hover:bg-black/20 dark:border-white/40 dark:bg-white/10 dark:text-white/80 hover:bg-white/20",
				secondary:
					"border-cyan bg-cyan/50 text-black dark:text-white hover:bg-cyan/80",
				destructive:
					"border-black bg-black text-white dark:border-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80",
				outline:
					"bg-white border-black/80 text-black hover:bg-black/20 dark:bg-black dark:border-white/90 dark:text-white dark:hover:bg-white/20",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
