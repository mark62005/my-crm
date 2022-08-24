import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome";

import { WELCOME_TITLE } from "../utilities/constants";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={ Welcome }
                    options={ { title: WELCOME_TITLE.title } }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;