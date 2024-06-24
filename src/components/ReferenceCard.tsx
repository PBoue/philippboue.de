"use client";

import { FC } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export interface ReferenceCardProps {
	index: number;
	companylogo: any;
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
			className="opacity-50 hover:opacity-100 dark:bg-white dark:text-black"
		>
			<CardBody className="h-[130px] w-full items-center justify-center">
				<PrismicNextImage
					field={companylogo}
					className="max-w-[120px] max-h-[90px]"
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
