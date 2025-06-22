import { Colors } from "@/src/shared/constants/Colors";
import { useColorScheme } from "@/src/shared/hooks/useColorScheme";

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
    const theme = useColorScheme() ?? "light";
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function useThemeColors() {
    return {
        backgroundColor: useThemeColor({}, "background"),
        upBackgroundColor: useThemeColor({}, "upBackground"),
        darkenedUpBackground: useThemeColor({}, "darkenedUpBackground"),
        borderColor: useThemeColor({}, "borderColor"),
        textColor: useThemeColor({}, "text"),
        metaTextColor: useThemeColor({}, "metaText"),
        tint: useThemeColor({}, "tint"),
        tintBackground: useThemeColor({}, "tintBackground"),
        tintBorderColor: useThemeColor({}, "tintBorderColor"),
        iconColor: useThemeColor({}, "icon"),
        unknownStatus: useThemeColor({}, "unknownStatus"),
        aliveStatus: useThemeColor({}, "aliveStatus"),
        deathStatus: useThemeColor({}, "deathStatus"),
    };
}
