import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTheme = async (theme: 'light' | 'dark') => {
    try{
        await AsyncStorage.setItem('theme', theme);
    } catch (err) {
        console.error('Failed to save theme', err);
    }
};