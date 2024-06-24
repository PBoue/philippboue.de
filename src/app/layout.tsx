import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { createClient } from "@/prismicio";
import { Header, Footer } from "@/components";
import { GlobalContextProvider } from "./Context/store";

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
		metadataBase: new URL("https://acme.com"),
		alternates: {
			canonical: "/",
			languages: {
				"en-US": "/en-US",
				"de-DE": "/de-DE",
			},
		},
		title: settings.data.site_title || "PBO: Philipp Boué",
		description:
			settings.data.meta_description ||
			"PBO: Philipp Boué&apos;s introduction website featuring projects, vita and some more content.",
		openGraph: {
			title: "PBO|Philipp Boué Consulting",
			description: "Philipp Boué Consulting",
			images: [settings.data.og_image.url || ""],
			type: "website",
		},
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: "/icon.png",
			shortcut: "/shortcut-icon.png",
			apple: "/apple-icon.png",
			other: {
				rel: "apple-touch-icon",
				url: "/apple-touch-icon.png",
			},
		},
		themeColor: [
			{ media: "(prefers-color-scheme: light)", color: "white" },
			{ media: "(prefers-color-scheme: dark)", color: "black" },
		],
		viewport: {
			width: "device-width",
			initialScale: 1,
			maximumScale: 1,
		},
		category: "technology",
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="light" suppressHydrationWarning={true}>
			<body
				className={clsx(
					montserrat.variable,
					"min-h-screen bg-white dark:bg-black font-body",
				)}
			>
				<GlobalContextProvider>
					<Header />
					{children}
					<Footer />
				</GlobalContextProvider>
			</body>
		</html>
	);
}
