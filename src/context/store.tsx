"use client";

import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
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

export const GlobalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [mainMenu, setMainMenu] = useState(false);

	return (
		<NextUIProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem={false}
			>
				<GlobalContext.Provider value={{ mainMenu, setMainMenu }}>
					{children}
				</GlobalContext.Provider>
			</ThemeProvider>
		</NextUIProvider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
