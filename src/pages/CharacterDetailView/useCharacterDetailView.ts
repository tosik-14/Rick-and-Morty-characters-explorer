import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../../entities/character/types';
import { Location } from '../../entities/location/types';
import { Episode } from '../../entities/episode/types';
import { getSingleCharacter } from '../../features/character/api/getSingleCharacter';
import { getMultipleLocations } from '../../features/location/api/getMultipleLocations';
import { getMultipleEpisodes } from '../../features/episode/api/getMultipleEpisodes';

interface Props {
    characterId: string;
}

export default function useCharacterPage({ characterId }: Props) {
    const [character, setCharacter] = useState<Character | null>(null);
    const [originLocation, setOriginLocation] = useState<Location | null>(null);
    const [lastSeenLocation, setLastSeenLocation] = useState<Location | null>(null);
    const [episodeDetails, setEpisodeDetails] = useState<Episode[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigation = useNavigation();

    useEffect(() => {
        loadSingleCharacter(characterId);
    }, []);

    useEffect(() => {
        if (character?.name) {
            navigation.setOptions(
                {
                    title: character.name,
                });
        }
    }, [character]);

    const loadSingleCharacter = async (characterToLoad: string) => {

        if (loading) return;

        setLoading(true);
        try {
            const data = await getSingleCharacter(characterToLoad);
            setCharacter(data);

            const extractId = (url: string) => url.split('/').filter(Boolean).pop();

            const locationIds = [];

            if (data.origin?.url) {
                const originId = extractId(data.origin.url);
                if (originId) locationIds.push(originId);
            }
            if (data.location?.url) {
                const locId = extractId(data.location.url);
                if (locId && !locationIds.includes(locId)) {
                    locationIds.push(locId);
                }
            }

            const locationsData = await getMultipleLocations(`${locationIds.join(',')}`);

            if (!locationsData) {
                setOriginLocation(null);
                setLastSeenLocation(null);
                return;
            }

            if (locationIds.length === 1) {
                if (data.origin?.url) {
                    setOriginLocation(locationsData);
                    setLastSeenLocation(null);
                } else {
                    setOriginLocation(null);
                    setLastSeenLocation(locationsData);
                }
            } else if (locationIds.length > 1) {

                const originLocation = Array.isArray(locationsData)
                    ? locationsData.find((loc: any) => loc.id.toString() === locationIds[0]) : locationsData;
                const lastSeenLocation = Array.isArray(locationsData)
                    ? locationsData.find((loc: any) => loc.id.toString() === locationIds[1]) : locationsData;

                setOriginLocation(originLocation);
                setLastSeenLocation(lastSeenLocation);

            } else {
                setOriginLocation(null);
                setLastSeenLocation(null);
            }

            if (data.episode && data.episode.length > 0) {
                const episodeIds = data.episode.map(extractId).filter(Boolean);

                if (episodeIds.length > 0) {
                    const episodesData = await getMultipleEpisodes(`${episodeIds.join(',')}`);

                    setEpisodeDetails(Array.isArray(episodesData) ? episodesData : [episodesData]);
                }
            } else {
                setEpisodeDetails([]);
            }

        } catch (err: any) {
            if (err.message === 'Network request failed') {
                Alert.alert(
                    'No Internet Connection',
                    'Please check your internet connection and try again.',
                    [{ text: 'Try again', onPress: () => {
                            setTimeout(() => {
                                loadSingleCharacter(characterToLoad);
                            }, 4000);
                        }
                    }]
                );
            } else {
                setError('Failed to load character');
            }
        } finally {
            setLoading(false);
        }
    }

    return {
        character,
        originLocation,
        lastSeenLocation,
        episodeDetails,
        loading,
        error,
    };
}
