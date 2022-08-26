import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { SafeAreaView, ScrollView, View } from "react-native";
import { addSampleCustomers, clearCustomers } from "../../../features/customers/reducers";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { routeNames, titles } from "../../../utilities/constants";
import stylesFn from "./styles";

const Home = () => {
    const styles = stylesFn();
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ styles.container }>
                    <Title text={ `Welcome to ${titles.HOME}` } />

                    <Button
                        onPress={ () => navigate(routeNames.customers.NEW_CUSTOMER) }
                        text="Add Customer"
                        disabled={ false }
                    />

                    <Button
                        onPress={ () => navigate(routeNames.customers.CUSTOMERS) }
                        text="View Customers"
                        disabled={ false }
                    />

                    <Button
                        onPress={ () => navigate(routeNames.regions.REGIONS) }
                        text="View Regions"
                        disabled={ false }
                    />

                    <Button
                        onPress={ () => dispatch(addSampleCustomers()) }
                        text="Add Sample Data"
                        disabled={ false }
                    />

                    <Button
                        onPress={ () => dispatch(clearCustomers()) }
                        text="Clear Data"
                        disabled={ false }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
