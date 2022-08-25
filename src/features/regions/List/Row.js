import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";
import { routeNames } from "../../../utilities/constants";

const Row = ({ region }) => {
    const styles = stylesFn();
    const { navigate } = useNavigation();

    const handlePress = () => {
        navigate(routeNames.customers.LIST_BY_REGION, { regionID: region.id });
    };

    return (
        <View style={ styles.row }>
            <TouchableOpacity
                onPress={ handlePress }
            >
                <Text key={ "name" } style={ styles.title }>Name: { region.name }</Text>
                <Text key={ "id" }>ID: { region.id }</Text>
            </TouchableOpacity>
        </View>
    );
};

Row.propTypes = {
    region: PropTypes.object.isRequired,
};

export default Row;
