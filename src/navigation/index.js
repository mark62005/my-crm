import React from "react";
// https://reactnavigation.org/docs/navigation-container
import { NavigationContainer } from "@react-navigation/native";
// https://reactnavigation.org/docs/bottom-tab-navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// https://reactnavigation.org/docs/native-stack-navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// https://oblador.github.io/react-native-vector-icons/
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./screens/Home";
import New from "./screens/Customers/New";
import Edit from "./screens/Customers/Edit";
import CustomerList from "./screens/Customers/List";
import CustomerListByRegion from "./screens/Customers/ListByRegion";

import RegionsList from "./screens/Regions/List";
import { routeNames, tabIconNames, titles } from "../utilities/constants";

const Tab = createBottomTabNavigator();
const CustomerStack = createNativeStackNavigator();
const RegionStack = createNativeStackNavigator();

const CustomerStackScreen = () => {
    return (
        <CustomerStack.Navigator
            initialRouteName={ routeNames.customers.CUSTOMERS_LIST }
        >
            <CustomerStack.Screen
                name={ routeNames.customers.CUSTOMERS_LIST }
                component={ CustomerList }
            />
            <CustomerStack.Screen
                name={ routeNames.customers.NEW_CUSTOMER }
                component={ New }
                options={ { headerBackTitle: "Back" } }
            />
            <CustomerStack.Screen
                name={ routeNames.customers.EDIT_CUSTOMER }
                component={ Edit }
                options={ { headerBackTitle: "Cancel" } }
            />
            <RegionStack.Screen
                name={ routeNames.customers.LIST_BY_REGION }
                component={ CustomerListByRegion }
            />
        </CustomerStack.Navigator>
    );
};

const RegionStackScreen = () => {
    return (
        <RegionStack.Navigator initialRouteName={ routeNames.regions.REGIONS_LIST }>
            <RegionStack.Screen
                name={ routeNames.regions.REGIONS_LIST }
                component={ RegionsList }
                options={ { title: titles.REGIONS } }
            />
            <RegionStack.Screen
                name={ routeNames.customers.LIST_BY_REGION }
                component={ CustomerListByRegion }
            />
        </RegionStack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        const { home, customers, regions, NEW_CUSTOMER } = tabIconNames;

                        let iconName;
                        switch (route.name) {
                            case routeNames.HOME:
                                iconName = focused ? home.FOCUSED : home.UNFOCUSED;
                                break;
                            case routeNames.customers.CUSTOMERS:
                                iconName = focused ? customers.FOCUSED : customers.UNFOCUSED;
                                break;
                            case routeNames.regions.REGIONS:
                                iconName = focused ? regions.FOCUSED : regions.UNFOCUSED;
                                break;
                            case routeNames.customers.NEW_CUSTOMER:
                                iconName = NEW_CUSTOMER;
                                break;
                            default:
                                iconName = "";
                                break;
                        }

                        return <Ionicons name={ iconName } size={ size } color={ color } />;
                    },
                }) }
            >
                <Tab.Screen
                    name={ routeNames.HOME }
                    component={ Home }
                    options={ { title: titles.HOME } }
                />
                <Tab.Screen
                    name={ routeNames.customers.CUSTOMERS }
                    component={ CustomerStackScreen }
                    options={ { headerShown: false } }
                />
                <Tab.Screen
                    name={ routeNames.regions.REGIONS }
                    component={ RegionStackScreen }
                    options={ { headerShown: false } }
                />
                <Tab.Screen
                    name={ routeNames.customers.NEW_CUSTOMER }
                    component={ New }
                    options={ { title: titles.ADD_CUSTOMER } }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;