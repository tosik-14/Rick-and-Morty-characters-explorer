import { API_URL } from '@env';

export async function getMultipleLocations(locationIds: string) {
    //console.log("LOCATION IDS", locationIds);
    const response = await fetch(`${API_URL}/location/${locationIds}`);
    if (!response.ok) {
        throw new Error(`Error while loading locations: ${response.status}`);
    }

    const data = await response.json();
    //console.log("LOCATIONS DATA", data);
    return data;
}