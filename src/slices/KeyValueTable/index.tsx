import { Content } from "@prismicio/client";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { Container, Heading, Paragraph } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" variant="lg">
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
const KeyValueTable = ({ slice }: KeyValueTableProps): React.ReactElement => {
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
				<div key={i} className="grid grid-cols-[30%_70%] gap-10 w-full">
					<dt className="text-black dark:text-white font-extrabold capitalize flex justify-end">
						<PrismicRichText field={item.label} components={components} />
					</dt>
					<dd className="text-black dark:text-white flex justify-start flex-wrap text-left">
						<PrismicRichText field={item.value} components={components} />
					</dd>
				</div>
			))}
		</Container>
	);
};

export default KeyValueTable;
