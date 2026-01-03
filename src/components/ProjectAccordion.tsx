"use client";

import type { FC } from "react";
import type { Content } from "@prismicio/client";
import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Heading, Paragraph } from "@/components";
import { Accordion, AccordionItem, Chip, Progress } from "@nextui-org/react";

export interface ProjectAccordionProps {
	projects: (Content.ProjectDocument | undefined)[];
}

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" variant="lg">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<Paragraph color="default" className="dark:text-white">
			{children}
		</Paragraph>
	),
};

export const ProjectAccordion: FC<ProjectAccordionProps> = ({ projects }) => {
	const validProjects = projects.filter(
		(project): project is Content.ProjectDocument => project !== undefined,
	);

	return (
		<Accordion>
			{validProjects.map((project, i) => (
				<AccordionItem
					key={project.id || i}
					aria-label={project.data.name ?? ""}
					startContent={
						<PrismicNextImage
							field={project.data.companylogo}
							className="w-12 h-auto mr-6 bg-white p-4 rounded"
						/>
					}
					title={project.data.company_name}
					subtitle={project.data.name}
				>
					<div className="flow-root my-6">
						<dl className="-my-3 divide-y divide-black/5 text-sm">
							{project.data.excerpt.length > 0 && (
								<div className="grid grid-cols-1 gap-1 p-4 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-black/75 dark:text-white">
										Description
									</dt>
									<dd className="text-black sm:col-span-2">
										<PrismicRichText
											field={project.data.excerpt}
											components={components}
										/>
									</dd>
								</div>
							)}

							{project.tags.length > 0 && (
								<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-black dark:text-white">
										Skills
									</dt>
									<dd className="sm:col-span-2">
										{project.tags.map((tag: string, index: number) => (
											<Chip
												key={index}
												className="bg-cyan mr-2 mb-2 border-none"
											>
												{tag}
											</Chip>
										))}
									</dd>
								</div>
							)}

							<div className="grid grid-cols-1 gap-1 p-4	 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black dark:text-white">
									Industry
								</dt>
								<dd className="text-black sm:col-span-2 dark:text-white">
									{project.data.industry}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black dark:text-white">
									Employer / Client
								</dt>
								<dd className="text-black sm:col-span-2 dark:text-white">
									{project.data.employer}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-blac dark:text-white">Role</dt>
								<dd className="text-black sm:col-span-2 dark:text-white">
									{project.data.role}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black dark:text-white">
									Tasks
								</dt>
								<dd className="text-black sm:col-span-2 dark:text-white">
									<Progress
										size="sm"
										radius="sm"
										classNames={{
											base: "max-w-full mb-6",
											track: "bg-black/30",
											indicator: "bg-gradient-to-r from-magenta to-cyan",
											label: "tracking-wider font-medium text-default-600",
											value: "text-foreground/60",
										}}
										label="Management"
										value={project.data.management ?? 0}
										showValueLabel={true}
									/>

									<Progress
										size="sm"
										radius="sm"
										classNames={{
											base: "max-w-full mb-6",
											track: "bg-black/30",
											indicator: "bg-gradient-to-r from-magenta to-cyan",
											label: "tracking-wider font-medium text-default-600",
											value: "text-foreground/60",
										}}
										label="Design"
										value={project.data.design ?? 0}
										showValueLabel={true}
									/>

									<Progress
										size="sm"
										radius="sm"
										classNames={{
											base: "max-w-full",
											track: "bg-black/30",
											indicator: "bg-gradient-to-r from-magenta to-cyan",
											label: "tracking-wider font-medium text-default-600",
											value: "text-foreground/60",
										}}
										label="Code"
										value={project.data.code ?? 0}
										showValueLabel={true}
									/>
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black dark:text-white">
									Country
								</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.country}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black dark:text-white">
									Dates
								</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.startdate?.substring(0, 4) ===
									project.data.enddate?.substring(0, 4)
										? project.data.startdate?.substring(0, 4)
										: (project.data.startdate?.substring(0, 4) ?? "") +
											" - " +
											(project.data.enddate?.substring(0, 4) ?? "")}
								</dd>
							</div>
						</dl>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
};
