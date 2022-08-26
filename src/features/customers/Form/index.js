import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ListItem, Icon } from "@rneui/themed";
import { useUpdateFields } from "../hooks";
import { status, regions, routeNames, tabIconNames } from "../../../utilities/constants";
import MyButton from "../../../components/Button";
import stylesFn from "./styles";

const Form = ({ handleSubmit, currentStatus, customerID }) => {
    const [ expanded, setExpanded ] = useState(false);

    const styles = stylesFn();
    const { navigate, setOptions } = useNavigation();
    const { PENDING, INPROGRESS } = status;
    const { fields, setFormField } = useUpdateFields(customerID);

    const {
        first_name,
        last_name,
        email,
        mobile,
        region
    } = fields;

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <Button
                    onPress={ onSubmit }
                    title="Save"
                    disabled={
                        first_name === "" ||
                        last_name === "" ||
                        email === "" ||
                        mobile === "" ||
                        (currentStatus !== PENDING && currentStatus !== INPROGRESS)
                    }
                />
            ),
            headerBackTitle: "Back",
        });
    }, [
        setOptions,
        first_name,
        last_name,
        email,
        mobile,
        currentStatus
    ]);

    const onSubmit = () => {
        handleSubmit();
        navigate(routeNames.customers.CUSTOMERS_LIST);
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.form }>
                <Text>First Name:</Text>
                <TextInput
                    key={ "first_name" }
                    placeholder={ first_name || "First Name" }
                    value={ first_name }
                    style={ styles.input }
                    onChangeText={ (value) => setFormField("first_name", value) }
                />

                <View style={ styles.spacing }></View>

                <Text>Last Name:</Text>

                <TextInput
                    key={ "last_name" }
                    placeholder={ last_name || "Last Name" }
                    value={ last_name }
                    style={ styles.input }
                    onChangeText={ (value) => setFormField("last_name", value) }
                />

                <View style={ styles.spacing }></View>
                <Text>Email Address:</Text>
                <TextInput
                    key={ "email" }
                    placeholder={ email || "Email Address" }
                    value={ email }
                    style={ styles.input }
                    keyboardType="email-address"
                    onChangeText={ (value) => setFormField("email", value) }
                />

                <View style={ styles.spacing }></View>
                <Text>Mobile Number:</Text>
                <TextInput
                    key={ "mobile" }
                    placeholder={ mobile || "Mobile Number" }
                    value={ mobile }
                    style={ styles.input }
                    keyboardType="phone-pad"
                    onChangeText={ (value) => setFormField("mobile", value) }
                />

                <View style={ styles.spacing }></View>
                <ListItem.Accordion
                    content={
                        <View style={ styles.accordian }>
                            <Icon
                                name={ tabIconNames.regions.UNFOCUSED }
                                type="ionicon"
                                size={ 30 }
                                style={ { marginEnd: 10 } }
                            />
                            <ListItem.Content style={ {} }>
                                <ListItem.Title>Region</ListItem.Title>
                            </ListItem.Content>
                        </View>
                    }
                    isExpanded={ expanded }
                    onPress={ () => { setExpanded(!expanded); } }
                >
                    <Picker
                        selectedValue={ region }
                        onValueChange={ (value) => setFormField("region", value) }
                    >
                        {
                            Object.values(regions).map((region) => (
                                <Picker.Item
                                    key={ region.id }
                                    label={ region.name }
                                    value={ region.id }
                                />
                            ))
                        }
                    </Picker>
                </ListItem.Accordion>

                <MyButton
                    onPress={ onSubmit }
                    text="Save"
                    disabled={
                        first_name === "" ||
                        last_name === "" ||
                        email === "" ||
                        mobile === "" ||
                        currentStatus !== PENDING
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
