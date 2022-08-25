import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListCustomers } from "../hooks";
import { routeNames } from "../../../utilities/constants";
import Row from "./row";
import MyButton from "../../../components/Button";
import stylesFn from "./styles";

const List = () => {
    const styles = stylesFn();
    const { navigate, setOptions } = useNavigation();
    // const { params } = useRoute();
    // const { regionID } = params;
    // const region = useSelector((state) =>
    //     state.customers.list.regions.find((r) => r.id === regionID)
    // );
    const allCustomers = useListCustomers();
    console.log("in list ::: ", allCustomers);

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <Button
                    onPress={ () => navigate(routeNames.customers.NEW_CUSTOMER) }
                    title="Add"
                    disabled={ false }
                />
            ),
        });
    }, [ setOptions ]);

    return (
        <View style={ styles.container }>
            { allCustomers && Object.keys(allCustomers).length > 0 ? (
                Object.values(allCustomers).map((customer) => (
                    <Row key={ customer.id } customer={ customer } />
                ))
            ) : (
                <>
                    <Text>{ "No customers yet!" }</Text>
                    <MyButton
                        text={ routeNames.customers.NEW_CUSTOMER }
                        onPress={ () => {
                            navigate(routeNames.customers.NEW_CUSTOMER);
                        } }
                        disabled={ false }
                    />
                </>
            ) }
        </View>
    );
};

export default List;
