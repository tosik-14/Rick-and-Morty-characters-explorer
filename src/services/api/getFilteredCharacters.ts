import { API_URL } from '@env';

export async function getFilteredCharacters(page: number = 1, params: Record<string, string>) {
    const paramsString = new URLSearchParams(params).toString();
    console.log("PAGE AND PARAMS", page, paramsString);
    const response = await fetch(`${API_URL}/character/?page=${page}&${paramsString}`);

    if(!response.ok){
        throw new Error(`Error loading character:, ${response.status}`);
    }

    const data = await response.json();
    return data;

}