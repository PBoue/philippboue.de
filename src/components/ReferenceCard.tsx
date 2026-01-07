"use client";

import type { FC } from "react";
import type { ImageField } from "@prismicio/client";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { InlineSVG } from "@/components/InlineSVG";

export interface ReferenceCardProps {
	index: number;
	companylogo: ImageField | null;
	company_name: string;
	industry: string;
	startdate: string;
	enddate: string;
}

export const ReferenceCard: FC<ReferenceCardProps> = ({
	index,
	companylogo,
	company_name,
	startdate,
	enddate,
}) => {
	return (
		<Card
			shadow="sm"
			radius="sm"
			key={index}
			className="opacity-50 hover:opacity-100 dark:bg-card-gradient dark:text-foreground transition-opacity"
		>
			<CardBody className="h-[130px] w-full items-center justify-center">
				<InlineSVG
					url={companylogo?.url}
					className="max-w-[120px] max-h-[90px] w-full h-full"
				/>
			</CardBody>
			<CardFooter>
				<p className="text-center w-full flex h-[30px] items-center justify-center text-xs">
					{startdate === enddate ? (
						<>{startdate}</>
					) : (
						<>
							{startdate} - {enddate}
						</>
					)}
				</p>
			</CardFooter>
		</Card>
	);
};
