import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";
import { styles } from "./DropDownFilters.styles";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import { globalStyles } from "@/src/shared/styles/globalStyles";

type DropDownFiltersProps = {
    filters: {
        status: string;
        species: string;
    };
    setFilter: (key: "status" | "species", value: string) => void;
    close: () => void;
};

export default function DropDownFilters({
    filters,
    setFilter,
}: DropDownFiltersProps) {
    const { textColor, tintBackground, iconColor } = useThemeColors();

    return (
        <View style={styles.filtersContainer}>
            <View style={styles.pickerWrapper}>
                <Text
                    style={[
                        globalStyles.fontR14,
                        styles.label,
                        { color: textColor },
                    ]}
                >
                    Status
                </Text>
                <View
                    style={[
                        styles.pickerContainer,
                        { backgroundColor: tintBackground },
                    ]}
                >
                    <Picker
                        selectedValue={filters.status}
                        onValueChange={(val) => setFilter("status", val)}
                        style={styles.picker}
                        dropdownIconColor={iconColor}
                    >
                        <Picker.Item label="Any" value="" color={textColor} />
                        <Picker.Item
                            label="Alive"
                            value="alive"
                            color={textColor}
                        />
                        <Picker.Item
                            label="Dead"
                            value="dead"
                            color={textColor}
                        />
                        <Picker.Item
                            label="unknown"
                            value="unknown"
                            color={textColor}
                        />
                    </Picker>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text
                    style={[
                        globalStyles.fontR14,
                        styles.label,
                        { color: textColor },
                    ]}
                >
                    Species
                </Text>
                <View
                    style={[
                        styles.pickerContainer,
                        { backgroundColor: tintBackground },
                    ]}
                >
                    <Picker
                        selectedValue={filters.species}
                        onValueChange={(val) => setFilter("species", val)}
                        style={styles.picker}
                        dropdownIconColor={iconColor}
                    >
                        <Picker.Item label="Any" value="" color={textColor} />
                        <Picker.Item
                            label="Human"
                            value="human"
                            color={textColor}
                        />
                        <Picker.Item
                            label="Alien"
                            value="alien"
                            color={textColor}
                        />
                    </Picker>
                </View>
            </View>
        </View>
    );
}
