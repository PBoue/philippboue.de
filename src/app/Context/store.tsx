"use client";

import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

interface ContextProps {
	mainMenu: boolean;
	setMainMenu: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
	mainMenu: false,
	setMainMenu: (): boolean => false,
});

import { ReactNode } from "react";

export const GlobalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [mainMenu, setMainMenu] = useState(false);

	return (
		<NextUIProvider>
			<ThemeProvider attribute="class" defaultTheme="light">
				<GlobalContext.Provider value={{ mainMenu, setMainMenu }}>
					{children}
				</GlobalContext.Provider>
			</ThemeProvider>
		</NextUIProvider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
