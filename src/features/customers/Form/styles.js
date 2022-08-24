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
        dropdown1BtnStyle: {
            width: "auto",
            height: 50,
            backgroundColor: "#FFF",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#444",
        },
        dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
        dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
        dropdown1RowStyle: {
            backgroundColor: "#EFEFEF",
            borderBottomColor: "#C5C5C5",
        },
        dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
    };

    return StyleSheet.create(styles);
};

export default stylesFn;
