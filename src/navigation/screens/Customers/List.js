import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import List from "../../../features/customers/List";

const ListCustomers = () => (
    <SafeAreaView>
        <ScrollView>
            <List />
        </ScrollView>
    </SafeAreaView>
);

export default ListCustomers;
