import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useListCustomers } from "../hooks";
import { useListRegions } from "../../regions/hooks";
import { routeNames } from "../../../utilities/constants";
import Row from "../List/row";
import MyButton from "../../../components/Button";
import stylesFn from "./styles";

const ListByRegion = () => {
    const styles = stylesFn();
    const { navigate, setOptions } = useNavigation();
    const { params } = useRoute();
    const { regionID } = params;
    const regions = useListRegions();
    const region = Object.values(regions).find((r) => r.id === regionID);
    const customers = useListCustomers(regionID);
    console.log("in list ::: ", customers);

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <Button
                    onPress={ () => navigate(routeNames.regions.REGIONS_LIST) }
                    title="Add"
                    disabled={ false }
                />
            ),
            headerBackTitle: "Back",
            title: region.name,
        });
    }, [ setOptions ]);

    return (
        <View style={ styles.container }>
            {
                customers && customers.length > 0
                    ? (
                        customers.map((customer) => (
                            <Row key={ customer.id } customer={ customer } />
                        ))
                    ) : (
                        <>
                            <Text style={ styles.subTitle }>{ "No customers yet!" }</Text>
                            <MyButton
                                text={ routeNames.customers.NEW_CUSTOMER }
                                onPress={ () => {
                                    navigate(routeNames.customers.NEW_CUSTOMER);
                                } }
                                disabled={ false }
                            />
                        </>
                    )
            }
        </View>
    );
};

export default ListByRegion;
