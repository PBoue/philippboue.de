import { Content } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";
import { Container, Heading, Paragraph } from "@/components";

const components: JSXMapSerializer = {
	heading1: ({ children }) => (
		<Heading
			as="h1"
			variant="lg"
			className="mt-2 text-lg leading-8 text-gray-600"
		>
			{children}
		</Heading>
	),
	heading2: ({ children }) => (
		<Heading
			as="h2"
			variant="md"
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
const Textblock = ({ slice }: TextblockProps): React.ReactElement => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="mx-auto max-w-2xl text-left">
				<PrismicRichText
					field={slice.items[0].richtext}
					components={components}
				/>
			</div>
		</Container>
	);
};

export default Textblock;
