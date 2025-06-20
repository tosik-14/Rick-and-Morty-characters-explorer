import { View, Text, Image } from 'react-native';
import { styles } from './CharacterCard.styles';
import {globalStyles} from "../../../../shared/styles/globalStyles";
import useCharacterCard from "./useCharacterCard";
import {Character} from "../../../../entities/character/types";
import { useThemeColors } from '../../../../shared/hooks/useThemeColor';
import Icon from '../../../../shared/ui/Icon';

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {

    const {
        name,
        image,
        status,
        species,
        origin,
        location,
    } = useCharacterCard( {character} );

    const {
        upBackgroundColor,
        textColor,
        metaTextColor,
        unknownStatus,
        aliveStatus,
        deathStatus,
    } = useThemeColors();

    return (
        <View style={[styles.card, { backgroundColor: upBackgroundColor }]}>
            <View style={styles.rowWrapper}>
                <View style={styles.columnWrapper}>
                    <Image source={{ uri: image }} style={styles.avatar} />
                    <View style={styles.statusRow}>
                        <Icon style={styles.statusCircle} name="status" size={10} color={
                            character.status === 'Alive' ? aliveStatus
                                : character.status === 'Dead' ? deathStatus : unknownStatus
                        } />

                            <Text style={[globalStyles.fontR14, { color: textColor }]}>{status}</Text>
                    </View>
                </View>
                <View style={styles.info}>


                    <View style={styles.metaBlock}>
                        <Text style={[globalStyles.fontB12, styles.metaTitle, { color: metaTextColor, marginTop: 0 }]}>Species</Text>
                        <Text style={[globalStyles.fontR14, { color: textColor }]}>{species}</Text>

                        <Text style={[globalStyles.fontB12, styles.metaTitle, { color: metaTextColor }]}>Origin</Text>
                        <Text style={[globalStyles.fontR14, { color: textColor }]}>{origin.name}</Text>

                        <Text style={[globalStyles.fontB12, styles.metaTitle, { color: metaTextColor }]}>Last seen</Text>
                        <Text style={[globalStyles.fontR14, { color: textColor }]}>{location.name}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.justLine} />

            <Text style={[globalStyles.fontB18, styles.name, { color: textColor }]}>{name}</Text>
        </View>
    );
}