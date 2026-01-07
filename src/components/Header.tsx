import Link from "next/link";
import { createClient } from "@/prismicio";
import { Logo, ProgressBar } from "@/components";
import { MainMenu } from "@/components/MainMenu";

export const Header = async () => {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<>
			<header className="h-20 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/75 border-foreground/25 shadow-sm flex items-center justify-between">
				<div className="container max-w-400 mx-auto w-full flex justify-between items-center px-4">
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
