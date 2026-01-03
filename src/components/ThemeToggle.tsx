"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/elements/Switch";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { Label } from "@/components/elements/Label";

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	// Avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const isDark = resolvedTheme === "dark";

	return (
		<div className="flex flex-row gap-3 items-center">
			<SunIcon className="w-5 h-5 text-black dark:text-white" />
			<Switch
				checked={isDark}
				onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
				aria-label="Toggle dark mode"
			/>
			<MoonIcon className="w-5 h-5 text-black dark:text-white" />
		</div>
	);
};
