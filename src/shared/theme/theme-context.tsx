import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const colorScheme = Appearance.getColorScheme() ?? 'light';
    const [theme, setTheme] = useState<ThemeType>(colorScheme);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => useContext(ThemeContext);
