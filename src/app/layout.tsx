import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { createClient } from "@/prismicio";
import { Header, Footer } from "@/components";

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
	const settings = await client.getSingle("settings");

	return {
		title: settings.data.site_title || "PBO: Philipp Boué",
		description:
			settings.data.meta_description ||
			"PBO: Philipp Boué&apos;s introduction website featuring projects, vita and some more content.",
		openGraph: {
			images: [settings.data.og_image.url || ""],
		},
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={clsx(
				montserrat.variable,
				"min-h-screen bg-white dark:bg-black"
			)}
		>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
