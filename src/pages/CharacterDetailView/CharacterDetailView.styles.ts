import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    avatar: {
        width: '100%',
        maxWidth: 360,
        height: 360,
        borderRadius: 12,
        marginBottom: 8,

    },

    name: {
        fontSize: 28,
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

    infoBlock: {
        flexDirection: 'row',
        gap: 30,
        flex: 1,
    },

    mitaTitlesJustify: {
        alignItems: 'flex-end',
    },

    statusRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
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

    episodeIndexWrapper: {
        padding: 12,
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    episodeIndex: {

        textAlign: 'center',
    },

    episodeInfo: {
        flex: 1,
        padding: 8,
        paddingLeft: 12,
        //marginLeft: 12,
        gap: 3,
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