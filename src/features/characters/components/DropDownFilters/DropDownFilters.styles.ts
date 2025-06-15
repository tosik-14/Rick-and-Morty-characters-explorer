import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 12,
    },
    pickerWrapper: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#3a3a3a',
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#2a2a2a',
    },
    picker: {
        height: 160,
        color: '#333',
    },
});
