import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from '@/src/entities/character/types';
import {getCharacters} from "@/src/features/character/api/getCharacters";

export async function getOfflineCharacters() {
    try {
        const existing = await AsyncStorage.getItem('offlineCharacters');
        if (existing) return;

        let allCharacters: Character[] = [];
        const data = await getCharacters(1);

        allCharacters = [data.results];

        const sliced = allCharacters.slice(0, 20);

        await AsyncStorage.setItem('offlineCharacters', JSON.stringify(sliced));

    } catch (err) {
        console.error('Failed to fetch and store offline data', err);
    }
}