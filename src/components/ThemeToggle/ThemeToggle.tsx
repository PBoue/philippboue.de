"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as Switch from "@radix-ui/react-switch";

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	function toggleTheme() {
		let swapTheme = "light";
		if (theme === "light") swapTheme = "dark";
		setTheme(swapTheme);
	}

	return (
		<li className="block text-black font-bold text-3xl p-5 will-change-transform">
			<form>
				<div className="flex items-center">
					<label className="text-black pr-10" htmlFor="dark-mode">
						Dark mode
					</label>
					<Switch.Root
						className=" w-20 h-10 bg-black/20 data-[state=checked]:bg-white relative rounded-3xl shadow-sm"
						id="dark-mode"
						onCheckedChange={() => toggleTheme()}
					>
						<Switch.Thumb className="block w-9 h-9 bg-black rounded-full shadow-xs translate-x-1 will-change-transform data-[state=checked]:translate-x-10 ease-in-out duration-500" />
					</Switch.Root>
				</div>
			</form>
		</li>
	);
};
