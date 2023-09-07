"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useAnimate, stagger } from "framer-motion";
import * as Switch from "@radix-ui/react-switch";
import { UrlObject } from "url";

const Path = (props: any) => (
	<path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
);

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const menuAnimations = isOpen
			? [
					[
						"nav",
						{ transform: "translateX(0)" },
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
					["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
			  ];

		animate([
			[
				"path.top",
				{ d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
				{ at: "<" },
			],
			["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
			[
				"path.bottom",
				{ d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
				{ at: "<" },
			],
			...menuAnimations,
		]);
	}, [isOpen, animate]);

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
	const [isOpen, setIsOpen] = useState(false);
	const scope = useMenuAnimation(isOpen);
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		let swapTheme = "dark";
		if (theme === "dark") swapTheme = "light";
		setTheme(swapTheme);
	}

	console.log(items);

	return (
		<div ref={scope}>
			<button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
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
			<nav className="fixed top-0 right-0 bottom-0 w-2/4 h-screen z-40 bg-cyan pt-10 will-change-transform -translate-x-full">
				<ul className="flex flex-col gap-5 p-5 list-none m-0">
					{items.map((item, i) => (
						<li
							key={i}
							className="block text-black font-bold text-3xl p-5 will-change-transform"
						>
							<Link href={item.link.url} onClick={() => setIsOpen(!isOpen)}>
								{item.label}
							</Link>
						</li>
					))}
					<li className="block text-black font-bold text-3xl p-5 will-change-transform">
						<form>
							<div className="flex items-center">
								<label className="text-black pr-10" htmlFor="dark-mode">
									Dark mode
								</label>
								<Switch.Root
									className=" w-20 h-10 bg-black dark:bg-white data-[state=checked]:bg-green/25 relative rounded-3xl shadow-sm"
									id="dark-mode"
									onCheckedChange={() => toggleTheme()}
								>
									<Switch.Thumb className="block w-9 h-9 bg-black rounded-full shadow-xs translate-x-1 will-change-transform data-[state=checked]:translate-x-10 ease-in-out duration-500" />
								</Switch.Root>
							</div>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	);
};
