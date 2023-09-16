import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";

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
		})
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
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="font-black">Client/Employer</TableHead>
						<TableHead className="font-black">Project Name</TableHead>
						<TableHead className="font-black">Industry</TableHead>
						<TableHead className="font-black">Country</TableHead>
						<TableHead className="font-black">Start</TableHead>
						<TableHead className="font-black">End</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((project, i) => (
						<TableRow key={i}>
							<TableCell>{project?.data.company_name}</TableCell>
							<TableCell>{project?.data.name}</TableCell>
							<TableCell>{project?.data.industry}</TableCell>
							<TableCell>{project?.data.country}</TableCell>
							<TableCell>
								{project?.data.startdate &&
									project?.data.startdate.substring(0, 4)}
							</TableCell>
							<TableCell>
								{project?.data.enddate && project?.data.enddate.substring(0, 4)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default ProjectsTable;
