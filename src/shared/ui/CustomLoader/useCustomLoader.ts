import { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const useCustomLoader = () => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 600,
                useNativeDriver: false,
            }),
        ).start();
    }, []);

    const maskWidth = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, SCREEN_WIDTH],
    });

    return {
        maskWidth,
    };
};
