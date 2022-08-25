import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import List from "../../../features/customers/List";

const ListCustomers = () => (
    <SafeAreaView>
        <ScrollView style={ { minHeight: "100%" } }>
            <List />
        </ScrollView>
    </SafeAreaView>
);

export default ListCustomers;
