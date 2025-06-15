import { API_URL } from '@env';

export async function getFilteredCharacters(page: number = 1, params: Record<string, string>) {
    const paramsString = new URLSearchParams(params).toString();
    console.log("PARAMS", paramsString);
    const response = await fetch(`${API_URL}/character/?${page}&${paramsString}`);

    if(!response.ok){
        throw new Error(`Error loading character:, ${response.status}`);
    }

    const data = await response.json();
    return data;

}