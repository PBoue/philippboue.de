import { Content } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";
import { Container, Heading, Paragraph, Link } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading
			as="h2"
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

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): React.ReactElement => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.heading} components={components} />
			<div className="mx-auto max-w-2xl text-center">
				<PrismicRichText
					field={slice.primary.subline}
					components={components}
				/>
				<Link variant="button" field={slice.primary.link}>
					{slice.primary.link_text}
				</Link>
			</div>
		</Container>
	);
};

export default CallToAction;
