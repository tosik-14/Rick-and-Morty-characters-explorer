import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    label: {
        marginBottom: 4,
    },
    value: {
        flex: 1,
        fontSize: 16,
        marginBottom: 4,
    },

    card: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },

    locationHeader: {
        flex: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 12,
        paddingBottom: 8,
    },
    rowWrapper: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    locationInfo:{
        padding: 12,
        //paddingTop: 0,
    },
    subBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subBlockText: {
        textAlign: 'center',
    },

});