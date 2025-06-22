import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from '@/src/entities/character/types';

export async function loadOfflineCharacters(): Promise<Character[] | null> {
    try {

        const json = await AsyncStorage.getItem('offlineCharacters');

        if (!json) return null;
        return JSON.parse(json) as Character[];

    } catch (err) {
        console.error('Failed to load cached characters', err);
        return null;
    }
}