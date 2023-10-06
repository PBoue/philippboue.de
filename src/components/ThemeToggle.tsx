"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/elements/Switch";
import { Label } from "@/components/elements/Label";

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
			<Label htmlFor="dark-mode">Dark mode</Label>
			<Switch id="dark-mode" onCheckedChange={() => toggleTheme()} />
		</div>
	);
};
