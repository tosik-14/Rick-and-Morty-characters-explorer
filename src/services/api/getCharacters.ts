import { API_URL } from '@env';

export async function getCharacters(page: number = 1) {
    const response = await fetch(`${API_URL}/character?page=${page}`);
    console.log("ALL GONE");
    if (!response.ok) {
        throw new Error(`Error while loading characters: ${response.status}`);
    }

    const data = await response.json();
    return data;
}