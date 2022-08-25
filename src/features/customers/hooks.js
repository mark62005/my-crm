import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../../utilities/constants";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
    const dispatch = useDispatch();
    const currentStatus = useSelector((state) => state.customers.edit.status);
    const fields = useSelector((state) => state.customers.form.fields);
    console.log("in hook", customerID, currentStatus, fields);

    useEffect(() => {
        if (customerID && currentStatus === status.PENDING) {
            dispatch(actions.setForm(customerID));
        }
    }, [ customerID, currentStatus ]);

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`);

            dispatch(actions.setFormField({ field, value }));
        },
    };
};

export const useNewCustomer = () => {
    const dispatch = useDispatch();

    return {
        onSubmit: () => {
            console.log("Dispatching CREATE_CUSTOMER action");
            dispatch(actions.createCustomer());
        },
    };
};

export const useCreateCustomerStatus = () => {
    return useSelector((state) => state.customers.create.status);
};

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch();
    const status = useEditCustomerStatus();

    return {
        status,
        onSubmit: () => {
            console.log("Dispatching EDIT_CUSTOMER action");
            dispatch(actions.editCustomer(customerID));
        },
    };
};

export const useEditCustomerStatus = () => {
    return useSelector((state) => state.customers.edit.status);
};

export const useListCustomers = (regionID = null) => {
    if (regionID === null) {
        return useSelector((state) => state.customers.list.customers);
    }
};
