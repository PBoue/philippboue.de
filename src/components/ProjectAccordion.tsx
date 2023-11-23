"use client";

import React from "react";
import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Accordion, AccordionItem, Chip, Progress } from "@nextui-org/react";

interface ProjectAccordionProps {
	projects: [
		{
			data: {
				company_name: string;
				name: string;
				image: any;
			};
		},
	];
}

export const ProjectAccordion: FC<ProjectAccordionProps> = ({ projects }) => {
	return (
		<Accordion>
			{projects.map((project: any, i: number) => (
				<AccordionItem
					key={i}
					aria-label={project.data.name}
					startContent={
						<PrismicNextImage
							field={project.data.companylogo}
							className="w-12 h-auto mr-6"
						/>
					}
					title={project.data.company_name}
					subtitle={project.data.name}
				>
					<div className="flow-root my-6">
						<dl className="-my-3 divide-y divide-black/5 text-sm">
							{project.data.excerpt.length > 0 && (
								<div className="grid grid-cols-1 gap-1 p-4 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-black/75">Description</dt>
									<dd className="text-black sm:col-span-2">
										<PrismicRichText field={project.data.excerpt} />
									</dd>
								</div>
							)}

							{project.tags.length > 0 && (
								<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-black">Skills</dt>
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
								<dt className="font-medium text-black">Industry</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.industry}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Employer / Client</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.employer}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Role</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.role}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Tasks</dt>
								<dd className="text-black sm:col-span-2">
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
										value={project.data.management}
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
										value={project.data.design}
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
										value={project.data.code}
										showValueLabel={true}
									/>
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Country</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.country}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Dates</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.startdate.substring(0, 4) ===
									project.data.enddate.substring(0, 4)
										? project.data.startdate.substring(0, 4)
										: project.data.startdate.substring(0, 4) +
										  " - " +
										  project.data.enddate.substring(0, 4)}
								</dd>
							</div>
						</dl>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
};
