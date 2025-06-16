import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import { styles } from './CharacterPage.styles';
import {globalStyles} from "../../shared/styles/globalStyles";
import useCharacterPage from './useCharacterPage';
import {LocationBlock} from './ui/LocationBlock';
import Icon from '../../shared/ui/Icon';
import React, {useLayoutEffect} from "react";
import {CustomLoader} from "../../shared/ui/CustomLoader/CustomLoader";

interface CharacterIdProps {
    characterId: string;
    navigation: any;
}

export default function CharacterPage({ characterId, navigation } : CharacterIdProps) {
    const {
        character,
        originLocation,
        lastSeenLocation,
        episodeDetails,
        loading,
        error,
    } = useCharacterPage({characterId})

    const {
        backgroundColor,
        upBackgroundColor,
        darkenedUpBackground,
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

                <View style={styles.mitaTitlesJustify}>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Status:</Text>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Gender:</Text>
                    <Text style={[globalStyles.fontB16, styles.label, { color: metaTextColor }]}>Species:</Text>
                </View>

                <View>
                    <View style={styles.statusRow}>
                        <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.status}{'  '}
                            <Icon name="status" size={10} color={
                                character.status === 'Alive' ? aliveStatus
                                    : character.status === 'Dead' ? deathStatus : unknownStatus
                                }
                            />
                        </Text>
                    </View>

                    <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.gender}</Text>
                    <Text style={[globalStyles.fontR16, styles.value, { color: textColor }]}>{character.species}</Text>
                </View>


            </View>

            <View style={styles.justLine} />


            <LocationBlock
                title="Origin:"
                name={character.origin?.name}
                locationData={originLocation}
            />

            <LocationBlock
                title="Last seen at:"
                name={character.location?.name}
                locationData={lastSeenLocation}
            />

            <View style={styles.justLine} />



                <Text style={[globalStyles.fontB18, styles.label, { color: textColor }]}>Episodes:</Text>
                {episodeDetails.length > 0 ? (
                    episodeDetails.map((ep, index) => (
                        <View key={ep.id} style={[styles.card, { backgroundColor: upBackgroundColor }]}>

                            <View style={[styles.rowWrapper, {alignItems: 'center'}]}>

                                <View style={[styles.episodeIndexWrapper, {backgroundColor: darkenedUpBackground }]}>
                                    <Text style={[globalStyles.fontB20, styles.episodeIndex, { color: metaTextColor }]}>{index + 1}</Text>
                                </View>

                                <View style={[styles.episodeInfo]}>
                                    <Text style={[globalStyles.fontB14, { color: textColor }]}>{ep.name}</Text>

                                    <Text style={[globalStyles.fontR14, { color: textColor }]}>{ep.episode} | {ep.air_date}</Text>
                                </View>
                            </View>


                        </View>
                    ))
                ) : (
                    <Text style={[styles.value, { color: textColor }]}>No episodes found</Text>
                )}

        </ScrollView>
    );
}