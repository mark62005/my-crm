import { StyleSheet } from "react-native";

const stylesFn = () => {
    const styles = {
        container: {
            backgroundColor: "#fff",
            alignItems: "center",
            height: "100%",
            padding: 20,
        },
        button: {
            width: 200,
            height: 30,
            borderRadius: 3,
            margin: 10,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
        },
        buttonText: {
            color: "white",
        },
        row: {
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin: 10,
            width: "90%",
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 3,
        },
    };

    return StyleSheet.create(styles);
};

export default stylesFn;
