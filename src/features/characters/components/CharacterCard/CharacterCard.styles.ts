import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        /*height: 180,*/
        //width: '100%',
        flexDirection: 'column',
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        padding: 12,
    },

    avatar: {
        width: 125,
        height: 125,
        marginRight: 10,
        marginBottom: 4,
        borderRadius: 8,
    },

    statusRow: {
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
    },

    rowWrapper: {
        flexDirection: 'row',
    },

    columnWrapper: {
        flexDirection: 'column',
    },

    statusCircle: {
        marginRight: 6,
    },

    info: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'end',
    },

    metaBlock: {
        marginTop: 0,
        //alignItems: 'flex-end',
        //justifyContent: 'end',
    },

    metaTitle: {
        marginTop: 8,
    },


    separator: {  //just line
        height: 1,
        backgroundColor: '#ccc',
        marginTop: 4,
        marginBottom: 4,
        marginHorizontal: 4,
        borderRadius: 2,
        opacity: 0.5,
    },

    name: {
        textAlign: 'center',
        marginTop: 6,
    },
});