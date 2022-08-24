import { StyleSheet } from "react-native";

const stylesFn = () => {
    const styles = {
        container: {
            margin: "5%",
        },
        form: {
            height: "100%",
            width: "100%",
        },
        input: {
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
        },
        spacing: {
            height: 15,
            width: "100%",
        },
        accordian: {
            width: "80%",
            display: "flex",
            flexDirection: "row",
        }
    };

    return StyleSheet.create(styles);
};

export default stylesFn;
