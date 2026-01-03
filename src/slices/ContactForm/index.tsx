import { Content } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";
import { Container, Heading, Paragraph } from "@/components";
import Contact from "@/components/ContactForm";

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
	paragraph: ({ children }) => (
		<Paragraph color="default">{children}</Paragraph>
	),
};

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm = ({ slice }: ContactFormProps): React.ReactElement => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.headline} components={components} />
			<div className="mx-auto max-w-2xl text-center">
				<PrismicRichText
					field={slice.primary.subline}
					components={components}
				/>
				<Contact />
			</div>
		</Container>
	);
};

export default ContactForm;
