import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        alignItems: 'center',
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
        justifyContent: 'start',
        alignItems: 'center',

        zIndex: 10,
    },
    dropdownContainer: {
        width: '100%',
        borderTopWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderRadius: 8,
        padding: 4,
        // любые другие стили фильтра
    },

    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //left: '50%',
        backgroundColor: 'red',
        width: '100%',
        height: 40,
    },

    flatList: {
        width: '100%',
    }

});