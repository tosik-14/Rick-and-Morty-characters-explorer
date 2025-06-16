import { API_URL } from '@env';

export async function getMultipleEpisodes(episodeIds: string) {
    const response = await fetch(`${API_URL}/episode/${episodeIds}`);
    if (!response.ok) {
        throw new Error(`Error while loading episodes: ${response.status}`);
    }

    const data = await response.json();
    return data;
}