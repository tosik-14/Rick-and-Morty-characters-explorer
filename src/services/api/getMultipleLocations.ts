export async function getMultipleLocations(locationIds: string) {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/location/${locationIds}`);

    if (!response.ok) {
        throw new Error(`Error while loading locations: ${response.status}`);
    }

    const data = await response.json();
    return data;
}