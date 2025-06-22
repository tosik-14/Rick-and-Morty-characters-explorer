import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    value: {
        flex: 1,
        fontSize: 16,
        marginBottom: 4,
    },
    card: {
        width: "100%",
        flexDirection: "column",
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    rowWrapper: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
    },

    episodeIndexWrapper: {
        padding: 12,
        height: "100%",
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    episodeIndex: {
        textAlign: "center",
    },

    episodeInfo: {
        flex: 1,
        padding: 8,
        paddingLeft: 12,
        //marginLeft: 12,
        gap: 3,
    },
});
