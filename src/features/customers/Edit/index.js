import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer, useEditCustomerStatus } from "../hooks";
import Form from "../Form";

const Edit = () => {
    const { params } = useRoute();
    const { customerID } = params;
    console.log("in EDIT feature", customerID);
    const { status, onSubmit } = useEditCustomer(customerID);

    console.log("Status ::: ", status);
    return (
        <Form
            handleSubmit={ onSubmit }
            currentStatus={ status }
            customerID={ customerID }
        />
    );
};

export default Edit;
