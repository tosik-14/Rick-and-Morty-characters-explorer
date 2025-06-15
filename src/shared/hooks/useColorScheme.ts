import { useAppTheme } from '../theme/theme-context';

export function useColorScheme() {
    const { theme } = useAppTheme();
    return theme;
}