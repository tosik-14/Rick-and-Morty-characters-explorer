import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    justLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 4,
        borderRadius: 2,
        opacity: 0.5,
    },



    label: {
        marginBottom: 4,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});