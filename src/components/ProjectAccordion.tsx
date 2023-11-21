"use client";

import React from "react";
import { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";

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

							<div className="grid grid-cols-1 gap-1 p-4	 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Industry</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.industry}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Employer</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.client[0].text}
								</dd>
							</div>

							<div className="grid grid-cols-1 gap-1 p-4 even:bg-black/5 sm:grid-cols-3 sm:gap-4">
								<dt className="font-medium text-black">Country</dt>
								<dd className="text-black sm:col-span-2">
									{project.data.country}
								</dd>
							</div>
						</dl>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
};
