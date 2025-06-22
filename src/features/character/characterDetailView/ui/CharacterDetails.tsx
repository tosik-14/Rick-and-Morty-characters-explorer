import { View, Text, Image } from "react-native";
import { styles } from "@/src/features/character/characterDetailView/ui/CharacterDetails.styles";
import { globalStyles } from "@/src/shared/styles/globalStyles";
import Icon from "@/src/shared/ui/Icon";
import React from "react";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import { characterStatusEnum } from "@/src/entities/character/characterStatusEnum";
import { CharacterDetailsModel } from "@/src/features/character/characterDetailsModel/types";

type CharacterDetailsProps = {
    character: CharacterDetailsModel;
};

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
    const {
        textColor,
        metaTextColor,
        unknownStatus,
        aliveStatus,
        deathStatus,
    } = useThemeColors();

    return (
        <>
            <Image source={{ uri: character.image }} style={styles.avatar} />

            <Text
                style={[
                    globalStyles.fontB20,
                    styles.name,
                    { color: textColor },
                ]}
            >
                {character.name}
            </Text>

            <View style={styles.justLine} />

            <View style={styles.infoBlock}>
                <View style={styles.metaTitlesJustify}>
                    <Text
                        style={[
                            globalStyles.fontB16,
                            styles.label,
                            { color: metaTextColor },
                        ]}
                    >
                        Status:
                    </Text>
                    <Text
                        style={[
                            globalStyles.fontB16,
                            styles.label,
                            { color: metaTextColor },
                        ]}
                    >
                        Gender:
                    </Text>
                    <Text
                        style={[
                            globalStyles.fontB16,
                            styles.label,
                            { color: metaTextColor },
                        ]}
                    >
                        Species:
                    </Text>
                </View>

                <View style={styles.characterInfo}>
                    <View style={styles.statusRow}>
                        <Text
                            style={[
                                globalStyles.fontR16,
                                styles.value,
                                { color: textColor },
                            ]}
                        >
                            {character.status}
                            {"  "}
                        </Text>
                        <Icon
                            name="status"
                            size={10}
                            color={
                                character.status === characterStatusEnum.Alive
                                    ? aliveStatus
                                    : character.status ===
                                        characterStatusEnum.Dead
                                      ? deathStatus
                                      : unknownStatus
                            }
                            style={styles.statusCircle}
                        />
                    </View>

                    <Text
                        style={[
                            globalStyles.fontR16,
                            styles.value,
                            { color: textColor },
                        ]}
                    >
                        {character.gender}
                    </Text>
                    <Text
                        style={[
                            globalStyles.fontR16,
                            styles.value,
                            { color: textColor },
                        ]}
                    >
                        {character.species}
                    </Text>
                </View>
            </View>
        </>
    );
};
