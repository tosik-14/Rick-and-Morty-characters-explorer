import { useAppTheme } from '../../app-providers/ThemeProvider/theme-context';

export function useColorScheme() {
    const { theme } = useAppTheme();
    return theme;
}