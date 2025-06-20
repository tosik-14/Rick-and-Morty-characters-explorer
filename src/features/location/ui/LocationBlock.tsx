import { View, Text } from 'react-native';
import { useThemeColors } from '../../../shared/hooks/useThemeColor';
import { styles } from '../CharacterPage.styles';
import {globalStyles} from "../../../shared/styles/globalStyles";



export const LocationBlock = ({ title, name, locationData }) => {

    const {
        upBackgroundColor,
        darkenedUpBackground,
        textColor,
        metaTextColor,
        borderColor,
    } = useThemeColors();

    return (
        <View style={[styles.card, {backgroundColor: upBackgroundColor}]}>

            <View style={[styles.rowWrapper, styles.locationHeader, {gap: 10, backgroundColor: darkenedUpBackground}]}>

                <Text style={[globalStyles.fontB16, styles.label, {color: metaTextColor}]}>{title}</Text>
                <Text style={[globalStyles.fontR16, styles.value, {color: textColor}]}>{name || '-'}</Text>

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
                        <Text style={[globalStyles.fontR14, {color: textColor}]}>{locationData.type || '-'}</Text>

                    </View>


                    <View style={[styles.subBlock, {flex: 1, paddingLeft: 5}]}>

                        <Text style={[globalStyles.fontB14, {color: metaTextColor}]}>Dimension: </Text>
                        <Text style={[globalStyles.fontR14, {color: textColor}]}>{locationData.dimension || '-'}</Text>

                    </View>

                </View>
            )}
        </View>
    );

};
