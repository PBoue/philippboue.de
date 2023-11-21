"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Label } from "@/components/elements/Label";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

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
		<div className="flex flex-row gap-5 items-center self-end">
			<Switch
				defaultSelected
				onValueChange={toggleTheme}
				size="lg"
				color="default"
				startContent={<SunIcon />}
				endContent={<MoonIcon />}
			>
				Dark mode
			</Switch>
		</div>
	);
};
