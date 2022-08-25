import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import stylesFn from "./styles";
import { routeNames } from "../../../utilities/constants";
import Title from "../../../components/Title";

const Row = ({ customer }) => {
    const styles = stylesFn();
    const { navigate } = useNavigation();

    const handlePress = () => {
        // TODO: Edit Customer
        console.log("Edit Customer Button tapped.");
        navigate(routeNames.customers.EDIT_CUSTOMER, { customerID: customer.id });
    };

    return (
        <View style={ styles.row }>
            <TouchableOpacity
                onPress={ handlePress }
            >
                <Text key={ "fn" } style={ styles.name }>Name: { `${customer.first_name} ${customer.last_name}` }</Text>
                <Text key={ "id" }>ID: { customer.id }</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Row;
