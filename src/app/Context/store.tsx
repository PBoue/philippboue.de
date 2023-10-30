"use client";

import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";

import { ThemeProvider } from "next-themes";

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
		<ThemeProvider attribute="class" defaultTheme="light">
			<GlobalContext.Provider value={{ mainMenu, setMainMenu }}>
				{children}
			</GlobalContext.Provider>
		</ThemeProvider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
