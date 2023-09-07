import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { createClient } from "@/prismicio";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle("settings");

	return {
		title: page.data.site_title || "PBO: Philipp Boué",
		description:
			page.data.meta_description ||
			"PBO: Philipp Boué&apos;s introduction website featuring projects, vita and some more content.",
		openGraph: {
			images: [page.data.og_image.url || ""],
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={clsx(montserrat.variable)}>
			<body>{children}</body>
		</html>
	);
}
