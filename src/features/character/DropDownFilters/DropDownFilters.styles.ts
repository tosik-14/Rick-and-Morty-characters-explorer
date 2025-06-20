import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 12,
        width: '100%',
        paddingHorizontal: 9,
    },
    pickerWrapper: {
        flex: 1,
    },
    label: {
        display: 'flex',
        textAlign: 'center',
    },
    pickerContainer: {
        overflow: 'hidden',
        backgroundColor: '#1e2223',
        borderRadius: 12,
    },
    picker: {
        height: 160,
        color: '#333',
    },
});
