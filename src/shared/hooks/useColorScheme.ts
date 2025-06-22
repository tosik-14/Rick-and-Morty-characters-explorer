import { useAppTheme } from "@/src/app-providers/ThemeProvider/context/theme-context";

export function useColorScheme() {
    const { theme } = useAppTheme();
    return theme;
}
