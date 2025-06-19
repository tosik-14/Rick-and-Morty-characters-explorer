export async function getFilteredCharacters(page: number = 1, params: Record<string, string>) {
    const paramsString = new URLSearchParams(params).toString();

    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/character/?page=${page}&${paramsString}`);

    if(!response.ok){
        throw new Error(`Error loading character:, ${response.status}`);
    }

    const data = await response.json();
    return data;

}