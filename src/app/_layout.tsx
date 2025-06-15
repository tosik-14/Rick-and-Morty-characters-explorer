import { Stack } from 'expo-router';
import { useCachedResources } from '../shared/hooks/resources/useCachedResources';
import { View, ActivityIndicator } from 'react-native';
import { useThemeColors } from '../shared/hooks/useThemeColor';
import { ThemeProvider } from '../shared/theme/theme-context';

export default function RootLayout() {
    const isReady = useCachedResources();

    const { tintBackground } = useThemeColors();

    if (!isReady) {
        return (
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
        );
    }

    return (
        <ThemeProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </ThemeProvider>
    );
}
