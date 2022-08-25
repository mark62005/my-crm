import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { keys } from "../../../utilities/constants";
import { get } from "../../../utilities/async_storage";

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
    try {
        const customers = yield get(keys.CUSTOMERS);

        yield delay(500);

        yield get(keys.CUSTOMERS);

        yield put(actions.loadCustomersResult(customers));
    } catch (error) {
        yield put(actions.loadCustomersResult([]));
    }
}
