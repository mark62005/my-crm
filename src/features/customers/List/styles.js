import { StyleSheet } from "react-native";

const stylesFn = () => {
    const styles = {
        container: {
            backgroundColor: "#fff",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: 5,
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
        section: {
            width: "100%",
            marginTop: 10,
            marginBottom: 20,
            alignItems: "center",
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
            marginBottom: 5,
        },
        subTitle: {
            fontSize: 16,
            fontWeight: "semi-bold",
            marginTop: 5,
            marginBottom: 3,
        },
        spacing: {
            height: 15,
            width: "100%",
        },
    };

    return StyleSheet.create(styles);
};

export default stylesFn;
