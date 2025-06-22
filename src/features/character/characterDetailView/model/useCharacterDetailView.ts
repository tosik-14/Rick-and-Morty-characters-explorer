import {Alert} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Character} from '../../../../entities/character/types';
import {NamedLocationUrl} from "@/src/entities/location/NamedLocationModel/types";
import {LocationLabelEnum} from "@/src/entities/location/NamedLocationModel/LocationLabelEnum";
import {Episode} from '../../../../entities/episode/types';
import {getSingleCharacter} from '@/src/entities/character/api/getSingleCharacter';
import {getMultipleEpisodes} from '../../../episode/api/getMultipleEpisodes';
import {parseIdFromUrl} from "@/src/shared/lib/parseIdFromUrl";

interface Props {
    characterId: string;
}

export default function useCharacterDetailView({ characterId }: Props) {
    const [character, setCharacter] = useState<Character | null>(null);
    const [locationUrls, setLocationUrls] = useState<NamedLocationUrl[]>([]);
    const [episodeUrls, setEpisodeUrls] = useState([]);
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


            setLocationUrls(prev => {
               const updated = [...prev];

               const push = (url: string, label: LocationLabelEnum) => {
                   if(!updated.some(item => item.url === url && item.label === label)) updated.push({url, label});
               };

               if(data.origin?.url) push(data.origin.url, LocationLabelEnum.Origin);
               if(data.location?.url) push(data.location.url, LocationLabelEnum.LastSeen);

               return updated;
            });

            if (data.episode && data.episode.length > 0) {
                setEpisodeUrls(data.episode);
            }


        } catch (err: any) {
            setError('Failed to load character');
        } finally {
            setLoading(false);
        }
    }

    return {
        character,
        locationUrls,
        episodeUrls,
        loading,
        error,
    };
}
