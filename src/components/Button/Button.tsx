import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export function Button({ className, ...restProps }: PrismicNextLinkProps) {
	return (
		<PrismicNextLink
			className={clsx(
				"bg-cyan/75 text-black hover:bg-cyan active:scale-95 inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-cyan disabled:pointer-events-none dark:focus:ring-offset-cyan",
				className
			)}
			{...restProps}
		/>
	);
}
