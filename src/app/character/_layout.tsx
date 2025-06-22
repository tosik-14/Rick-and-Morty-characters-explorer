import { Stack } from "expo-router";
import { useThemeColors } from '@/src/shared/hooks/useThemeColor';

export default function CharacterLayout() {
    const {
        tint,
        tintBackground,
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