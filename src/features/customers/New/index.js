import React from "react";
import { useNewCustomer, useCreateCustomerStatus } from "../hooks";
import Form from "../Form";

const New = () => {
    const { onSubmit } = useNewCustomer();
    const status = useCreateCustomerStatus();

    return <Form handleSubmit={ onSubmit } currentStatus={ status } />;
};

export default New;
