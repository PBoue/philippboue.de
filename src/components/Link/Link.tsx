import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export function Link({
	className,
	children,
	...restProps
}: PrismicNextLinkProps) {
	return (
		<PrismicNextLink
			className={clsx(
				"group inline-flex items-center gap-2 text-base sm:text-lg font-bold text-cyan",
				className
			)}
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
