import { View, Text } from 'react-native';
import { useThemeColors } from '@/src/shared/hooks/useThemeColor';
import { styles } from '@/src/features/location/ui/LocationCard.styles';
import {globalStyles} from "@/src/shared/styles/globalStyles";
import useLocationCard from "@/src/features/location/model/useLocationCard";
import {NamedLocationUrl} from "@/src/entities/location/NamedLocationModel/types";
import {LocationLabelEnum} from "@/src/entities/location/NamedLocationModel/LocationLabelEnum";

interface LocationCardProps{
    locations: NamedLocationUrl[];
}

export const LocationCard = ({locations}: LocationCardProps) => {

    const {
        originLocation,
        lastSeenLocation,
    } = useLocationCard(locations);



    const {
        upBackgroundColor,
        darkenedUpBackground,
        textColor,
        metaTextColor,
        borderColor,
    } = useThemeColors();

    const renderCard = (title: string, locationData: any) => {

        return (
            <View style={[styles.card, {backgroundColor: upBackgroundColor}]}>

                <View style={[styles.rowWrapper, styles.locationHeader, {gap: 10, backgroundColor: darkenedUpBackground}]}>

                    <Text style={[globalStyles.fontB16, styles.label, {color: metaTextColor}]}>{title}</Text>
                    <Text style={[globalStyles.fontR16, styles.value, {color: textColor}]}>{locationData.name || '-'}</Text>

                </View>

                {locationData && (
                    <View style={[styles.rowWrapper, styles.locationInfo]}>

                        <View style={[styles.subBlock, {
                            flex: 1,
                            paddingRight: 5,
                            borderRightWidth: 1,
                            borderRightColor: borderColor
                        }]}>

                            <Text style={[globalStyles.fontB14, {color: metaTextColor}]}>Type: </Text>
                            <Text style={[globalStyles.fontR14, styles.subBlockText, {color: textColor}]}>{locationData.type || '-'}</Text>

                        </View>


                        <View style={[styles.subBlock, {flex: 1, paddingLeft: 5}]}>

                            <Text style={[globalStyles.fontB14, {color: metaTextColor}]}>Dimension: </Text>
                            <Text style={[globalStyles.fontR14, styles.subBlockText, {color: textColor}]}>{locationData.dimension || '-'}</Text>

                        </View>

                    </View>
                )}
            </View>
        );
    }

    return (
        <>
            {originLocation && renderCard('Origin:', originLocation)}
            {lastSeenLocation && renderCard('Last seen at:', lastSeenLocation)}
        </>

    );

};
