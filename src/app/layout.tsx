import type { Metadata, Viewport } from "next";
import "./globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { createClient } from "@/prismicio";
import { Header, Footer } from "@/components";
import { GlobalContextProvider } from "@/context/store";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return {
		metadataBase: new URL("https://philippboue.de"),
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
		category: "technology",
	};
}

export function generateViewport(): Viewport {
	return {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		themeColor: [
			{ media: "(prefers-color-scheme: light)", color: "white" },
			{ media: "(prefers-color-scheme: dark)", color: "black" },
		],
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
					"min-h-screen bg-background text-foreground font-body flex flex-col",
				)}
			>
				<GlobalContextProvider>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</GlobalContextProvider>
			</body>
		</html>
	);
}
