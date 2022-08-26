import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { useNewCustomer, useCreateCustomerStatus } from "../hooks";
import Form from "../Form";

const New = () => {
    const navigation = useNavigation();
    const { onSubmit } = useNewCustomer();
    const status = useCreateCustomerStatus();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={ onSubmit } title="Add" disabled={status } />
    //         ),
    //     });
    // }, [ navigation ]);

    console.log("LENGTH::: ", [].length);

    return <Form handleSubmit={ onSubmit } currentStatus={ status } />;
};

export default New;
