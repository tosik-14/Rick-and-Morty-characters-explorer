export async function getSingleCharacter(characterId) {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/character/${characterId}`);

    if(!response.ok){
        throw new Error(`Error loading character:, ${response.status}`);
    }

    const data = await response.json();
    return data;

}