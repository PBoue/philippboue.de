import { Content } from "@prismicio/client";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";

import {
	Container,
	Heading,
	Paragraph,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="lg">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<Paragraph color="default">{children}</Paragraph>
	),
};

/**
 * Props for `Tables`.
 */
export type TablesProps = SliceComponentProps<Content.TablesSlice>;

/**
 * Component for "Tables" Slices.
 */
const Tables = ({ slice }: TablesProps): JSX.Element => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.headline} components={components} />
			<div className="mx-auto max-w-5xl text-center pb-10">
				<PrismicRichText
					field={slice.primary.subline}
					components={components}
				/>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>
							<PrismicRichText
								field={slice.primary.column_header_1}
								components={components}
							/>
						</TableHead>
						{slice.primary.column_header_2 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_2}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_3 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_3}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_4 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_4}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_5 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_5}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_6 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_6}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_7 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_7}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_8 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_8}
									components={components}
								/>
							</TableHead>
						)}
						{slice.primary.column_header_9 && (
							<TableHead>
								<PrismicRichText
									field={slice.primary.column_header_9}
									components={components}
								/>
							</TableHead>
						)}
					</TableRow>
				</TableHeader>
				<TableBody>
					{slice.items.map((item, i) => (
						<TableRow key={i}>
							<TableCell>
								<PrismicRichText
									field={item.column_1}
									components={components}
								/>
							</TableCell>
							{item.column_2 && (
								<TableCell>
									<PrismicRichText
										field={item.column_2}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_3 && (
								<TableCell>
									<PrismicRichText
										field={item.column_3}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_4 && (
								<TableCell>
									<PrismicRichText
										field={item.column_4}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_5 && (
								<TableCell>
									<PrismicRichText
										field={item.column_5}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_6 && (
								<TableCell>
									<PrismicRichText
										field={item.column_6}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_7 && (
								<TableCell>
									<PrismicRichText
										field={item.column_7}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_8 && (
								<TableCell>
									<PrismicRichText
										field={item.column_8}
										components={components}
									/>
								</TableCell>
							)}
							{item.column_9 && (
								<TableCell>
									<PrismicRichText
										field={item.column_9}
										components={components}
									/>
								</TableCell>
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default Tables;
