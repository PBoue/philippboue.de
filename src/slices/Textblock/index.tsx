import { Content } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";
import { Container, Heading, Paragraph } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading
			as="h1"
			variant="lg"
			className="mt-2 text-lg leading-8 text-gray-600"
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<Paragraph color="default">{children}</Paragraph>
	),
};

export type TextblockProps = SliceComponentProps<Content.TextblockSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const Textblock = ({ slice }: TextblockProps): JSX.Element => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.title} components={components} />
			<div className="mx-auto max-w-2xl text-center">
				<PrismicRichText field={slice.primary.text} components={components} />
			</div>
		</Container>
	);
};

export default Textblock;
