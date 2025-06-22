import React, {useState, useLayoutEffect, useCallback} from 'react';
import { Pressable, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useCharacterList } from '../../features/character/characterList/model/useCharacterList';
import { styles } from './CharacterList.styles';
import Icon from '../../shared/ui/Icon';
import CharacterCard from '../../features/character/ui/CharacterCard/ui/CharacterCard'
import { useThemeColors } from '../../shared/hooks/useThemeColor';
import DropDownFilters from '../../features/character/DropDownFilters/DropDownFilters';
import {globalStyles} from "../../shared/styles/globalStyles";
import {CustomLoader} from "../../shared/ui/CustomLoader/CustomLoader";
import {showSimpleAlert} from "@/src/shared/ui/showSimpleAlert/showSimpleAlert";
import {CharacterListHeader} from "@/src/features/character/ui/CharacterListHeader/CharacterListHeader";

export default function CharacterList({ navigation }) {
    const [showFilters, setShowFilters] = useState(false);
    const router = useRouter();

    const {
        characters,
        loading,
        initialLoading,
        loadMore,
        error,
        filters,
        setFilter,
        isConnected,
    } = useCharacterList();

    const {
        backgroundColor,
        tintBackground,
        borderColor,
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

    CharacterListHeader({
        navigation,
        isConnected,
        iconColor,
        tint,
        setShowFilters,
        styles,
    });

    return (
        <View style={[styles.container, {backgroundColor}]}>

            {showFilters && (
                <Pressable
                    style={styles.overlay}
                    onPress={() => setShowFilters(false)}
                >
                    <Pressable
                        style={[styles.dropdownContainer, {backgroundColor: tintBackground, borderTopColor: borderColor}]}
                        onPress={(e) => e.stopPropagation()}
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

                ListFooterComponent={loading ? <CustomLoader  /> : null}

                removeClippedSubviews={true}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                windowSize={5}
                contentContainerStyle={{
                    justifyContent: 'center',
                }}
                style={styles.flatList}
            />

            {loading && initialLoading && (
                <View style={styles.loadingOverlay}>
                    <CustomLoader />

                </View>
            )}
        </View>
    );
}