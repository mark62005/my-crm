import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { routeNames, titles } from "../../../utilities/constants";
import stylesFn from "./styles";

const Home = () => {
    const styles = stylesFn();
    const { navigate } = useNavigation();

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
                        onPress={ () => {
                            // TODO: Clear data
                            console.log("CLEAR DATA BUTTON TAPPED");
                        } }
                        text="Clear Data"
                        disabled={ false }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
