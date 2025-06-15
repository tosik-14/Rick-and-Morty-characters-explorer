import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import { styles } from './CharacterPage.styles';
import useCharacterPage from './useCharacterPage';
import {Character} from "../../entities/character/types";
import React from "react";

interface CharacterIdProps {
    characterId: string;
}

export default function CharacterPage({ characterId } : CharacterIdProps) {
    const {
        character,
        loading,
        error,
    } = useCharacterPage({characterId})

    const {
        backgroundColor,
        textColor
    } = useThemeColors();

    if (loading || !character) {
        return (
            <View style={[styles.container, {backgroundColor}]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, {backgroundColor}]}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={[styles.container, { backgroundColor }]}>
            <Image source={{ uri: character.image }} style={styles.avatar} />
            <Text style={[styles.name, { color: textColor }]}>{character.name}</Text>

            <View style={styles.infoBlock}>
                <Text style={[styles.label, { color: textColor }]}>Status:</Text>
                <Text style={[styles.value, { color: textColor }]}>{character.status}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={[styles.label, { color: textColor }]}>Species:</Text>
                <Text style={[styles.value, { color: textColor }]}>{character.species}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={[styles.label, { color: textColor }]}>Gender:</Text>
                <Text style={[styles.value, { color: textColor }]}>{character.gender}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={[styles.label, { color: textColor }]}>Origin:</Text>
                <Text style={[styles.value, { color: textColor }]}>{character.origin?.name}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={[styles.label, { color: textColor }]}>Last seen at:</Text>
                <Text style={[styles.value, { color: textColor }]}>{character.location?.name}</Text>
            </View>
        </ScrollView>
    );
}