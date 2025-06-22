import React, { useState, useCallback } from "react";
import {
    Pressable,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useCharacterList } from "@/src/features/character/characterList/model/useCharacterList";
import { styles } from "@/src/pages/CharacterList/CharacterList.styles";
import CharacterCard from "@/src/features/character/ui/CharacterCard/ui/CharacterCard";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import DropDownFilters from "@/src/features/character/DropDownFilters/DropDownFilters";
import { CustomLoader } from "@/src/shared/ui/CustomLoader/CustomLoader";
import { CharacterListHeader } from "@/src/features/character/ui/CharacterListHeader/CharacterListHeader";

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

    const { backgroundColor, tintBackground, borderColor, tint, iconColor } =
        useThemeColors();

    const renderItem = useCallback(
        ({ item }) => (
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: `/character/${item.id}`,
                    });
                }}
            >
                <CharacterCard character={item} />
            </TouchableOpacity>
        ),
        [router],
    );

    if (error) {
        return (
            <View style={[styles.container, { backgroundColor }]}>
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
        <View style={[styles.container, { backgroundColor }]}>
            {showFilters && (
                <Pressable
                    style={styles.overlay}
                    onPress={() => setShowFilters(false)}
                >
                    <Pressable
                        style={[
                            styles.dropdownContainer,
                            {
                                backgroundColor: tintBackground,
                                borderTopColor: borderColor,
                            },
                        ]}
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
                ListFooterComponent={loading ? <CustomLoader /> : null}
                removeClippedSubviews={true}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                windowSize={5}
                contentContainerStyle={{
                    justifyContent: "center",
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
