import { Content } from "@prismicio/client";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { Container, Heading, Paragraph } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="lg" color="default">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<Paragraph color="default">{children}</Paragraph>
	),
};

export type KeyValueTableProps =
	SliceComponentProps<Content.KeyValueTableSlice>;

/**
 * Component for "KeyValueTable" Slices.
 */
const KeyValueTable = ({ slice }: KeyValueTableProps): JSX.Element => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.headline} components={components} />
			{slice.primary.subline && (
				<div className="mx-auto max-w-5xl text-center pb-10">
					<PrismicRichText
						field={slice.primary.subline}
						components={components}
					/>
				</div>
			)}
			{slice.items.map((item, i) => (
				<div key={i} className="grid grid-cols-2 gap-10 w-full">
					<dt className="text-black dark:text-white text-base font-extrabold capitalize md:text-right pb-5 md:pb-14">
						<PrismicRichText field={item.label} components={components} />
					</dt>
					<dd className="text-black dark:text-white text-base">
						<PrismicRichText field={item.value} components={components} />
					</dd>
				</div>
			))}
		</Container>
	);
};

export default KeyValueTable;
