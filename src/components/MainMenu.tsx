"use client";

import type { FC } from "react";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import type { AnimationSequence } from "framer-motion";
import { motion, useAnimate, stagger } from "framer-motion";
import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useGlobalContext } from "@/context/store";
import { ThemeToggle } from "./ThemeToggle";

function useMenuAnimation(mainMenu: boolean) {
	const [scope, animate] = useAnimate();
	const isFirstRender = useRef(true);

	useEffect(() => {
		// Skip animation on first render to avoid undefined path errors
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

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
					[
						".theme-toggle",
						{ opacity: 1, y: 0 },
						{ duration: 0.3, ease: "easeOut" },
					],
				]
			: [
					[".theme-toggle", { opacity: 0, y: 10 }, { duration: 0.15, at: "<" }],
					[
						"li",
						{ scale: 0.5, opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					["nav", { x: "100%", opacity: 0 }, { at: "-0.1" }],
				];

		animate([...menuAnimations]);
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

	// Close menu on Escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && mainMenu) {
				setMainMenu(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [mainMenu, setMainMenu]);

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
							className="top stroke-black dark:stroke-white"
							initial={{ d: "M 2 2.5 L 20 2.5" }}
							animate={{
								d: mainMenu ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
							}}
							transition={{ duration: 0.2 }}
						/>
						<motion.path
							fill="transparent"
							strokeWidth="3"
							strokeLinecap="round"
							className="middle stroke-black dark:stroke-white"
							initial={{ opacity: 1 }}
							animate={{ opacity: mainMenu ? 0 : 1 }}
							d="M 2 9.423 L 20 9.423"
						/>
						<motion.path
							fill="transparent"
							strokeWidth="3"
							strokeLinecap="round"
							className="bottom stroke-black dark:stroke-white"
							initial={{ d: "M 2 16.346 L 20 16.346" }}
							animate={{
								d: mainMenu ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
							}}
							transition={{ duration: 0.2 }}
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
					<div
						className="theme-toggle mr-10 mb-10 flex justify-end"
						style={{ opacity: 0, transform: "translateY(10px)" }}
					>
						<ThemeToggle onToggle={closeMenu} />
					</div>
				</nav>
			</div>
		</>
	);
};
