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
import { routeNames, tabIconNames, titles } from "../utilities/constants";

const { HOME, customers, REGIONS } = routeNames;

const Tab = createBottomTabNavigator();
const CustomerStack = createNativeStackNavigator();

const CustomerStackScreen = () => {
    return (
        <CustomerStack.Navigator initialRouteName={ routeNames.customers.CUSTOMERS_LIST }>
            <CustomerStack.Screen
                name={ routeNames.customers.CUSTOMERS_LIST }
                component={ Home }
                options={ { headerShown: false } }
            />
        </CustomerStack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        const { home, customers, regions } = tabIconNames;

                        let iconName;
                        switch (route.name) {
                            case routeNames.HOME:
                                iconName = focused ? home.FOCUSED : home.UNFOCUSED;
                                break;
                            case routeNames.customers.CUSTOMERS:
                                iconName = focused ? customers.FOCUSED : customers.UNFOCUSED;
                                break;
                            case routeNames.REGIONS:
                                iconName = focused ? regions.FOCUSED : regions.UNFOCUSED;
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
                    name={ HOME }
                    component={ Home }
                    options={ { title: titles.HOME } }
                />
                <Tab.Screen
                    name={ customers.CUSTOMERS }
                    component={ CustomerStackScreen }
                />
                <Tab.Screen
                    name={ REGIONS }
                    component={ Home }
                    options={ { title: titles.REGIONS } }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;