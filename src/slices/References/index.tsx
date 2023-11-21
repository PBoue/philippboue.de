import { Content, isFilled } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Container, Heading, Paragraph, ReferenceCard } from "@/components";

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<Paragraph
			color="default"
			className={
				"text-center items-center max-w-5xl justify-center ml-auto mr-auto"
			}
		>
			{children}
		</Paragraph>
	),
};

export type ReferencesProps = SliceComponentProps<Content.ReferencesSlice>;

const References = async ({ slice }: ReferencesProps): Promise<JSX.Element> => {
	const client = createClient();

	const projects = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.project) && item.project.uid) {
				return client.getByUID("project", item.project.uid);
			}
		}),
	);

	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Heading as="h2" variant="lg">
				{slice.primary.headline}
			</Heading>
			<PrismicRichText field={slice.primary.excerpt} components={components} />
			<div className="gap-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
				{projects.map((project, i) => (
					<ReferenceCard
						key={i}
						index={i}
						companylogo={project?.data.companylogo}
						company_name={project?.data.company_name as string}
						industry={project?.data.industry as string}
					/>
				))}
			</div>
		</Container>
	);
};

export default References;
