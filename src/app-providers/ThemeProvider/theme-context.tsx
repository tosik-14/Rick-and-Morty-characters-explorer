import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { loadTheme } from "@/src/services/storage/loadTheme";
import { CustomLoader } from "@/src/shared/ui/CustomLoader/CustomLoader";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const colorScheme = Appearance.getColorScheme() ?? "light";
    const [theme, setTheme] = useState<ThemeType>(colorScheme);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadStoredTheme = async () => {
            try {
                const storedTheme = await loadTheme();
                setTheme(storedTheme);
            } catch (err) {
                console.error("Failed loading theme from storage", err);
            } finally {
                setIsLoaded(true);
            }
        };
        loadStoredTheme();
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    if (!isLoaded) return <CustomLoader />;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => useContext(ThemeContext);
