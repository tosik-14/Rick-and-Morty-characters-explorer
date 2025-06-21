import { View, Text } from 'react-native';
import { useThemeColors } from '../../../shared/hooks/useThemeColor';
import { styles } from '@/src/features/episode/ui/EpisodeCard.styles';
import {globalStyles} from "../../../shared/styles/globalStyles";
import React from "react";
import useEpisodeCard from "@/src/features/episode/model/useEpisodeCard";

interface EpisodeCardProps {
    episodeUrls: string[];
}

export const EpisodeCard = ({ episodeUrls } : EpisodeCardProps) => {

    const {
        episodeDetails,
    } = useEpisodeCard({episodeUrls});

    const {
        upBackgroundColor,
        darkenedUpBackground,
        textColor,
        metaTextColor,
    } = useThemeColors();

    return (
        <>
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
        </>

    );

};
