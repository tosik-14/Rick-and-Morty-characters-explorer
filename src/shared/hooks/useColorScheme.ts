import { useAppTheme } from "@/src/app-providers/ThemeProvider/theme-context";

export function useColorScheme() {
    const { theme } = useAppTheme();
    return theme;
}
