import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTheme = async () => {
    try{
        const storedTheme = await AsyncStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    } catch (err) {
        console.error('Failed to save theme', err);
    }

    return 'light';
};