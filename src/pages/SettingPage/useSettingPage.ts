import {useEffect} from 'react';
import { useAppTheme } from '@/src/shared/theme/theme-context';
import {saveTheme} from '../../services/storage/saveTheme';

export function useSettingPage() {
    const { theme, toggleTheme } = useAppTheme();

    useEffect(() => {
        const storeTheme = async () => {
            await saveTheme(theme);
        }
        storeTheme();
    }, [theme]);


    return {
        isDarkTheme: theme === 'dark',
        toggleTheme,
    };
}