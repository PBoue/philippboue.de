"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { AnimationSequence } from "framer-motion";
import { motion, useAnimate, stagger } from "framer-motion";
import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useGlobalContext } from "@/context/store";
import { ThemeToggle } from "./ThemeToggle";

function useMenuAnimation(mainMenu: boolean) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const menuAnimations: AnimationSequence = mainMenu
			? [
					[
						"nav",
						{ x: 0, opacity: 1 },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
					],
					[
						"li",
						{ scale: 1, opacity: 1, filter: "blur(0px)" },
						{ delay: stagger(0.05), at: "-0.1" },
					],
				]
			: [
					[
						"li",
						{ scale: 0.5, opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					["nav", { x: "100%", opacity: 0 }, { at: "-0.1" }],
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

export interface MainMenuProps {
	items: Content.SettingsDocumentDataNavigationItem[];
}

export const MainMenu: FC<MainMenuProps> = ({ items }) => {
	const { mainMenu, setMainMenu } = useGlobalContext();
	const scope = useMenuAnimation(mainMenu);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const closeMenu = () => setMainMenu(false);

	return (
		<>
			{/* Overlay for click-outside to close - rendered via portal to escape header stacking context */}
			{mounted &&
				mainMenu &&
				createPortal(
					<div
						className="fixed inset-0 z-40 bg-black/20"
						onClick={closeMenu}
						aria-hidden="true"
					/>,
					document.body,
				)}
			<div ref={scope}>
				<button
					onClick={() => setMainMenu(!mainMenu)}
					className="relative z-50"
					aria-label={mainMenu ? "Close menu" : "Open menu"}
					aria-expanded={mainMenu}
				>
					<svg width="23" height="18" viewBox="0 0 23 18">
						<motion.path
							fill="transparent"
							strokeWidth="3"
							strokeLinecap="round"
							d="M 2 2.5 L 20 2.5"
							className="top stroke-black dark:stroke-white"
							variants={{
								closed: {
									d: "M 2 2.5 L 20 2.5",
								},
								open: {
									d: "M 3 16.5 L 17 2.5",
								},
							}}
						/>
						<motion.path
							fill="transparent"
							strokeWidth="3"
							strokeLinecap="round"
							className="middle stroke-black dark:stroke-white"
							opacity="1"
							d="M 2 9.423 L 20 9.423"
						/>
						<motion.path
							fill="transparent"
							strokeWidth="3"
							strokeLinecap="round"
							d="M 2 16.346 L 20 16.346"
							className="bottom stroke-black dark:stroke-white"
							variants={{
								closed: { d: "M 2 16.346 L 20 16.346" },
								open: { d: "M 3 2.5 L 17 16.346" },
							}}
						/>
					</svg>
				</button>
				<nav
					className="grid grid-flow-row content-between fixed top-0 right-0 bottom-0 w-3/4 md:w-2/4 h-screen z-40 bg-cyan/95 dark:bg-[#141728]/95 backdrop-blur-md pt-10 will-change-transform"
					style={{ transform: "translateX(100%)", opacity: 0 }}
				>
					<ul className="flex flex-col gap-5 p-5 list-none m-0">
						{items.map((item, i) => (
							<li
								key={i}
								className="block text-black dark:text-foreground font-bold text-3xl p-5 will-change-transform"
							>
								<PrismicNextLink field={item.link} onClick={closeMenu}>
									{item.label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
					<div className="ml-10 mb-10">
						<ThemeToggle onToggle={closeMenu} />
					</div>
				</nav>
			</div>
		</>
	);
};
