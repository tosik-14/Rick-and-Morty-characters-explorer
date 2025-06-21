import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import { styles } from './CharacterDetailView.styles';
import {globalStyles} from "../../shared/styles/globalStyles";
import useCharacterDetailView from '../../features/character/characterDetailView/model/useCharacterDetailView';
import {LocationCard} from '../../features/location/ui/LocationCard';
import {EpisodeCard} from "@/src/features/episode/ui/EpisodeCard";
import Icon from '../../shared/ui/Icon';
import React, {useLayoutEffect} from "react";
import {CustomLoader} from "../../shared/ui/CustomLoader/CustomLoader";

interface CharacterIdProps {
    characterId: string;
    navigation: any;
}

export default function CharacterDetailView({ characterId, navigation } : CharacterIdProps) {
    const {
        character,
        locationUrls,
        episodeUrls,
        loading,
        error,
    } = useCharacterDetailView({characterId})

    const {
        backgroundColor,
        textColor,
        metaTextColor,
        unknownStatus,
        aliveStatus,
        deathStatus,
        iconColor,
    } = useThemeColors();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="backArrow" size={20} color={iconColor} />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation, iconColor]);

    if (loading || !character) {
        return (
            <View style={[styles.loadingContainer, {backgroundColor}]}>
                <CustomLoader />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, {backgroundColor}]}>
                <Text style={[globalStyles.fontR16, styles.value, { color: 'red' }]}>{error}</Text>
            </View>
        );
    }



    return (
        <ScrollView
            style={[styles.container, { backgroundColor }]}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image source={{ uri: character.image }} style={styles.avatar} />

            <Text style={[globalStyles.fontB20, styles.name, { color: textColor }]}>{character.name}</Text>

            <View style={styles.justLine} />

            <View style={styles.infoBlock}>

                <View style={styles.metaTitlesJustify}>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Status:</Text>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Gender:</Text>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Species:</Text>
                </View>

                <View style={styles.characterInfo}>
                    <View style={styles.statusRow}>
                        <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.status}{'  '}</Text>
                        <Icon name="status" size={10} color={
                            character.status === 'Alive' ? aliveStatus
                                : character.status === 'Dead' ? deathStatus : unknownStatus
                        }
                              style={styles.statusCircle}
                        />
                    </View>

                    <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.gender}</Text>
                    <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.species}</Text>
                </View>

            </View>


            <View style={styles.justLine} />

            <LocationCard
                locations={locationUrls}
            />

            <View style={styles.justLine} />

            <Text style={[globalStyles.fontB18, styles.label, { color: textColor }]}>Episodes:</Text>
            <EpisodeCard episodeUrls={episodeUrls} />

        </ScrollView>
    );
}