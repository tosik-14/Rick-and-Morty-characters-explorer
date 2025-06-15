import React, {useState, useLayoutEffect, useCallback} from 'react';
import { Pressable, View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useCharacters } from './useCharacters';
import { styles } from './MainScreen.styles';
import Icon from '../../shared/ui/Icon';
import CharacterCard from '../../features/characters/components/CharacterCard/CharacterCard'
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import DropDownFilters from '../../features/characters/components/DropDownFilters/DropDownFilters';
import {globalStyles} from "@/src/shared/styles/globalStyles";

export default function MainScreen({ navigation }) {
    const [showFilters, setShowFilters] = useState(false);

    const {
        characters,
        loading,
        initialLoading,
        loadMore,
        reset,
        error,
        filters,
        setFilter
    } = useCharacters();

    const router = useRouter();


    const {
        backgroundColor,
        tint,
        iconColor,
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

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => setShowFilters(prev => !prev)}>
                    <View style={styles.headerFilterButton}>
                        <Icon name="filter" size={12} color={iconColor}></Icon>
                        <Text style={[globalStyles.fontR16, { color: tint }]}>Filter</Text>
                    </View>

                </TouchableOpacity>
            ),
        });
    }, [navigation, tint, iconColor]);

    return (
        <View style={[styles.container, {backgroundColor}]}>

            {showFilters && (
                <Pressable
                    style={styles.overlay}
                    onPress={() => setShowFilters(false)} // Закрываем при нажатии вне фильтра
                >
                    <Pressable
                        style={styles.dropdownContainer}
                        onPress={(e) => e.stopPropagation()} // Предотвращаем всплытие нажатия внутри фильтра
                    >
                        <DropDownFilters
                            filters={filters}
                            setFilter={setFilter}
                            close={() => setShowFilters(false)}
                        />
                    </Pressable>
                </Pressable>
            )}
            <FlatList
                data={characters}
                extraData={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}

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