import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSettingPage } from '@/src/features/settingPage/model/useSettingPage';
import { styles } from '@/src/pages/SettingPage/SettingPage.styles';
import {globalStyles} from "@/src/shared/styles/globalStyles";
import { useThemeColors } from '@/src/shared/hooks/useThemeColor';


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

            <Text style={[globalStyles.fontR16, styles.theme, { color: textColor }]}>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</Text>


            <TouchableOpacity style={styles.button} onPress={toggleTheme}>
                <Text style={[globalStyles.fontB20, { color: textColor }]}>Click Me :)</Text>
            </TouchableOpacity>

        </View>
    );
}