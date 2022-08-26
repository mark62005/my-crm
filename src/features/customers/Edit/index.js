import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";
import Form from "../Form";

const Edit = () => {
    const { params } = useRoute();
    const { customerID } = params;
    console.log("in EDIT feature", customerID);
    const { status, onSubmit } = useEditCustomer(customerID);

    return (
        <Form
            handleSubmit={ onSubmit }
            currentStatus={ status }
            customerID={ customerID }
        />
    );
};

export default Edit;
