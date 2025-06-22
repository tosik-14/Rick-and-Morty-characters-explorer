import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Dimensions } from 'react-native';
import {useCustomLoader} from "@/src/shared/ui/CustomLoader/useCustomLoader";
import {styles} from '@/src/shared/ui/CustomLoader/CustomLoader.styles';
import {globalStyles} from "../../styles/globalStyles";

export const CustomLoader = () => {

    const {
        maskWidth,
    } = useCustomLoader();

    return (
        <View style={styles.container}>
            <Text style={[styles.baseText, globalStyles.fontRickAndMorty]}>Rick and Morty</Text>

            <Animated.View style={[styles.mask, { width: maskWidth }]}>
                <Text style={[styles.filledText, globalStyles.fontRickAndMorty]}>Rick and Morty</Text>
            </Animated.View>
        </View>
    );
};