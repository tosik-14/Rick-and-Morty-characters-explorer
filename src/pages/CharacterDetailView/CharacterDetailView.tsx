import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import { styles } from "@/src/pages/CharacterDetailView/CharacterDetailView.styles";
import { globalStyles } from "@/src/shared/styles/globalStyles";
import useCharacterDetailView from "@/src/features/character/characterDetailView/model/useCharacterDetailView";
import { LocationCard } from "@/src/features/location/ui/LocationCard";
import { EpisodeCard } from "@/src/features/episode/ui/EpisodeCard";
import Icon from "@/src/shared/ui/Icon";
import React, { useLayoutEffect } from "react";
import { CustomLoader } from "@/src/shared/ui/CustomLoader/CustomLoader";
import { CharacterDetails } from "@/src/features/character/characterDetailView/ui/CharacterDetails";

interface CharacterIdProps {
    characterId: number;
    navigation: any;
}

export default function CharacterDetailView({
    characterId,
    navigation,
}: CharacterIdProps) {
    const { character, locationUrls, episodeUrls, loading, error } =
        useCharacterDetailView({ characterId });

    const { backgroundColor, textColor, iconColor } = useThemeColors();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Icon name="backArrow" size={20} color={iconColor} />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation, iconColor]);

    if (loading || !character) {
        return (
            <View style={[styles.loadingContainer, { backgroundColor }]}>
                <CustomLoader />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, { backgroundColor }]}>
                <Text
                    style={[
                        globalStyles.fontR16,
                        styles.value,
                        { color: "red" },
                    ]}
                >
                    {error}
                </Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={[styles.container, { backgroundColor }]}
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CharacterDetails character={character} />

            <View style={styles.justLine} />

            <LocationCard locations={locationUrls} />

            <View style={styles.justLine} />

            <Text
                style={[
                    globalStyles.fontB18,
                    styles.label,
                    { color: textColor },
                ]}
            >
                Episodes:
            </Text>
            <EpisodeCard episodeUrls={episodeUrls} />
        </ScrollView>
    );
}
