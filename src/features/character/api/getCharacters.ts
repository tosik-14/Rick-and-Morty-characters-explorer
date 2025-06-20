export async function getCharacters(page: number = 1) {
    console.log(process.env.EXPO_PUBLIC_API_URL);
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/character?page=${page}`);

    if (!response.ok) {
        throw new Error(`Error while loading characters: ${response.status}`);
    }

    const data = await response.json();
    return data;
}