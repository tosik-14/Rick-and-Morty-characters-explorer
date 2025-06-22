export async function getMultipleEpisodes(episodeIds: number[]) {
    const ids = episodeIds.join(",");
    const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/episode/${ids}`,
    );
    if (!response.ok) {
        throw new Error(`Error while loading episodes: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
