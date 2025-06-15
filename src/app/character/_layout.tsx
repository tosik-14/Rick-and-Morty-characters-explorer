import { Stack } from "expo-router";
import { useThemeColors } from '../../shared/hooks/useThemeColor';

export default function CharacterLayout() {
    const {
        tint,
        tintBackground,
        tintBorderColor,
    } = useThemeColors();

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: tintBackground,

                },
                headerTintColor: tint,
                headerTitleAlign: 'center',
                title: '',
                headerTitleStyle: {
                    fontFamily: 'WubbaLubba',
                    fontSize: 30,
                    color: '#02B0C9',
                },
            }}
        />
    );
}