import { useAppTheme } from '@/src/shared/theme/theme-context';

export function useSettingPage() {
    const { theme, toggleTheme } = useAppTheme();

    return {
        isDarkTheme: theme === 'dark',
        toggleTheme,
    };
}