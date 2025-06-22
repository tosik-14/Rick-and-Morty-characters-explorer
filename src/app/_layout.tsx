import { Stack } from 'expo-router';
import { useCachedResources } from '@/src/shared/hooks/resources/useCachedResources';
import { View, ActivityIndicator } from 'react-native';
import { useThemeColors } from '@/src/shared/hooks/useThemeColor';
import { ThemeProvider } from '@/src/app-providers/ThemeProvider/theme-context';
import {CheckInternetProvider} from "@/src/app-providers/CheckInternerProvider/CheckInternetProvider";

export default function RootLayout() {
    const isReady = useCachedResources();

    const { tintBackground } = useThemeColors();

    if (!isReady) {
        return (
            <CheckInternetProvider>
                <ThemeProvider>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: tintBackground,
                    }}>
                        <ActivityIndicator size="large" />
                    </View>
                </ThemeProvider>
            </CheckInternetProvider>

        );
    }

    return (
        <CheckInternetProvider>
            <ThemeProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </ThemeProvider>
        </CheckInternetProvider>
    );
}
