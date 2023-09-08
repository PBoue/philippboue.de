import { Content } from "@prismicio/client";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Container, Heading, Paragraph, Link } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="lg">
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading as="h3" size="md" color="black">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <Paragraph color="black">{children}</Paragraph>,
};

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.headline} components={components} />
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-3">
				{slice.items.map(({ title, description, link, icon, link_text }, i) => (
					<article
						key={i}
						className="rounded-md bg-cyan dark:bg-white dark:text-black p-4 shadow-sm transition hover:shadow-lg sm:p-6"
					>
						<div className="flex justify-center">
							<PrismicNextImage field={icon} className="h-10 w-10" />
						</div>
						<div className="h-36 flex items-center justify-center">
							<PrismicRichText field={title} components={components} />
						</div>
						<PrismicRichText field={description} components={components} />
						<Link field={link}>{link_text}</Link>
					</article>
				))}
			</div>
		</Container>
	);
};

export default Services;
