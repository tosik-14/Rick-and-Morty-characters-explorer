import { useEffect } from "react";
import { useAppTheme } from "@/src/app-providers/ThemeProvider/context/theme-context";
import { saveTheme } from "@/src/app-providers/ThemeProvider/storage/saveTheme";

export function useSettingPage() {
    const { theme, toggleTheme } = useAppTheme();

    useEffect(() => {
        const storeTheme = async () => {
            await saveTheme(theme);
        };
        storeTheme();
    }, [theme]);

    return {
        isDarkTheme: theme === "dark",
        toggleTheme,
    };
}
