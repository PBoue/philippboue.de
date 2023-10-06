import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
	"text-base text-center py-5 leading-[1.4] font-body font-thin",
	{
		variants: {
			variant: {
				black: "text-black dark:text-black",
				white: "text-white dark:text-white",
				default: "text-black dark:text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface ParagraphProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraphVariants> {
	children: React.ReactNode;
}

function Paragraph({ className, variant, children, ...props }: ParagraphProps) {
	return (
		<p className={cn(paragraphVariants({ variant }), className)} {...props}>
			{children}
		</p>
	);
}

export { Paragraph, paragraphVariants };
