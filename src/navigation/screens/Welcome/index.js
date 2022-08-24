import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import stylesFn from "./styles";

export default function Welcome() {
    const styles = stylesFn();
    const { navigate } = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ styles.container }>
                    <Title text="Welcome to My CRM" />

                    <Button
                        onPress={ () => navigate("Add Customer") }
                        text="Create Customer"
                        disabled={ false }
                    />

                    <Button
                        onPress={ () => navigate("Customers") }
                        text="View Customers"
                        disabled={ false }
                    />
                    <Button
                        onPress={ () => {
                            // TODO: Clear data
                        } }
                        text="Clear Data"
                        disabled={ false }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
