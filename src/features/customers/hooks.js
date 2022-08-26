import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { status } from "../../utilities/constants";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
    const dispatch = useDispatch();
    const currentStatus = useSelector((state) => state.customers.edit.status);
    const fields = useSelector((state) => state.customers.form.fields);

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
    const status = useCreateCustomerStatus();

    return {
        status,
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadCustomers());
    }, [ dispatch ]);

    if (regionID === null) {
        return useSelector((state) => state.customers.list.customers);
    }

    const customers = useSelector((state) => state.customers.list.customers);
    return customers.filter((c) => c.region === regionID);
};

export const useAddSampleCustomers = () => {
    const dispatch = useDispatch();
    const status = useAddSampleCustomersStatus();

    return {
        status,
        onSubmit: () => {
            console.log("Dispatching ADD_SAMPLE_CUSTOMERS action");
            dispatch(actions.addSampleCustomers());
        },
    };
};

export const useAddSampleCustomersStatus = () => {
    return useSelector((state) => state.customers.list.status);
};
