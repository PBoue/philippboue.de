import {
	Container,
	Heading,
	Badge,
	Paragraph,
	Link,
	Button,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components";
import type { Metadata } from "next";
import { Label } from "@/components/elements/Label";
import { Input } from "@/components/elements/Input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/elements/Select";
import { Slider } from "@/components/elements/Slider";
import { Switch } from "@/components/elements/Switch";
import { Checkbox } from "@/components/elements/Checkbox";
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "@/components/elements/Collapsible";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/elements/Table";

export const metadata: Metadata = {
	title: "Philipp Boué: Components Overview",
	description: "Philipp Boué Components Overview",
};

export default async function Page() {
	return (
		<Container>
			<div className="grid grid-flow-row justify-center items-center gap-y-10">
				<Heading as="h1" variant="xl">
					Heading 1
				</Heading>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Heading as="h2" variant="lg">
					Heading 2
				</Heading>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Heading as="h3" variant="md">
					Heading 3
				</Heading>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Heading as="h4" variant="sm">
					Heading 4
				</Heading>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Paragraph variant="default">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Paragraph>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex justify-center">
					<Link href="#">Link</Link>
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Button variant="default">Button [default]</Button>
				<Button variant="secondary">Button [secondary]</Button>
				<Button variant="destructive">Button [destructive]</Button>
				<Button variant="outline">Button [outline]</Button>
				<Button variant="ghost">Button [ghost]</Button>
				<Button variant="link">Button [link]</Button>

				<div className="flex w-full h-[1px] bg-black dark:bg-white shrink "></div>

				<Badge variant="default">Badge [default]</Badge>
				<Badge variant="secondary">Badge [secondary]</Badge>
				<Badge variant="destructive">Badge [destructive]</Badge>
				<Badge variant="outline">Badge [outline]</Badge>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex flex-row gap-x-5 items-center">
					<Label htmlFor="email">Label for Input</Label>
					<Input type="email" placeholder="Simple Input Element" />
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex flex-row gap-x-5 items-center">
					<Label htmlFor="select">Select Label</Label>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Theme" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">Option 1</SelectItem>
							<SelectItem value="2">Option 2</SelectItem>
							<SelectItem value="3">Option 3</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex flex-row gap-5 items-center">
					<Label htmlFor="slider">Slider Label Min</Label>
					<Slider defaultValue={[33]} max={100} step={1} />
					<Label htmlFor="slider">Slider Label Max</Label>
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex flex-row gap-5 items-center">
					<Label htmlFor="check">Checkbox Label</Label>
					<Checkbox />
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<div className="flex flex-row gap-5 items-center">
					<Label htmlFor="switch">Switch Label Off</Label>
					<Switch />
					<Label htmlFor="switch">Switch Label On</Label>
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Heading as="h2">Table</Heading>
				<Table>
					<TableCaption>A random table caption.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Col 1</TableHead>
							<TableHead>Col 2</TableHead>
							<TableHead>Col 3</TableHead>
							<TableHead className="text-right">Col 4</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">Row 1-1</TableCell>
							<TableCell>Row 1-2</TableCell>
							<TableCell>Row 1-3</TableCell>
							<TableCell className="text-right">Row 1-4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Row 2-1</TableCell>
							<TableCell>Row 2-2</TableCell>
							<TableCell>Row 2-3</TableCell>
							<TableCell className="text-right">Row 2-4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Row 3-1</TableCell>
							<TableCell>Row 3-2</TableCell>
							<TableCell>Row 3-3</TableCell>
							<TableCell className="text-right">Row 3-4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Row 4-1</TableCell>
							<TableCell>Row 4-2</TableCell>
							<TableCell>Row 4-3</TableCell>
							<TableCell className="text-right">Row 4-4</TableCell>
						</TableRow>
					</TableBody>
				</Table>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Heading as="h4" variant="sm">
					Key-Value-List
				</Heading>
				<div className="grid grid-cols-2 gap-x-10 gap-y-5 w-full">
					<dt className="text-black dark:text-white text-base font-extrabold capitalize text-right">
						Key 1
					</dt>
					<dd className="text-black dark:text-white font-thin text-base">
						Value 1
					</dd>
					<dt className="text-black dark:text-white text-base font-extrabold capitalize text-right">
						Key 2
					</dt>
					<dd className="text-black dark:text-white font-thin text-base">
						Value 2
					</dd>
					<dt className="text-black dark:text-white text-base font-extrabold capitalize text-right">
						Key 3
					</dt>
					<dd className="text-black dark:text-white font-thin text-base">
						Value 3
					</dd>
				</div>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Collapsible>
					<CollapsibleTrigger asChild>
						<div className="flex w-full flex-row justify-between">
							Toggle
							<Button variant="ghost" size="sm" className="w-9 p-0">
								<ChevronsUpDown className="h-4 w-4" />
							</Button>
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Paragraph>
					</CollapsibleContent>
				</Collapsible>

				<div className="flex w-full h-[1px] bg-black dark:bg-white"></div>

				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
			</div>
		</Container>
	);
}
