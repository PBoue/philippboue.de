import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";

import { Container, Heading, Paragraph } from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" variant="lg">
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading as="h3" variant="md">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<Paragraph color="default">{children}</Paragraph>
	),
};

export type SkillsTableProps = SliceComponentProps<Content.SkillsTableSlice>;

const SkillsTable = async ({
	slice,
}: SkillsTableProps): Promise<JSX.Element> => {
	const client = createClient();

	const skills = await Promise.all(
		slice.items.map((item, i) => {
			if (
				isFilled.contentRelationship(item.skill_group) &&
				item.skill_group.uid
			) {
				return client.getByUID("skill_group", item.skill_group.uid);
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

			{skills.map((skill, i) => (
				<div key={i} className="">
					<PrismicRichText field={skill?.data.title} components={components} />
					<div className="mx-auto max-w-5xl text-left pb-10 grid grid-cols-2 gap-y-5 gap-x-20">
						{skill?.data.skills.map((item, x) => (
							<div key={x} className="flex flex-col">
								<div className="text-black dark:text-white w-full pb-5">
									{item.name} (since {item.start})
								</div>
								<div className="pb-5 w-full">
									<div
										className="relative overflow-hidden bg-black/10 dark:bg-white/20 rounded-full w-full h-3"
										style={{
											transform: "translateZ(0)",
										}}
									>
										{item.level && (
											<div
												className="bg-cyan w-full h-3 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
												style={{
													transform: `translateX(-${100 - item.level}%)`,
												}}
											/>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</Container>
	);
};

export default SkillsTable;
