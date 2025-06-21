import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSettingPage } from '../../features/settingPage/model/useSettingPage';
import { styles } from './SettingPage.styles';
import {globalStyles} from "../../shared/styles/globalStyles";
import Icon from '../../shared/ui/Icon';
import CharacterCard from '../../features/character/ui/CharacterCard/ui/CharacterCard'
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import {CustomLoader} from "../../shared/ui/CustomLoader/CustomLoader";


export default function CharactersListScreen() {
    const {
        toggleTheme,
        isDarkTheme
    } = useSettingPage();

    const {
        backgroundColor,
        textColor
    } = useThemeColors();

    return (
        <View style={[styles.container, { backgroundColor }]}>

            {/*<CustomLoader  />*/}
            <Text style={[globalStyles.fontR16, styles.theme, { color: textColor }]}>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</Text>


            <TouchableOpacity style={styles.button} onPress={toggleTheme}>
                <Text style={[globalStyles.fontB20, { color: textColor }]}>Click Me :)</Text>
            </TouchableOpacity>

        </View>
    );
}