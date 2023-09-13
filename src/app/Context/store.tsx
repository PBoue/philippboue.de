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

export const GlobalContextProvider = ({ children }) => {
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
