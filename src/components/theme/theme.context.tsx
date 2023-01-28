import { createContext, useContext, useEffect, useState } from 'react';

const getInitialvalue = (): string => {
	if (typeof window !== undefined && localStorage) {
		const storedPref = localStorage.getItem('current-theme');
		if (typeof storedPref === 'string') {
			return storedPref;
		}
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}

	return 'dark';
};

const ThemeContext = createContext<{
	theme: string;
	themeToggleHandler: () => {};
}>({
	theme: '',
	themeToggleHandler: (): any => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState(getInitialvalue);

	const checkTheme = (existing: any) => {
		const root = window.document.documentElement;
		const isDark = existing === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(existing);

		localStorage.setItem('current-theme', existing);
	};

	const themeToggleHandler = (): any => {
		const isDark = window.document.documentElement.classList.contains('dark');
		setTheme(isDark ? 'light' : 'dark');
	};

	useEffect(() => {
		checkTheme(theme);
	}, [theme]);

	const value = {
		theme,
		themeToggleHandler,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
