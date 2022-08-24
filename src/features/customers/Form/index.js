import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
import { useUpdateFields, useListRegions } from "../hooks";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { status } from "../../../utilities/helpers";
import Button from "../../../components/Button";
import stylesFn from "./styles";

const Form = ({ handleSubmit, currentStatus, customerID }) => {
    const styles = stylesFn();
    const { navigate } = useNavigation();
    const {
        PENDING,
        INPROGRESS,
        REQUESTING,
        SUCCESS,
        ERROR
    } = status;
    const { fields, setFormField } = useUpdateFields(customerID);
    const regions = useListRegions();

    const {
        first_name,
        last_name,
        email,
        mobile,
        region
    } = fields;

    const onSubmit = () => {
        handleSubmit();
        navigate("Home");
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.form }>
                <Text>First Name:</Text>
                <TextInput
                    key={ "first_name" }
                    placeholder={ first_name || "First Name" }
                    value={ first_name || "" }
                    style={ {
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 4,
                        padding: 15,
                    } }
                    onChangeText={ (value) => setFormField("first_name", value) }
                />

                <View style={ { height: 15, width: "100%" } }></View>

                <Text>Last Name:</Text>

                <TextInput
                    key={ "last_name" }
                    placeholder={ last_name || "Last Name" }
                    value={ last_name || "" }
                    style={ {
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 4,
                        padding: 15,
                    } }
                    onChangeText={ (value) => setFormField("last_name", value) }
                />

                <View style={ { height: 15, width: "100%" } }></View>
                <Text>Email Address:</Text>
                <TextInput
                    key={ "email" }
                    placeholder={ email || "Email Address" }
                    value={ email || "" }
                    style={ {
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 4,
                        padding: 15,
                    } }
                    onChangeText={ (value) => setFormField("email", value) }
                />

                <View style={ { height: 15, width: "100%" } }></View>
                <Text>Mobile Number:</Text>
                <TextInput
                    key={ "mobile" }
                    placeholder={ mobile || "Mobile Number" }
                    value={ mobile || "" }
                    style={ {
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 4,
                        padding: 15,
                    } }
                    onChangeText={ (v) => setFormField("mobile", v) }
                />

                <View style={ { height: 15, width: "100%" } }></View>
                <Text>Region:</Text>
                {/* <SelectDropdown
                    data={ regions }
                    defaultValue={ region || "" }
                    onSelect={ (selectedItem, index) => {
                        setFormField("region", selectedItem.name);
                    } }
                    defaultButtonText={ region || "Select Region" }
                    buttonTextAfterSelection={ (selectedItem, index) => {
                        return selectedItem.name;
                    } }
                    rowTextForSelection={ (item, index) => {
                        return item.name;
                    } }
                    buttonStyle={ styles.dropdown1BtnStyle }
                    buttonTextStyle={ styles.dropdown1BtnTxtStyle }
                    renderDropdownIcon={ (isOpened) => {
                        return (
                            <FontAwesome
                                name={ isOpened ? "chevron-up" : "chevron-down" }
                                color={ "#444" }
                                size={ 18 }
                            />
                        );
                    } }
                    dropdownIconPosition={ "right" }
                    dropdownStyle={ styles.dropdown1DropdownStyle }
                    rowStyle={ styles.dropdown1RowStyle }
                    rowTextStyle={ styles.dropdown1RowTxtStyle }
                /> */}

                <Button
                    onPress={ onSubmit }
                    text="Submit"
                    disabled={
                        first_name === null ||
                        last_name === null ||
                        email === null ||
                        mobile === null ||
                        region === null ||
                        (currentStatus !== PENDING && currentStatus !== INPROGRESS)
                    }
                />
            </View>
        </View>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    currentStatus: PropTypes.string.isRequired,
    customerID: PropTypes.string,
};

export default Form;
