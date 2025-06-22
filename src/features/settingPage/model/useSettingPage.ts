import { useEffect } from "react";
import { useAppTheme } from "@/src/app-providers/ThemeProvider/theme-context";
import { saveTheme } from "@/src/services/storage/saveTheme";

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
