import { all } from "redux-saga/effects";
import { watchLoadCustomers } from "./load";
import { watchCreateCustomer } from "./create";

export default function* customer() {
    yield all([
        watchLoadCustomers(),
        watchCreateCustomer(),
    ]);
}