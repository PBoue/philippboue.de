import { Content } from "@prismicio/client";
import {
	SliceComponentProps,
	PrismicRichText,
	JSXMapSerializer,
} from "@prismicio/react";
import {
	Container,
	Heading,
	Paragraph,
	Link,
	CodeIcon,
	EditIcon,
	TargetIcon,
} from "@/components";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" variant="md">
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading as="h3" variant="md" color="black">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <Paragraph color="black">{children}</Paragraph>,
};

const icons = {
	target: <TargetIcon />,
	edit: <EditIcon />,
	code: <CodeIcon />,
};

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
	return (
		<Container
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicRichText field={slice.primary.headline} components={components} />
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-3">
				{slice.items.map((item, index) => (
					<article
						key={index}
						className="rounded-md bg-cyan dark:bg-white dark:text-black p-4 shadow-sm transition hover:shadow-lg sm:p-6"
					>
						<div className="flex justify-center">
							{item.icon && <>{icons[item.icon]}</>}
						</div>
						<div className="h-36 flex items-center max-w-[60%] justify-center mr-auto ml-auto">
							<PrismicRichText field={item.title} components={components} />
						</div>
						<PrismicRichText field={item.description} components={components} />
						<Link field={item.link}>{item.link_text}</Link>
					</article>
				))}
			</div>
		</Container>
	);
};

export default Services;
