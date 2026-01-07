"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/elements/Switch";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { Label } from "@/components/elements/Label";

interface ThemeToggleProps {
	onToggle?: () => void;
}

export const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
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

	const handleToggle = (checked: boolean) => {
		setTheme(checked ? "dark" : "light");
		onToggle?.();
	};

	return (
		<div className="flex flex-row gap-3 items-center">
			<SunIcon
				className={`w-5 h-5 ${isDark ? "text-[#20263e]" : "text-foreground"}`}
			/>
			<Switch
				checked={isDark}
				onCheckedChange={handleToggle}
				aria-label="Toggle dark mode"
			/>
			<MoonIcon
				className={`w-5 h-5 ${isDark ? "text-foreground" : "text-[#20263e]"}`}
			/>
		</div>
	);
};
