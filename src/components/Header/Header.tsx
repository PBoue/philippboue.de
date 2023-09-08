import Link from "next/link";
import { createClient } from "@/prismicio";
import { Logo, MainMenu, ProgressBar } from "@/components";

export interface HeaderProps {}

export const Header = async () => {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<>
			<header className="h-20 fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-white/75 dark:bg-black border-black/25 dark:border-cyan shadow-sm flex items-center justify-between">
				<div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
					<Link href="/">
						<Logo />
					</Link>
					<MainMenu items={settings.data.navigation} />
				</div>
				<ProgressBar />
			</header>
		</>
	);
};
