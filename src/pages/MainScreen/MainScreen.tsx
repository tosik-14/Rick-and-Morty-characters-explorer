import React, {useCallback} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useMainScreen } from './useMainScreen';
import { styles } from './MainScreen.styles';
import Icon from '../../shared/ui/Icon';
import CharacterCard from '../../features/characters/components/CharacterCard/CharacterCard'
import { useThemeColors } from '../../shared/hooks/useThemeColor';
/*import { useEffect } from 'react';*/


export default function MainScreen() {
    const {
        characters,
        loading,
        initialLoading,
        loadMore,
        error,
    } = useMainScreen();

    const router = useRouter();

    const {
        backgroundColor,
    } = useThemeColors();

    const renderItem = useCallback(({ item }) => (
        <TouchableOpacity
            onPress={() => {
                router.push({
                    pathname: `/character/${item.id}`,
                });
            }}>
            <CharacterCard character={item} />
        </TouchableOpacity>
    ), [router]);

    if (error) {
        return (
            <View style={[styles.container, {backgroundColor}]}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <FlatList
                data={characters}
                extraData={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
                /*ListFooterComponent={
                    <ActivityIndicator
                        size="small"
                        animating={loading}
                        style={{ opacity: loading ? 1 : 0, height: loading ? undefined : 0 }}
                    />
                }*/

                removeClippedSubviews={true}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                windowSize={5}
            />
            {loading && initialLoading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" />
                </View>
            )}
        </View>
    );
}