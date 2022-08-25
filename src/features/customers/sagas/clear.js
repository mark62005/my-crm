import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { clear } from "../../../utilities/async_storage";

export function* watchClearCustomers() {
    yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers() {
    try {
        yield clear();

        yield delay(500);

        yield put(actions.clearCustomersResult());
    } catch (error) {
        return error;
    }
}
