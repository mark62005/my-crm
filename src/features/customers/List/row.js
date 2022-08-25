import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import stylesFn from "./styles";

const Row = ({ customer }) => {
    const styles = stylesFn();
    const { navigate } = useNavigation();
    const region = useSelector((state) => {
        const regions = state.regions.list.regions;
        return Object.values(regions).find((r) => r.id === customer.region)[ "name" ];
    });

    const handlePress = () => {
        // TODO: Edit Customer
        console.log("Edit Customer Button tapped.");
    };

    return (
        <View key={ customer.id } style={ styles.row }>
            <TouchableOpacity
                onPress={ handlePress }
            >
                <Text key={ "id" }>ID: { customer.id }</Text>
                <Text key={ "fn" }>Name: { `${customer.first_name} ${customer.last_name}` }</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Row;
