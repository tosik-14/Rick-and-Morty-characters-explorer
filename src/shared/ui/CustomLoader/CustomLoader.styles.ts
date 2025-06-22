import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        /*flex: 1,*/
        top: "50%",
        left: "50%",
        right: 0,
        transform: [{ translateX: -100 }, { translateY: -100 }],
        height: 50,
        width: 190,
        backgroundColor: "rgba(0,0,0,0.0)",
        zIndex: 10,
    },
    baseText: {
        fontSize: 30,
        color: "#555555",
    },
    filledText: {
        fontSize: 30,
        height: 30,
        textAlign: "center",
        lineHeight: 30,
        color: "#02B0C9",
        position: "absolute",
        top: 0,
        left: 0,
        width: 190,
    },
    mask: {
        position: "absolute",
        overflow: "hidden",
        height: 30,
        top: "50%",
        marginTop: -15,
        left: 0,
        width: "100%",
    },
});
