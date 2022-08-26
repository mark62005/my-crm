import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListCustomers } from "../hooks";
import { routeNames } from "../../../utilities/constants";
import Section from "./section";
import MyButton from "../../../components/Button";
import stylesFn from "./styles";

const List = () => {
    const styles = stylesFn();
    const { navigate, setOptions } = useNavigation();
    const regions = useSelector((state) => state.regions.list.regions);
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
            {
                allCustomers && Object.keys(allCustomers).length > 0 ? (

                    Object.values(regions).map((region) => {
                        const customersByRegion =
                            Object.values(allCustomers).filter(
                                (c) => c.region === region.id
                            );

                        return <Section
                            key={ region.id }
                            customersByRegion={ customersByRegion }
                            region={ region }
                        />;
                    })
                ) : (
                    <View style={ styles.container }>
                        <Text style={ styles.subTitle }>{ "No customers yet!" } </Text>

                        <MyButton
                            text={ routeNames.customers.NEW_CUSTOMER }
                            onPress={ () => {
                                navigate(routeNames.customers.NEW_CUSTOMER);
                            } }
                            disabled={ false }
                        />
                    </View>
                )
            }
        </View>
    );
};

export default List;
