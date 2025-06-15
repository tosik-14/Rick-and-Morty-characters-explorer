import { API_URL } from '@env';

export async function getSingleCharacter(characterId) {
    const response = await fetch(`${API_URL}/character/${characterId}`);

    if(!response.ok){
        throw new Error(`Error loading character:, ${response.status}`);
    }

    const data = await response.json();
    return data;

}