import { StyleSheet } from "react-native";

const stylesFn = () => {
    const styles = {
        container: {
            backgroundColor: "#fff",
            alignItems: "center",
            height: "100%",
            padding: 20,
        },
    };

    return StyleSheet.create(styles);
};

export default stylesFn;
