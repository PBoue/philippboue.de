"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(Boolean);
	const { theme, setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		resolvedTheme === "light" ? setIsDark(false) : setIsDark(true);
		return () => {};
	}, [resolvedTheme]);

	function toggleTheme() {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
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
