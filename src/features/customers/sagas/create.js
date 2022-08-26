import { put, select, takeLatest, delay } from "redux-saga/effects";
import { set } from "../../../utilities/async_storage";
import { keys } from "../../../utilities/constants";
import { generateUID } from "../../../utilities/helpers";
import * as actions from "../reducers";

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
    console.log("Starting fetch request to API");

    try {
        const fields = yield select((state) => state.customers.form.fields);
        const customers = yield select((state) => state.customers.list.customers);

        const customer = {
            id: generateUID(),
            ...fields,
        };

        // pretend call to API
        yield delay(500);

        let result = [ ...customers ];
        if (customers.filter((c) => c.id === customer.id).length === 0) {
            result = [ customer, ...customers ];
        }

        yield set(keys.CUSTOMERS, result);

        yield put(actions.createCustomerResult(result));
    } catch (error) {
        yield put(actions.createCustomerError(error.toString()));
    }
}
