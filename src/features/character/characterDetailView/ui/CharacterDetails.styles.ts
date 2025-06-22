import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    avatar: {
        width: "100%",
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
        width: "100%",
        backgroundColor: "#ccc",
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 4,
        borderRadius: 2,
        opacity: 0.5,
    },

    infoBlock: {
        flexDirection: "row",
        gap: 30,
        flex: 1,
    },

    metaTitlesJustify: {
        alignItems: "flex-end",
    },

    label: {
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        marginBottom: 4,
    },

    statusRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    statusCircle: {
        marginRight: 6,
        marginBottom: 2,
    },

    characterInfo: {
        alignSelf: "stretch",
        flexDirection: "column",
    },
});
