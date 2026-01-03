import { Content, isFilled } from "@prismicio/client";
import {
	PrismicRichText,
	JSXMapSerializer,
	SliceComponentProps,
} from "@prismicio/react";

import { createClient } from "@/prismicio";
import {
	Container,
	Heading,
	Paragraph,
	ReferenceCard,
	Link,
} from "@/components";

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

const References = async ({
	slice,
}: ReferencesProps): Promise<React.ReactElement> => {
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
			<div className="gap-6 grid grid-cols-2 m:grid-cols-4 lg:grid-cols-6">
				{projects.map((project, i) => {
					let startdate = "unknown",
						enddate = "unknown";
					if (project?.data.startdate)
						startdate = project.data.startdate.substring(0, 4);
					if (project?.data.enddate)
						enddate = project.data.enddate.substring(0, 4);
					return (
						<ReferenceCard
							key={i}
							index={i}
							companylogo={project?.data.companylogo ?? null}
							company_name={project?.data.company_name as string}
							industry={project?.data.industry as string}
							startdate={startdate as string}
							enddate={enddate as string}
						/>
					);
				})}
			</div>

			<div className="flex justify-center mt-12">
				<Link href="./projects" variant="ghost">
					View all
				</Link>
			</div>
		</Container>
	);
};

export default References;
