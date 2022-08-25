import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ListByRegion from "../../../features/customers/ListByRegion";

const ListCustomersByRegion = () => (
    <SafeAreaView>
        <ScrollView>
            <ListByRegion />
        </ScrollView>
    </SafeAreaView>
);

export default ListCustomersByRegion;