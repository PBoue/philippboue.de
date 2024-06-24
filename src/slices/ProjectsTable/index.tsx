import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { Container, Heading, Paragraph } from "@/components";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { ProjectAccordion } from "@/components/ProjectAccordion";

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

export type ProjectsTableProps =
	SliceComponentProps<Content.ProjectsTableSlice>;

/**
 * Component for "ProjectsTable" Slices.
 */
const ProjectsTable = async ({
	slice,
}: ProjectsTableProps): Promise<JSX.Element> => {
	const client = createClient();

	const projects = await Promise.all(
		slice.items.map((item: any) => {
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
			<PrismicRichText field={slice.primary.headline} components={components} />
			<div className="mx-auto max-w-5xl text-center pb-10">
				<PrismicRichText
					field={slice.primary.subline}
					components={components}
				/>
			</div>

			{projects && <ProjectAccordion projects={projects as any} />}
		</Container>
	);
};

export default ProjectsTable;
