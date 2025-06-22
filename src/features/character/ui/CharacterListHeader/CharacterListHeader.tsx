import React, {useLayoutEffect} from "react";
import {showSimpleAlert} from "@/src/shared/ui/showSimpleAlert/showSimpleAlert";
import { View, Text,  TouchableOpacity } from 'react-native';
import Icon from "@/src/shared/ui/Icon";
import {globalStyles} from "@/src/shared/styles/globalStyles";
import {checkInternetConnection} from "@/src/app-providers/CheckInternerProvider/utils/checkInetConnection";
import {AlertMessagesEnum} from "@/src/shared/ui/showSimpleAlert/constants/alertMessagesEnum";

export function CharacterListHeader({
                                           navigation,
                                           isConnected,
                                           iconColor,
                                           tint,
                                           setShowFilters,
                                           styles,
                                       }: {
    navigation: any;
    isConnected: boolean;
    iconColor: string;
    tint: string;
    setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
    styles: any;
}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={async () => {
                    const isInternet = await checkInternetConnection();
                    if (!isInternet) {
                        showSimpleAlert(AlertMessagesEnum.NoInternet);
                        return;
                    }
                    setShowFilters(prev => !prev)
                }}
                >
                    <View style={styles.headerFilterButton}>
                        <Icon name="filter" size={12} color={iconColor}></Icon>
                        <Text style={[globalStyles.fontR16, { color: tint }]}>Filter</Text>
                    </View>

                </TouchableOpacity>
            ),
            headerLeft: () => !isConnected ? (
                <View style={styles.headerNoInetAlert}>
                    <Icon name="noInet" size={12} color={iconColor}></Icon> {/*wtf???*/}
                    <Text style={[globalStyles.fontR16, { color: tint }]}>Offline</Text>
                </View>
            ) : null,
        });
    }, [navigation, tint, iconColor, isConnected]);
}