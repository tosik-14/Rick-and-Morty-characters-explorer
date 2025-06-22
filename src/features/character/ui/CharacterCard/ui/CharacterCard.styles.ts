import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: "#000",
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
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
    },

    rowWrapper: {
        flexDirection: "row",
    },

    columnWrapper: {
        flexDirection: "column",
    },

    statusCircle: {
        marginRight: 6,
    },

    info: {
        flex: 1,
    },

    metaBlock: {
        marginTop: 0,
    },

    metaTitle: {
        marginTop: 8,
    },

    justLine: {
        height: 1,
        backgroundColor: "#ccc",
        marginTop: 4,
        marginBottom: 4,
        marginHorizontal: 4,
        borderRadius: 2,
        opacity: 0.5,
    },

    name: {
        textAlign: "center",
        marginTop: 6,
    },
});
