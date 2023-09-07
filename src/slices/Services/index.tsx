import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="flex bg-white dark:bg-black items-center justify-between pt-10 md:pt-40 pb-10 md:pb-40 overflow-hidden w-screen"
		>
			<div className="container max-w-7xl mx-auto px-4">
				<PrismicRichText
					field={slice.primary.headline}
					components={{
						heading2: ({ children }) => (
							<h2 className="text-black dark:text-white items-center text-5xl md:text-6xl lg:text-7xl font-extrabold pt-10 pb-10 text-center">
								{children}
							</h2>
						),
					}}
				/>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-3">
					{slice.items.map(
						({ title, description, link, icon, link_text }, i) => (
							<article
								key={i}
								className="rounded-md bg-cyan dark:bg-white dark:text-black p-4 shadow-sm transition hover:shadow-lg sm:p-6"
							>
								<span className="flex justify-center">
									<PrismicNextImage field={icon} className="h-10 w-10" />
								</span>
								<div className="h-36 flex items-center align-middle">
									<PrismicRichText
										field={title}
										components={{
											heading3: ({ children }) => (
												<h3 className="text-black w-full text-3xl md:text-4xl lg:text-5xl font-extrabold pt-5 pb-5 text-center">
													{children}
												</h3>
											),
										}}
									/>
								</div>
								<PrismicRichText
									field={description}
									components={{
										paragraph: ({ children }) => (
											<p className="text-black text-base sm:text-lg">
												{children}
											</p>
										),
									}}
								/>
								<PrismicNextLink
									field={link}
									className="group mt-4 inline-flex items-center gap-1 text-sm font-medium"
								>
									{link_text}
									<span
										aria-hidden="true"
										className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
									>
										&rarr;
									</span>
								</PrismicNextLink>
							</article>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;
