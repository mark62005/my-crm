import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListRegions } from "../hooks";
import Row from "./Row";
import Button from "../../../components/Button";
import stylesFn from "./styles";

const List = () => {
    const styles = stylesFn();
    const { navigate } = useNavigation();

    const regions = useListRegions();
    console.log(regions);

    console.log("in list ::: ", regions);

    return (
        <View style={ styles.container }>
            { regions && Object.keys(regions).length > 1
                ? (
                    Object.values(regions).map((region) => (
                        <Row key={ region.id } region={ region } />
                    ))
                ) : (
                    <>
                        <Text>{ "Something went wrong. Regions not found." }</Text>
                        <Button
                            text="Back to Home"
                            onPress={ () => { navigate("Home"); } }
                        />
                    </>
                ) }
        </View>
    );
};

export default List;
