import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../../entities/character/types';
import { getSingleCharacter } from '../../services/api/getSingleCharacter';

interface Props {
    characterId: string;
}

export default function useCharacterPage({ characterId }: Props) {
    const [character, setCharacter] = useState<Character | null>(null);
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
                    //fontFamily: 'WubbaLubba',
                    //fontFamily: 'Montserrat-Bold',
                    //fontSize: 10,
                });
        }
    }, [character]);

    const loadSingleCharacter = async (characterToLoad: string) => {

        if (loading) return;

        setLoading(true);
        try {
            const data = await getSingleCharacter(characterToLoad);
            setCharacter(data);

        } catch (err) {
            setError('Failed to load character');
        } finally {
            setLoading(false);
        }
    }


    return {
        character,
        loading,
        error,
    };
}
