import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './DropDownFilters.styles'

type DropDownFiltersProps = {
    filters: {
        status: string;
        species: string;
    };
    setFilter: (key: 'status' | 'species', value: string) => void;
    close: () => void;
};

export default function DropDownFilters({ filters, setFilter, close }: DropDownFiltersProps) {


    return (
        <View style={styles.filtersContainer}>
            <View style={styles.pickerWrapper}>
                <Text style={styles.label}>Status:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={filters.status}
                        onValueChange={val => setFilter('status', val)}
                        style={styles.picker}
                        dropdownIconColor="#333"
                    >
                        <Picker.Item label="Any" value="" />
                        <Picker.Item label="Alive" value="alive" />
                        <Picker.Item label="Dead" value="dead" />
                        <Picker.Item label="unknown" value="unknown" />
                    </Picker>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.label}>Species:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={filters.species}
                        onValueChange={val => setFilter('species', val)}
                        style={styles.picker}
                        dropdownIconColor="#333"
                    >
                        <Picker.Item label="Any" value="" />
                        <Picker.Item label="Human" value="human" />
                        <Picker.Item label="Alien" value="alien" />
                    </Picker>
                </View>
            </View>
        </View>

    );
}
