"use client";

import { FC, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { UrlObject } from "url";
import { PrismicNextLink } from "@prismicio/next";
import { useGlobalContext } from "@/app/Context/store";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const Path = (props: any) => (
	<path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
);

function useMenuAnimation(mainMenu: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const menuAnimations = mainMenu
			? [
					[
						"nav",
						{ transform: "translateX(0)", opacity: 100 },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
					],
					[
						"li",
						{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
						{ delay: stagger(0.05), at: "-0.1" },
					],
			  ]
			: [
					[
						"li",
						{ transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					[
						"nav",
						{ transform: "translateX(100%)", opacity: 0 },
						{ at: "-0.1" },
					],
			  ];

		animate([
			[
				"path.top",
				{ d: mainMenu ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
				{ at: "<" },
			],
			["path.middle", { opacity: mainMenu ? 0 : 1 }, { at: "<" }],
			[
				"path.bottom",
				{ d: mainMenu ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
				{ at: "<" },
			],
			...menuAnimations,
		]);
	}, [mainMenu, animate]);

	return scope;
}

interface MainMenuProps {
	items: {
		label: String;
		link: {
			link_type: String;
			url: UrlObject;
		};
	}[];
}

export const MainMenu: FC<MainMenuProps> = ({ items }) => {
	const { mainMenu, setMainMenu } = useGlobalContext();
	const scope = useMenuAnimation(mainMenu);

	return (
		<div ref={scope}>
			<button onClick={() => setMainMenu(!mainMenu)} className="relative z-50">
				<svg width="23" height="18" viewBox="0 0 23 18">
					<Path
						d="M 2 2.5 L 20 2.5"
						className="top stroke-black dark:stroke-white"
						variants={{
							closed: { d: "M 2 2.5 L 20 2.5" },
							open: { d: "M 3 16.5 L 17 2.5" },
						}}
					/>
					<Path
						className="middle stroke-black dark:stroke-white"
						opacity="1"
						d="M 2 9.423 L 20 9.423"
					/>
					<Path
						d="M 2 16.346 L 20 16.346"
						className="bottom stroke-black dark:stroke-white"
						variants={{
							closed: { d: "M 2 16.346 L 20 16.346" },
							open: { d: "M 3 2.5 L 17 16.346" },
						}}
					/>
				</svg>
			</button>
			<nav className="fixed top-0 right-0 bottom-0 w-2/4 h-screen z-40 bg-cyan pt-10 will-change-transform -translate-x-full opacity-0">
				<ul className="flex flex-col gap-5 p-5 list-none m-0">
					{items.map((item, i) => (
						<li
							key={i}
							className="block text-black font-bold text-3xl p-5 will-change-transform"
						>
							<PrismicNextLink
								href={item.link.url}
								onClick={() => setMainMenu(!mainMenu)}
							>
								{item.label}
							</PrismicNextLink>
						</li>
					))}
					<ThemeToggle />
				</ul>
			</nav>
		</div>
	);
};
