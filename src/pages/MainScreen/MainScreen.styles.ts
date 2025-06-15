import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
    },

    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },

    headerFilterButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginRight: 20,
    },

    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.2)', // можно сделать затемнение фона
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    dropdownContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        // любые другие стили фильтра
    },

});