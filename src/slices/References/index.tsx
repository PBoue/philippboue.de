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
	Adidas,
	Actimonda,
	Alphaneun,
	Antena3,
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

const logos = {
	actimonda: <Actimonda />,
	adidas: <Adidas />,
	alphaneun: <Alphaneun />,
	antena3: <Antena3 />,
};

export type ReferencesProps = SliceComponentProps<Content.ReferencesSlice>;

/**
 * Component for "References" Slices.
 */
const References = async ({ slice }: ReferencesProps): Promise<JSX.Element> => {
	const client = createClient();

	const projects = await Promise.all(
		slice.items.map((item) => {
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
			<Heading as="h2" size="lg">
				{slice.primary.headline}
			</Heading>
			<PrismicRichText field={slice.primary.excerpt} components={components} />
			<div className="grid items-center gap-6 lg:grid-cols-4 grid-rows-auto pt-20">
				{projects.map((project, i) => (
					<div
						key={i}
						className="rounded-md bg-black/5 dark:bg-white/10 flex items-center content-center justify-center h-72 w-72"
					>
						{project?.data.logo && <>{logos[project?.data.logo]}</>}
					</div>
				))}
			</div>
		</Container>
	);
};

export default References;
